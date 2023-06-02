import styled from "styled-components";

export const LogoWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
  display: flex;
`;

export const LogoImg = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 100%;
  display: block;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;
