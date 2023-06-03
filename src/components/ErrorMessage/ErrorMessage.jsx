import PropTypes from 'prop-types';

import errorImage from '../../images/errorImg.png';
import {
  StyledBox,
  ErrorImage,
  Message,
} from './ErrorMessage.styled.';

export const ErrorMessage = ({ message }) => {
  return (
    <StyledBox>
      <Message>{message}</Message>
      <ErrorImage src={errorImage} alt="Something went wrong" />
    </StyledBox>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
