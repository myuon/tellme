import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from "next/document";
import { ThemeProvider } from "emotion-theming";
import { Theme } from "../components/Theme";

const theme: Theme = {
  palette: {
    primary: {
      base: "#e61865",
      light: "#fdb3c1",
      dark: "#b91150"
    }
  }
};

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Html lang="ja">
          <Head />
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      </ThemeProvider>
    );
  }
}

export default MyDocument;
