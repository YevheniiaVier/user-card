import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

import {
  Avatar,
  Card,
  Info,
  AvatarWrapper,
  BackgroundWrapper,
  UserInfo,
  TopSection,
  BottomSection,
  Divider,
} from "./Tweet.styled";
import Button from "../Button/Button";

import logoImg from "../../images/logo.svg";
import defaultUser from "../../images/defaultUser.png";
import Logo from "../Logo/Logo";

import { getUser, updateUser } from "../../services/tweets-api";
import { FollowedContext } from "../../FollowedContext";

const Tweet = ({ card, onUpdate }) => {
  const { id, user, tweets, avatar, followers } = card;
  const { followedCards, setFollowedCards } = useContext(FollowedContext);

  const [isFollowed, setIsFollowed] = useState(followedCards.includes(id));
  const [followersCount, setFollowersCount] = useState(card.followers);
  const [error, setError] = useState(null);

  const formattedTweets = new Intl.NumberFormat("en-US").format(tweets);
  const formattedFollowers = new Intl.NumberFormat("en-US").format(followers);

  const toggleFollowed = async () => {
    setIsFollowed((prevState) => !prevState);
    const updatedFollowersCount = isFollowed
      ? followersCount - 1
      : followersCount + 1;
    setFollowersCount(updatedFollowersCount);
    await updateCard(updatedFollowersCount);
    const updatedCard = await getUser(id);
    onUpdate(updatedCard);
    const updatedFollowedCards = isFollowed
      ? followedCards.filter((cardId) => cardId !== id)
      : [...followedCards, id];
    setFollowedCards(updatedFollowedCards);
    localStorage.setItem("followedCards", JSON.stringify(updatedFollowedCards));
  };

  const updateCard = async (updatedFollowersCount) => {
    try {
      await updateUser({
        ...card,
        followers: updatedFollowersCount,
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Card>
      {error && <Info>{error}</Info>}
      <TopSection>
        <BackgroundWrapper />
        <AvatarWrapper>
          <Avatar src={avatar === null ? defaultUser : avatar} alt={user} />
        </AvatarWrapper>
      </TopSection>
      <Divider />
      <Logo text="logo" imgPath={logoImg}></Logo>
      <BottomSection>
        <UserInfo>
          <Info>{formattedTweets} tweets</Info>
          <Info>{formattedFollowers} followers</Info>
        </UserInfo>
        <Button
          onClick={toggleFollowed}
          following={isFollowed}
          text={isFollowed ? "following" : "follow"}
          type="button"
        />
      </BottomSection>
    </Card>
  );
};

Tweet.propTypes = {
  card: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default Tweet;
