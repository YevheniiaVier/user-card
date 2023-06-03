import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  background-color: #f1f1f1;
  color: #333;
  padding: 8px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

export const DropdownContent = styled.div`
  display: ${props => (props.isOpen ? "block" : "none")};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 8px;
  z-index: 1;
`;

export const DropdownOption = styled.div`
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;