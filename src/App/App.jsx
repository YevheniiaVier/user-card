import { UserRoutes } from "../UserRoutes";
import { MainNav } from "../components/MainNav/MainNav";
import { Container, Header } from "./App.styled";

function App() {
  return (
    <Container>
      <MainNav />
      <UserRoutes />
    </Container>
  );
}

export default App;
