import styled, { keyframes } from 'styled-components';
import Skeleton from 'react-loading-skeleton';

const gradient = keyframes`
0%{
  background-position: 0 50%;
}
50%{
  background-position: 100% 50%;
}
100%{
  background-position: 0 50%;
}
`;

const BaseSkeleton = styled(Skeleton)`
  display: flex;

  background: linear-gradient(290.46deg, #c3e0f9 0%, #b3b3b3 107.89%);
  background-size: 300% 300%;

  animation: ${gradient} 1s ease infinite;

  overflow: hidden;
`;
export const CardSkeleton = styled.li`
position: relative;
  width: 380px;
  height: 460px;
  display: flex;
  flex-direction: column;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const InfoSkeleton = styled(BaseSkeleton)`
  margin: 0;
  padding: 0;

`;
export const AvatarSkeleton = styled(BaseSkeleton)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  box-sizing: content-box;
`;


export const TopSectionSkeleton = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 216px;
`;

export const UserInfoSkeleton = styled.div`
  margin-top: 26px;
  flex-grow: 1;
`;
export const DividerSkeleton = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${(p) => p.theme.colors.primary};
`;
export const BottomSectionSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
export const ButtonSkeleton = styled(BaseSkeleton)`
  width: 196px;
  height: 50px;
  border-radius: 10.31px;
  border: none;
  box-sizing: border-box;
`;

export const LogoSkeleton = styled(BaseSkeleton)`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
`;
