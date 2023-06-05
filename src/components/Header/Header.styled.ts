import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  transition: background-color 0.2s;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    padding: 10px;
    color: #fff;
  }

  &:active {
    color: #ffffff33;
  }
`;

export const HeaderNav = styled.div`
  max-width: 97%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  div {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);

    button {
      border: 1px solid transparent;
      border-radius: 7px;
      background-color: ${({ theme }) => theme.colors.backgroundSecondary};
      width: 70px;
      cursor: pointer;
    }
    button:hover {
      background-color: white;
    }
  }
`;

export const HeaderNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  color: #fff;

  &:active {
    color: #ffffff33;
  }
`;
