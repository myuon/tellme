import React from "react";
import { Global, css } from "@emotion/core";
import "ress";

const MyApp: React.FC<{ Component: any; pageProps: any }> = ({
  Component,
  pageProps
}) => {
  return (
    <>
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
    </>
  );
};

export default MyApp;
