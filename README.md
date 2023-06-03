React Test Task User-Card

This project is a React application that consists of several pages and components. Below is a brief description of each page and component used in the project.

Pages
HomePage
The HomePage component is located in the HomePage.js file. It displays a welcome message to the user.

TweetsPage
The TweetsPage component is located in the TweetsPage.js file. It fetches and displays a list of tweets. Users can filter the tweets based on different options and load more tweets.

Main Components
Tweet
The Tweet component is located in the Tweet.js file. It is a reusable component that represents a single tweet. It displays the user's avatar, tweet information, and a button to follow/unfollow the user.

TweetsList
The TweetsList component is located in the TweetsList.js file. It is a reusable component that represents a list of tweets. It receives an array of tweet objects as a prop and renders multiple Tweet components.

MainNav
The MainNav component is located in the MainNav.js file. It is a navigation component that displays a list of navigation items. Each item represents a page in the application.

Other Files
In addition to the pages and components, there are a few other files used in the project:

Button.js: A reusable button component used in various parts of the application.
DropDown.js: A dropdown component used in the TweetsPage to select filtering options.
FollowedContext.js: A context file used to manage the state of followed cards.
Logo.js: A component that displays a logo image.
Loader.js: Components that render loading spinners while data is being fetched.
Tweet.styled.js, TweetsList.styled.js, TweetsPage.styled.js, HomePage.styled.js, and MainNav.styled.js: Styled components that provide styling for the respective components.