import { useCallback, useEffect, useState } from "react";
import { FcFilledFilter } from 'react-icons/fc';

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

  const handleClickOutside = useCallback((event) => {
    const dropdownContainer = document.getElementById("dropdown-container");
    if (dropdownContainer && !dropdownContainer.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    if (isOpen) {
      window.addEventListener("click", handleClickOutside);
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClickOutside, isOpen]);

  return (
    <DropdownContainer id="dropdown-container">
      <DropdownButton onClick={toggleDropdown}><FcFilledFilter size={30}/> {selectedOption}</DropdownButton>
      <DropdownContent isOpen={isOpen}>
        {selectedOption !== OPTIONS.SHOW_ALL && (
          <DropdownOption onClick={() => handleOptionSelect("Show All")}>
            {OPTIONS.SHOW_ALL}
          </DropdownOption>
        )}
        {selectedOption !== OPTIONS.FOLLOW && (
          <DropdownOption onClick={() => handleOptionSelect("Follow")}>
            {OPTIONS.FOLLOW}
          </DropdownOption>
        )}
        {selectedOption !== OPTIONS.FOLLOWING && (
          <DropdownOption onClick={() => handleOptionSelect("Following")}>
            {OPTIONS.FOLLOWING}
          </DropdownOption>
        )}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default Dropdown;
