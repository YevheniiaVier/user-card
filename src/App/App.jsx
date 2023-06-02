import { UserRoutes } from "../UserRoutes";
import { MainNav } from "../components/MainNav/MainNav";
import { Container } from "./App.styled";

function App() {
  return (
    <>
      <MainNav />
      <Container>
        <UserRoutes />
      </Container>
    </>
  );
}

export default App;
