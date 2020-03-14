import React from "react";
import { Global, css } from "@emotion/core";
import "ress";
import { ThemeProvider } from "emotion-theming";
import { Theme } from "../components/Theme";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faComment, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faComment, faQuoteLeft);

const theme: Theme = {
  palette: {
    primary: {
      base: "#e61865",
      light: "#fedae0",
      dark: "#b91150"
    }
  }
};

const MyApp: React.FC<{ Component: any; pageProps: any }> = ({
  Component,
  pageProps
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          html {
            font-size: 16px;
            color: #303030;
          }

          h1 {
            font-size: 48px;
            line-height: 72px;
          }

          h2 {
            font-size: 32px;
            line-height: 48px;
          }

          h3 {
            font-size: 24px;
            line-height: 24px;
          }

          p {
            font-size: 16px;
            line-height: 24px;
          }

          main {
            max-width: 1280px;
            margin: auto;
          }
        `}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
