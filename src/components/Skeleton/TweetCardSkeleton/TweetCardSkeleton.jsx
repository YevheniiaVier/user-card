import {
  CardSkeleton,
  InfoSkeleton,
  AvatarSkeleton,
  TopSectionSkeleton,
  UserInfoSkeleton,
  DividerSkeleton,
  BottomSectionSkeleton,
  ButtonSkeleton,
  LogoSkeleton,
} from "./TweetCardSkeleton.styled";

const TweetCardSkeleton = ({ count }) => {
  return Array(count)
    .fill(0)
    .map((card, i) => (
      <CardSkeleton key={i}>
        <TopSectionSkeleton>
          <AvatarSkeleton />
        </TopSectionSkeleton >
        <DividerSkeleton />
        <LogoSkeleton/>
        <BottomSectionSkeleton>
          <UserInfoSkeleton >
            <InfoSkeleton />
            <InfoSkeleton />
          </UserInfoSkeleton>
          <ButtonSkeleton />
        </BottomSectionSkeleton>
      </CardSkeleton>
    ));
};

export default TweetCardSkeleton ;
