import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  display: flex;
  z-index: 10;
  padding: 3px;
  justify-content: center;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #efefbb; 
  background: -webkit-linear-gradient(
    to right,
    #d4d3dd,
    #efefbb
  ); 
  background: linear-gradient(
    to right,
    #d4d3dd,
    #efefbb
  ); 
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
`;

export const Item = styled.li``;

export const Link = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  border-radius: 10rem;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 6px;
  padding-right: 6px;
  background-color: 'grey';
  color: "red";
  font-size: 20px;

  font-weight: bold;
  transition: all 300ms 100ms;
  &.active {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 2px 1px rgba(0, 0, 0, 0.2);
    color: "white";
    background-color: "blue";
  }
  :hover {
    color: "white";
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: "blue";
  }
`;
