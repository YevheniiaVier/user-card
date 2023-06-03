import styled from 'styled-components';

export const Box = styled.div`
  min-height: 300px;
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const WelcomeMessage = styled.p`
  color: ${p => p.theme.colors.secondary};
  font-weight: bold;
  font-size: 50px;
  text-align: center;
`;
