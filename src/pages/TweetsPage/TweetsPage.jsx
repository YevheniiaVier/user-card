import { useState, useEffect } from 'react';
import { getUsers } from '../../services/tweets-api';

// import { useParams } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';


import {
  TweeetsList,
  TweeetsBox,
  // TweeetsInfo,
  // TweeetsItem,
} from './TweetsPage.styled';



const TweetsPage = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);



  useEffect(() => {
    const fetchTweets = async () => {
      try {
        setLoading(true);
        const result = await getUsers();

setTweets(result);

      } catch (error) {
        setError(error.message);
      } 
      finally {
        setLoading(false);
      }
    };
    fetchTweets();
  }, []);

  const elements = tweets.map(({ id, user }) => (
    <li key={id}>
      {/* Author:&nbsp;&nbsp; */}
      {user}
  
    </li>
  ));
  // const elements = tweets[0]?.tweets;

  return (
    <TweeetsBox>
      <p>{elements}</p>
      {loading && <Loader />}
      {error && <p>...error</p>}
      {tweets.length > 0 && <TweeetsList>{elements}</TweeetsList>}
        {!error && !loading && tweets.length === 0 && ( 
        <p> "No tweets available yet"</p>
      )}

    </TweeetsBox>
  );
};

export default TweetsPage;
