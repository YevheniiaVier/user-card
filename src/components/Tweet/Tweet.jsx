import React, { useState,  useEffect } from "react";
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
import { getFollowedCards } from '../../helpers/getFollowedCards';
import {  updateUser } from "../../services/tweets-api";

const Tweet = ({ card }) => {
  const { id, user, tweets, avatar, followers } = card;

  const [isFollowed, setIsFollowed] = useState(false);
  const [followersCount, setFollowersCount] = useState(followers);
  const [error, setError] = useState(null);
 

  const formattedTweets = new Intl.NumberFormat("en-US").format(tweets);
  const formattedFollowers = new Intl.NumberFormat("en-US").format(followersCount);

  useEffect(() => {
    const followedCards = getFollowedCards();
    setIsFollowed(followedCards.includes(id));
  }, [id]);


  const toggleFollowed = async () => {
    setIsFollowed((prevState) => !prevState);
    const updatedFollowersCount = isFollowed
      ? followersCount - 1
      : followersCount + 1;
    await updateCard(updatedFollowersCount);

    const followedCards = JSON.parse(localStorage.getItem("followedCards")) ?? [];
    const updatedFollowedCards = isFollowed
      ? followedCards.filter((cardId) => cardId !== id)
      : [...followedCards, id];
    localStorage.setItem("followedCards", JSON.stringify(updatedFollowedCards));

    setFollowersCount(updatedFollowersCount);
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
};

export default Tweet;
