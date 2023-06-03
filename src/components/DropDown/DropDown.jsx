import { useState } from "react";
import {
  DropdownButton,
  DropdownContainer,
  DropdownContent,
  DropdownOption,
} from "./DropDown.styled";

export const OPTIONS = {
  SHOW_ALL: "Show All",
  FOLLOW: "Follow",
  FOLLOWING: "Following",
};

export const Dropdown = ({ onOptionSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Show All");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onOptionSelect(option);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>{selectedOption}</DropdownButton>
      <DropdownContent isOpen={isOpen}>
        {selectedOption !== OPTIONS.SHOW_ALL && (
          <DropdownOption onClick={() => handleOptionSelect("Show All")}>
            Show All
          </DropdownOption>
        )}
        {selectedOption !== OPTIONS.FOLLOW && (
          <DropdownOption onClick={() => handleOptionSelect("Follow")}>
            Follow
          </DropdownOption>
        )}
        {selectedOption !== OPTIONS.FOLLOWING && (
          <DropdownOption onClick={() => handleOptionSelect("Following")}>
            Following
          </DropdownOption>
        )}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default Dropdown;
