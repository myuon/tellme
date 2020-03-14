import Head from "next/head";
import React from "react";
import { css } from "@emotion/core";
import { Avatar } from "../components/Avatar";
import { Button } from "../components/Button";

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
          width: 650px;
          margin: auto;
        `}
      >
        <div
          css={css`
            display: flex;
          `}
        >
          <Avatar>
            <img
              src="https://pbs.twimg.com/profile_images/1229844366253903872/58B9caHs_400x400.jpg"
              css={css`
                width: 200px;
              `}
            />
          </Avatar>
          <div
            css={css`
              margin-left: 1.5em;
              flex: 1 1 auto;
              display: flex;
              flex-direction: column;
            `}
          >
            <div
              css={css`
                flex: 1 1 auto;
              `}
            >
              <h2
                css={css`
                  margin-bottom: 0.25em;
                `}
              >
                myuon
              </h2>
              <p>Type Theoryと定理証明とジト目</p>
            </div>
            <div>
              <Button>みょんポイントを今すぐゲット</Button>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer>ふったー</footer>
  </div>
);

export default Index;
