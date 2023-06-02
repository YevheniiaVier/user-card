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
import { updateUser } from "../../services/tweets-api";

const Tweet = ({ card }) => {
  const { id, user, tweets, avatar, followers } = card;

  const [isFollowed, setIsFollowed] = useState(false);
  const [userCard, setUserCard] = useState(card);
  const [error, setError] = useState(null);

  const formattedTweets = tweets.toLocaleString("en-US");
  const formattedFollowers = followers.toLocaleString("en-US");

//   useEffect(() => {
//     const updateUserCard = async () => {
//       try {
//         await updateUser(userCard);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     updateUserCard();
//   }, []);

  const toggleFollowed = async () => {
    setIsFollowed((prevState) => !prevState);
    setUserCard((prevState) => ({
      ...prevState,
      followers: isFollowed
        ? (prevState.followers - 1)
        : (prevState.followers + 1),
    }));

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
