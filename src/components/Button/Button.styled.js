import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* padding: 14px 28px; */
  width: 196px;
 
  height: 50px;
  border-radius: 10.31px;
  border: none;
  box-sizing: border-box;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2px;
  cursor: pointer;

  text-transform: uppercase;
  color: ${(p) => p.theme.colors.secondary};
  background-color: ${(p) =>
    p.following ? p.theme.colors.accent : p.theme.colors.primary};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  transition: all 200ms 100ms;
  &:hover {
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.3);
    background-color: ${(p) =>
      p.following ? p.theme.colors.accentDark : p.theme.colors.grey};
  }
`;
