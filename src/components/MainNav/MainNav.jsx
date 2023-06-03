import PropTypes from "prop-types";

import { Header, List, Item, ItemLink, Container } from "./MainNav.styled";

import navItems from "./items";

export const MainNav = () => {
  const elements = navItems.map(({ id, to, text }) => (
    <Item key={id}>
      <ItemLink to={to}>{text}</ItemLink>
    </Item>
  ));

  return (
    <Header>
      <Container>
        <List>{elements}</List>
      </Container>
    </Header>
  );
};

MainNav.propTypes = {
  navItems: PropTypes.shape({
    id: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};
