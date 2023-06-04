import Video from "../../components/Video/Video";
import { Box, WelcomeMessage } from "./HomePage.styled";

const HomePage = () => {
  return (
    <Box>
      <WelcomeMessage>Welcome to HomePage! Go for it!</WelcomeMessage>
      <Video />
    </Box>
  );
};

export default HomePage;
