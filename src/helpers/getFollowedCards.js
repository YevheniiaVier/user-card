export const getFollowedCards = () =>
  JSON.parse(localStorage.getItem("followedCards")) || [];
