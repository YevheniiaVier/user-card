import { useState, useEffect, useCallback, useContext } from "react";
import { getTotalUsers, getUsers } from "../../services/tweets-api";
import { CgMoreO } from "react-icons/cg";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

import { Loader } from "../../components/Loader/Loader";

import { GoBackBtn, Nav, Section, TweetsBox } from "./TweetsPage.styled";
import { getFollowedCards } from '../../helpers/getFollowedCards';

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
  

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState(OPTIONS.SHOW_ALL);
  const [totalCards, setTotalCards] = useState(0);

  const [showButton, setShowButton] = useState(false);
  const [searchParams] = useSearchParams();
  const [emptyResults, setEmptyResults] = useState("");
  const followedCards = getFollowedCards();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  const goBack = () => navigate(from);

  const limit = searchParams.get("limit") || 3;

  const handleOptionSelect = useCallback(
    async (totalUsers) => {
      console.log('followedCards', followedCards)
      // setCards([]);
      let cardsList = [];
      if (selectedOption === OPTIONS.FOLLOW) {
        cardsList = totalUsers.filter(
          (card) => !followedCards.includes(card.id)
        );
      } else if (selectedOption === OPTIONS.FOLLOWING) {
        cardsList = totalUsers.filter((card) =>
          followedCards.includes(card.id)
        );
      } else {
        // setPage(1);
      }
      setCards(cardsList);
      setShowButton(false);
      window.scrollTo(0, 0);
    },
    [followedCards, selectedOption]
  );
const getAll = async()=> {
  try {
    const data = await getTotalUsers();
    setTotalCards(data)
    return 
  } catch (error) {
    console.log(error)
  }
}
  useEffect(() => {
    const fetchTweets = async () => {
      try {
        setIsLoading(true);
    getAll();
        
        const totalPages = Math.ceil(totalCards.length / limit);
        if (selectedOption !== OPTIONS.SHOW_ALL) {
          handleOptionSelect(totalCards);
          // setPage(1);
        } else {
          const result = await getUsers(page);
          setCards((prevState) =>
          page === 1 ? result : [...prevState, ...result]
        );
          setShowButton(true);
          if (result.length <= limit && page === totalPages) {
            setShowButton(false);
            setEmptyResults(
              `We're sorry, but you've reached the end of  results.`
            );
          } else {
            setShowButton(true);
          }
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTweets();
  }, [limit, page]);

  const getOption = useCallback((option) => {
    setSelectedOption(option);
  }, []);

  const handleUpdate = (updatedCard) => {
    console.log('onUpdate', cards)
    // setCards((prevState) =>
    // prevState.map((card) => (card.id === updatedCard.id ? updatedCard : card))
    // );
  }

  // useEffect(() => {
  //   if ( cards.length > 3 && page !== 1) {
  //     onSmoothScroll();
  //   }
  // }, [cards, page]);

  const loadMore = useCallback(() => {
    setPage((prevState) => prevState + 1);
  }, []);

  return (
    <Section>
      <Nav>
        <GoBackBtn type="button" onClick={goBack}>
          <TfiControlBackward /> Go back
        </GoBackBtn>
        {<Dropdown onOptionSelect={getOption} />}
      </Nav>

      <TweetsBox>
        {isLoading && !showButton && <Loader />}
        {error && <p>...error</p>}
        {cards.length > 0 && (
          <TweetsList 
          // onFollowersCountUpdate={handleUpdate} 
          cards={cards} />
        )}
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
    </Section>
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
