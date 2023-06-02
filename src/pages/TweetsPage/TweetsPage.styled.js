import styled from 'styled-components';

export const TweetsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GoBackBtn = styled.button`
margin-bottom: 20px;
align-self: flex-start;
  align-items: center;
  width: 120px;
  appearance: none;
  background-image: radial-gradient(
    100% 100% at 100% 0,
    #0cf 0,
    rgb(8, 157, 194) 100%
  );
  border: 0;
  border-radius: 20px;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px;
  box-sizing: border-box;
  color: ${p => p.theme.colors.primary};
  cursor: pointer;
  display: inline-flex;
  gap: 5px;
  font-family: 'JetBrains Mono', monospace;
  height: 40px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;
  &:hover {
    color: ${p => p.theme.colors.white};
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, rgb(8, 157, 194) 0 -3px 0 inset;
  }
  transition: all 300ms 100ms;
`;