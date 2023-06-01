import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledContainer = styled.div`
  border-bottom: 1px solid rgba(169, 169, 169, 0.2196078431372549);
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  flex-direction: row;
  height: 70px;
  width: 100%;
  overflow: hidden;
  backdrop-filter: blur(0.4rem);
  z-index: 6;
`;

export const StyledMenuItem = styled.div`
  padding: 17px;
  padding-top: 18px;
  font-size: 16pt;
  text-transform: uppercase;
  color: #ababab;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #ababab;

  &:hover {
    text-shadow: 0 0 13px white;
    color: white;
    cursor: var(--custom-cursor-go);
  }

  &.active {
    text-shadow: 0 0 13px white;
    color: white;
  }
`;
