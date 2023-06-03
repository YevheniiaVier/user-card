import styled from 'styled-components';

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Message = styled.p`
  color: ${p => p.theme.colors.secondary};
  font-weight: bold;
  font-size: 20px;
`;

export const ErrorImage = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 260px;
`;
