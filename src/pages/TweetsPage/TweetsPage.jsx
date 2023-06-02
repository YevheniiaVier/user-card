import { useState, useEffect, useCallback } from "react";
import { getTotalCount, getUsers } from "../../services/tweets-api";
import { useSearchParams } from "react-router-dom";
import { CgMoreO } from "react-icons/cg";

// import { useParams } from 'react-router-dom';
import { Loader } from "../../components/Loader/Loader";

import { TweetsBox } from "./TweetsPage.styled";
import { updateUser, getUser } from "../../services/tweets-api";

import TweetsList from "../../components/TweetsList/TweetsList";
import Button from "../../components/Button/Button";
import { CircleLoader } from "../../components/Loader/Loader";

const TweetsPage = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [isUpdated, setIsUpdated] = useState(false);

  const [showButton, setShowButton] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  // const page = Number(searchParams.get("page")) || 1;
  const [emptyResults, setEmptyResults] = useState("");

  const limit = searchParams.get("limit") || 3;

  useEffect(() => {
    setCards([]);
  }, []);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        // setShowButton(false);
        setIsLoading(true);
        const data = await getTotalCount();
        const totalPages = Math.ceil(data / limit);

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
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTweets();
  }, [limit, page]);

  const handleUpdate = async (updatedCard) => {
    console.log("aaaaaa", updatedCard);
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
  //   if (cards.length > 3 && page !== 1) {
  //     onSmoothScroll();
  //   }
  // }, [cards, page]);

  const loadMore = useCallback(() => {
    setPage((prevState) => prevState + 1);
  }, []);

  return (
    <TweetsBox>
      {isLoading && <Loader />}
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
