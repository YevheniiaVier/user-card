import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
width: 120px;
align-items: center;

  background-image: radial-gradient(
    100% 100% at 100% 0,
    ${(p) => p.theme.colors.headerAccent} 0,
    ${(p) => p.theme.colors.headerAccentDark} 100%
  );
  border: none;
  outline: none;
  /* border-radius: 20px; */
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px;
  box-sizing: border-box;
  color: ${(p) => p.theme.colors.primary};
  cursor: pointer;
  display: inline-flex;
  gap: 5px;
  font-family: "JetBrains Mono", monospace;
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
  transition: all 300ms 100ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;
  &:hover {
    color: ${(p) => p.theme.colors.white};
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, ${(p) => p.theme.colors.headerAccentDark} 0 -3px 0 inset;
  }
  
`;

export const DropdownContent = styled.ul`
  opacity: ${props => (props.isOpen ? "1" : "0")};
  pointer-events: ${props => (props.isOpen ? "initial" : "none")};
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${(p) => p.theme.colors.headerAccent};
  background-image: radial-gradient(
    100% 100% at 100% 0,
    ${(p) => p.theme.colors.headerAccent} 0,
    ${(p) => p.theme.colors.headerAccentDark} 100%
  );
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DropdownOption = styled.li`
display: flex;
justify-content: center;
align-items: center;
  cursor: pointer;
  padding: 8px;
  transition: all 200ms 100ms;
  &:hover {
    background-color: ${(p) => p.theme.colors.accent};
  }
`;
export const SelectedOption = styled.div`
  width: 120px;
  align-items: center;
  display: inline-flex;
  background-image: radial-gradient(
    100% 100% at 100% 0,
    ${(p) => p.theme.colors.headerAccent} 0,
    ${(p) => p.theme.colors.headerAccentDark} 100%
  );
  border: 0;
  border-radius: 20px;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px;
  box-sizing: border-box;
  color: ${(p) => p.theme.colors.primary};
  gap: 5px;
  font-family: "JetBrains Mono", monospace;
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
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;
`;