import classes from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { HeaderNav, HeaderNavLink, HeaderWrapper } from "./Header.styled";

export const Header = () => {
  const getActiveLink = ({ isActive }: { isActive: boolean }): object => ({
    color: isActive ? "#ffffff33" : "",
  });

  return (
    <HeaderWrapper>
      <HeaderNav>
        <HeaderNavLink style={getActiveLink} to="/">
          ToDo
        </HeaderNavLink>
        <HeaderNavLink style={getActiveLink} to="/list">
          List
        </HeaderNavLink>
      </HeaderNav>
    </HeaderWrapper>
  );
};
