import { UserRoutes } from "../UserRoutes";
import { MainNav } from "../components/MainNav/MainNav";
import { Main } from "./App.styled";

function App() {
  return (
    <>
      <MainNav />
      <Main>
        <UserRoutes />
      </Main>
    </>
  );
}

export default App;
