import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import logoImg from "../../images/logo.svg";
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
import defaultUser from "../../images/defaultUser.png";
import Button from "../Button/Button";
import { getUser, updateUser } from "../../services/tweets-api";

const Tweet = ({ card, onUpdate }) => {
  const { id, user, tweets, avatar, followers } = card;

  const [isFollowed, setIsFollowed] = useState(() => JSON.parse(window.localStorage.getItem(`followed_${id}`)) ?? false);
  const [followersCount, setFollowersCount] = useState(card.followers);
  const [error, setError] = useState(null);

  const formattedTweets = tweets.toLocaleString("en-US");
  const formattedFollowers = followers.toLocaleString("en-US");

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [card]);
  
  const toggleFollowed = async () => {
    setIsFollowed((prevState) => !prevState);
    const updatedFollowersCount = isFollowed ? followersCount - 1 : followersCount + 1;
    setFollowersCount(updatedFollowersCount);
    await updateCard(updatedFollowersCount);
    const updatedCard = await getUser(id)
    onUpdate(updatedCard);
    if (isFollowed) {
      localStorage.removeItem(`followed_${id}`);
    } else {
      localStorage.setItem(`followed_${id}`, true);
    }
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

export default Tweet;
