import styled from 'styled-components';
// import { Link } from 'react-router-dom';

export const List = styled.ul`
display: grid;
max-width: calc(100vw - 48px);
grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
grid-gap: 16px;
margin-top: 0;
margin-bottom: 0;
padding: 0;
list-style: none;
margin-left: auto;
margin-right: auto;
`;


// export const TweetLink = styled(Link)`
//   text-decoration: none;
//   margin: 0;
//   padding: 0;
// `;

