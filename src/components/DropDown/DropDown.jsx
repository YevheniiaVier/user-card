import  { useState } from "react";
import { DropdownButton, DropdownContainer, DropdownContent, DropdownOption } from './DropDown.styled';

const Dropdown = ({onOptionSelect}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Show All");
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOptionSelect = option => {
      setSelectedOption(option);
      setIsOpen(false);
      onOptionSelect(option);
    };
  
    return (
      <DropdownContainer>
        <DropdownButton onClick={toggleDropdown}>{selectedOption}</DropdownButton>
        <DropdownContent isOpen={isOpen}>
          <DropdownOption onClick={() => handleOptionSelect("Show All")}>
            Show All
          </DropdownOption>
          <DropdownOption onClick={() => handleOptionSelect("Follow")}>
            Follow
          </DropdownOption>
          <DropdownOption onClick={() => handleOptionSelect("Following")}>
            Following
          </DropdownOption>
        </DropdownContent>
      </DropdownContainer>
    );
  };
  
  export default Dropdown;