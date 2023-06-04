import { useState, useEffect, useCallback } from "react";
import { getTotalUsers, getUsers } from "../../services/tweets-api";
import { CgMoreO } from "react-icons/cg";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

import {
  GoBackBtn,
  Nav,
  Section,
  TweetsBox,
  InfoImage,
} from "./TweetsPage.styled";
import { getFollowedCards } from "../../helpers/getFollowedCards";
import TweetCardSkeleton from "../../components/Skeleton/TweetCardSkeleton/TweetCardSkeleton";

import TweetsList from "../../components/TweetsList/TweetsList";
import Button from "../../components/Button/Button";
import { CircleLoader } from "../../components/Loader/Loader";
import { TfiControlBackward } from "react-icons/tfi";
import { Dropdown } from "../../components/DropDown/DropDown";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { List } from "../../components/TweetsList/TweetsList.styled";
import { OPTIONS } from "../../components/DropDown/DropDown";
import ThatAllImage from "../../images/thatsAll.png";

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
      console.log("first", Date.now());
      console.log("page", page);
      setEmptyResults("");
      try {
        setIsLoading(true);

        const data = await getTotalUsers();
        const totalPages = Math.ceil(data.length / limit);

        if (selectedOption === OPTIONS.SHOW_ALL) {
          const result = await getUsers(page);
          setCards((prevState) => [...prevState, ...result]);
          if (result.length <= limit && page === totalPages) {
            setShowButton(false);
            setEmptyResults(`That's all!`);
          } else {
            setShowButton(true);
          }
          return;
        }

        let cardsList = [];
        const followedCards = getFollowedCards();
        if (selectedOption === OPTIONS.FOLLOW) {
          cardsList = data.filter((card) => !followedCards.includes(card.id));
        }
        if (selectedOption === OPTIONS.FOLLOWING) {
          cardsList = data.filter((card) => followedCards.includes(card.id));
        }
        setCards(cardsList);
        setShowButton(false);
        window.scrollTo(0, 0);
        setPage(1);
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
    setCards([]);
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
        {isLoading && <List>{<TweetCardSkeleton count={6} />}</List>}
        {error && <ErrorMessage message={error} />}
        {!error && cards.length > 0 && <TweetsList cards={cards} />}
        {!error && showButton && (
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
        {emptyResults && (
          <InfoImage src={ThatAllImage} alt="that's all folks" />
        )}
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
