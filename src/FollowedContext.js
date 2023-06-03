import React, { createContext, useEffect, useState } from "react";

export const FollowedContext = createContext();

export const FollowedProvider = ({ children }) => {
  const [followedCards, setFollowedCards] = useState([]);

  useEffect(() => {
    const storedFollowedCards = localStorage.getItem("followedCards");
    if (storedFollowedCards) {
        try {
            const parsedFollowedCards = JSON.parse(storedFollowedCards);
            setFollowedCards(parsedFollowedCards);
          } catch (error) {
            console.error("Error parsing followed cards from local storage:", error);
            
          }
    }
  }, []);

  return (
    <FollowedContext.Provider value={{ followedCards, setFollowedCards }}>
      {children}
    </FollowedContext.Provider>
  );
};