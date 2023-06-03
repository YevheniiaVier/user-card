import styled from 'styled-components';

export const Box = styled.div`
  min-height: 300px;
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  color: "green";
  font-size: 25px;
  font-weight: bold;
  padding-left: 7px;
  margin: auto;
  display: flex;
  margin: 0 auto;
  margin-bottom: 5px;
`;

export const WelcomeMessage = styled.p`
  color: ${p => p.theme.colors.secondary};
  font-weight: bold;
  font-size: 50px;
  text-align: center;
`;
