import styled from "styled-components";
import backgroundImg from "../../images/background.png";

export const Card = styled.li`
  width: 380px;
  height: 460px;
  position: relative;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Avatar = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 100%;
  height: auto;
  border-radius: 50%;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
    object-fit: contain;
`;

export const Info = styled.p`
  font-style: normal;
  margin: 0;
  padding: 0;
  font-weight: normal;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  color: ${(p) => p.theme.colors.primary};

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 8px solid #ebd8ff;
  box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 0.06), inset 0px 0px 0px 4px #ae7be3,
    inset 0px 4px 3px rgba(0, 0, 0, 0.06), inset 0px -2px 4px #ae7be3;
  overflow: hidden;
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  box-sizing: content-box;
`;

export const BackgroundWrapper = styled.div`
  background-image: url(${backgroundImg});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const TopSection = styled.div`
  position: relative;
  padding: 28px 36px;
  box-sizing: border-box;
  height: 216px;
`;

export const UserInfo = styled.div`
  margin-top: 26px;
  text-align: center;
  flex-grow: 1;
`;
export const Divider = styled.div`
  width: 100%;
  height: 8px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 36px;
  align-items: center;
  flex-grow: 1;
`;
