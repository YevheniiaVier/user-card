import { UserRoutes } from "../UserRoutes";
import { MainNav } from "../components/MainNav/MainNav";
import { Main } from "./App.styled";
import { FollowedProvider } from '../FollowedContext'

function App() {
  return (
    <FollowedProvider>
      <MainNav />
      <Main>
        <UserRoutes />
      </Main>
    </FollowedProvider>
  );
}

export default App;
