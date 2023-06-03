import { useState, useEffect, useCallback } from "react";
import { getTotalUsers, getUsers } from "../../services/tweets-api";
import { CgMoreO } from "react-icons/cg";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

import { Loader } from "../../components/Loader/Loader";

import { GoBackBtn, Nav, Section, TweetsBox } from "./TweetsPage.styled";
import { getFollowedCards } from "../../helpers/getFollowedCards";

import TweetsList from "../../components/TweetsList/TweetsList";
import Button from "../../components/Button/Button";
import { CircleLoader } from "../../components/Loader/Loader";
import { TfiControlBackward } from "react-icons/tfi";
import { Dropdown } from "../../components/DropDown/DropDown";
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';

import { OPTIONS } from "../../components/DropDown/DropDown";
const TweetsPage = () => {
  const [cards, setCards] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState(OPTIONS.SHOW_ALL);

  const [showButton, setShowButton] = useState(false);
  const [searchParams] = useSearchParams();
  const [emptyResults, setEmptyResults] = useState("");
 

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  const goBack = () => navigate(from);

  const limit = searchParams.get("limit") || 3;


  useEffect(() => {
    const fetchTweets = async () => {
      try {
        setIsLoading(true);
      
        const data = await getTotalUsers();
        const totalPages = Math.ceil(data.length / limit);
 
        if (selectedOption !== OPTIONS.SHOW_ALL) {
          let cardsList = [];
          const followedCards = getFollowedCards();
          if (selectedOption === OPTIONS.FOLLOW) {
            cardsList = data.filter(
              (card) => !followedCards.includes(card.id)
            );
          } else if (selectedOption === OPTIONS.FOLLOWING) {
            cardsList = data.filter((card) =>
              followedCards.includes(card.id)
            );
          } 
          setCards(cardsList);
          setShowButton(false);
          window.scrollTo(0, 0);
          setPage(1);
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
  }, [limit, page, selectedOption]);

  const getOption = useCallback((option) => {
    setSelectedOption(option);
  }, []);

  useEffect(() => {
    if (cards.length > 3 && page !== 1) {
      onSmoothScroll();
    }
  }, [cards, page]);

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
        {error && <ErrorMessage message={error}/>}
        {!error && !isLoading && cards.length > 0 && <TweetsList cards={cards} />}
        {showButton && !error && (
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

function onSmoothScroll() {
  const { height: cardHeight } = document
    .querySelector("#gallery")
    .firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 1,
    behavior: "smooth",
  });
}
export default TweetsPage;
