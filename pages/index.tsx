import Head from "next/head";
import React from "react";
import { css } from "@emotion/core";

const Index: React.FC = () => (
  <div className="root">
    <Head>
      <title>Tellme</title>
    </Head>

    <header>
      <h1>Tellme</h1>
    </header>

    <main>
      <div
        css={css`
          display: flex;
        `}
      >
        <div>
          <img
            src="https://pbs.twimg.com/profile_images/1229844366253903872/58B9caHs_400x400.jpg"
            css={css`
              border-radius: 50%;
              width: 250px;
              height: 250px;
            `}
          />
        </div>
        <div
          css={css`
            flex: 1 1 auto;
          `}
        >
          <h2>@myuon</h2>
          <p>Type Theoryと定理証明とジト目</p>
        </div>
      </div>
    </main>

    <footer>ふったー</footer>
  </div>
);

export default Index;
