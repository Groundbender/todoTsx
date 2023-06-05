import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { GlobalStyles } from "../styles/GLobalStyle";
import { ThemeProvider } from "styled-components";
import { themes } from "../styles/themes";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const Layout = () => {
  const theme = useSelector((state: RootState) => state.themeList.theme);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles theme={theme} />
        <HelmetProvider>
          <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="anonymous"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
              rel="stylesheet"
            />
          </Helmet>
          <Header />
          <Outlet />
        </HelmetProvider>
      </ThemeProvider>
    </>
  );
};
