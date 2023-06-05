import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { GlobalStyles } from "../styles/GLobalStyle";
import { ThemeProvider } from "styled-components";
import { themes } from "../styles/themes";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const Layout = () => {
  const theme = useSelector((state: RootState) => state.themeList.theme);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles theme={theme} />
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
};
