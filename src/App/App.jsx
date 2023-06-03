import { UserRoutes } from "../UserRoutes";
import { MainNav } from "../components/MainNav/MainNav";
import { Container } from "./App.styled";
import { FollowedProvider } from '../FollowedContext'

function App() {
  return (
    <FollowedProvider>
      <MainNav />
      <Container>
        <UserRoutes />
      </Container>
    </FollowedProvider>
  );
}

export default App;
