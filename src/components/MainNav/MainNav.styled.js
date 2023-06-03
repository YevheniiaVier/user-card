import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 5px 0px;
  min-height: 50px;
  margin-left: auto;
  margin-right: auto;
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: ${p => p.theme.colors.white};
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  background-color: #0c464e;
  background-image: linear-gradient(
    225deg,
    #0c464e 0%,
    #26c5eb 49%,
    rgb(56, 210, 210) 100%
  );
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
`;

export const Item = styled.li``;

export const ItemLink = styled(NavLink)`
  display: inline-block;
  border-radius: 10rem;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 3px;
  padding-right: 3px;
  background-color: ${p => p.theme.colors.grey};
  color: ${p => p.theme.colors.primary};
  font-size: 17px;

  font-weight: bold;
  transition: all 200ms 100ms;
  &.active {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 2px 1px rgba(0, 0, 0, 0.2);
    color: ${p => p.theme.colors.muted};
    background-color: ${p => p.theme.colors.accentDark};
  }
  :hover {
    color: ${p => p.theme.colors.darkGrey};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.accentDark};
  }
`;
export const Container = styled.div`
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: space-between; */
  padding-left: 15px;
  padding-right: 15px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    width: 700px;
  }
  @media screen and (min-width: 1200px) {
    width: 700px;
  }
`;

export const Toggle = styled.button`
  cursor: pointer;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: none;
  background-color: 'transparent';
  &:focus {
    outline: none;
  }
  transition: all 0.5s ease;
`;
export const RightMenuBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const LogoImg = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 50px;
  height: auto;
  margin-right: ${p => p.theme.space[3]}px;
  border: ${p => `2px solid ${p.theme.colors.accent}`};
  border-radius: ${p => p.theme.radii.big};
  background-color: ${p => p.theme.colors.accentDark}; ;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;
