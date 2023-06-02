import PropTypes from "prop-types";

import { StyledButton } from "./Button.styled";


const Button = ({ text, type, following, onClick, disabled, children }) => {
  return (
    <StyledButton
      type={type}
      following={following}
      onClick={onClick}
      disabled={disabled}

    >
      {children}
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
  following: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
