import classes from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { HeaderNav, HeaderNavLink, HeaderWrapper } from "./Header.styled";
import { useDispatch } from "react-redux";
import { toggleThemeAction } from "../../feature/themeList";

export const Header = () => {
  const dispatch = useDispatch();
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

        <div className="toggleButton">
          <button onClick={() => dispatch(toggleThemeAction())}>toggle</button>
        </div>
      </HeaderNav>
    </HeaderWrapper>
  );
};
