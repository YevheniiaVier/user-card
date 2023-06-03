import PropTypes from "prop-types";

import Tweet from "../Tweet/Tweet";
import { List } from "./TweetsList.styled";

const TweetsList = ({ cards, onFollowersCountUpdate }) => {
  return (
    <List id="gallery">
      {cards.map((card) => (
        <Tweet onUpdate={onFollowersCountUpdate} card={card} key={card.id} />
      ))}
    </List>
  );
};

TweetsList.defaultProps = {
  tweets: [],
};

TweetsList.propTypes = {
  tweets: PropTypes.array.isRequired,
};

export default TweetsList;
