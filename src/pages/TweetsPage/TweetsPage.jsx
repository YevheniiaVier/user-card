import { useState, useEffect, useCallback, useContext } from "react";
import { getTotalUsers, getUsers } from "../../services/tweets-api";
import { useSearchParams } from "react-router-dom";
import { CgMoreO } from "react-icons/cg";
import { useParams, useNavigate, Outlet, useLocation } from "react-router-dom";
import { FollowedContext } from "../../FollowedContext";

import { Loader } from "../../components/Loader/Loader";

import { GoBackBtn, TweetsBox } from "./TweetsPage.styled";

import TweetsList from "../../components/TweetsList/TweetsList";
import Button from "../../components/Button/Button";
import { CircleLoader } from "../../components/Loader/Loader";
import { TfiControlBackward } from "react-icons/tfi";
import Dropdown from "../../components/DropDown/DropDown";

const OPTIONS = {
  SHOW_ALL: "Show All",
  FOLLOW: "Follow",
  FOLLOWING: "Following",
};

const TweetsPage = () => {
  const [cards, setCards] = useState([]);
  const { followedCards, setFollowedCards } = useContext(FollowedContext);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [isUpdated, setIsUpdated] = useState(false);
  const [selectedOption, setSelectedOption] = useState(OPTIONS.SHOW_ALL);

  const [showButton, setShowButton] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [emptyResults, setEmptyResults] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  const goBack = () => navigate(from);

  const limit = searchParams.get("limit") || 3;

  useEffect(() => {
    setCards([]);
  }, []);
  const handleOptionSelect = useCallback(
    async () => {
      const data = await getTotalUsers();
      let cardsList = [];
      if (selectedOption === OPTIONS.FOLLOW) {
        cardsList = data.filter((card) => !followedCards.includes(card.id));
        // console.log("filteredCards1", cardsList);
      } else if (selectedOption === OPTIONS.FOLLOWING) {
        cardsList = data.filter((card) => followedCards.includes(card.id));
        // console.log("filteredCards2", cardsList);
      } else if (selectedOption === OPTIONS.SHOW_ALL) {
      }
      setCards(cardsList);
      setShowButton(false);
    },
    [followedCards, selectedOption],
  )
  

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        setIsLoading(true);
        const data = await getTotalUsers();
        const totalPages = Math.ceil(data.length / limit);
       
        if (selectedOption === OPTIONS.SHOW_ALL) {
          const result = await getUsers(page);
          setCards((prevState) => [...prevState, ...result]);
          setShowButton(true);
          if (result.length <= 3 && page === totalPages) {
            setShowButton(false);
            setEmptyResults(
              `We're sorry, but you've reached the end of  results.`
            );
          } else {
            setShowButton(true);
          }
        } else {
          handleOptionSelect();
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTweets();
  }, [handleOptionSelect, limit, page, selectedOption]);


  const getOption = (option) => {
    setSelectedOption(option);
  };
  const handleUpdate = async (updatedCard) => {
    try {
      const updatedCards = await Promise.all(
        cards.map(async (card) => {
          if (card.id === updatedCard.id) {
            return updatedCard;
          }
          return card;
        })
      );
      setCards(updatedCards);
    } catch (error) {
      setError(error.message);
    }
  };

  // useEffect(() => {
  //   if ( cards.length > 3 && page !== 1) {
  //     onSmoothScroll();
  //   }
  // }, [cards, page]);

  const loadMore = useCallback(() => {
    setPage((prevState) => prevState + 1);
  }, []);

  return (
    <TweetsBox>
      <GoBackBtn type="button" onClick={goBack}>
        <TfiControlBackward /> Go back
      </GoBackBtn>
      { <Dropdown onOptionSelect={getOption} />}
      {isLoading && !showButton && <Loader />}
      {error && <p>...error</p>}
      {cards.length > 0 && (
        <TweetsList onFollowersCountUpdate={handleUpdate} cards={cards} />
      )}
      {/* {!error && !loading && cards.length === 0 && <p> "no more results"</p>} */}
      {showButton && (
        <Button
          disabled={isLoading}
          type="button"
          text="load more"
          onClick={loadMore}
        >
          {!isLoading && <CgMoreO size={30} />}
          {isLoading && <CircleLoader />}
        </Button>
      )}
      {!showButton && emptyResults && <p>{emptyResults}</p>}
    </TweetsBox>
  );
};

// function onSmoothScroll() {
//   const { height: cardHeight } = document
//     .querySelector("#gallery")
//     .firstElementChild.getBoundingClientRect();
//   window.scrollBy({
//     top: cardHeight * 1,
//     behavior: "smooth",
//   });
// }
export default TweetsPage;
