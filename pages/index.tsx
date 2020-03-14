import Head from "next/head";
import React from "react";
import { css } from "@emotion/core";
import { Avatar } from "../components/Avatar";
import { CardPanel, Card } from "../components/Card";
import { Horizon } from "../components/Horizon";
import { Button } from "../components/Button";

const Index: React.FC = () => (
  <div className="root">
    <Head>
      <title>Tellme</title>
    </Head>

    <header>
      <h1>Tellme</h1>
      <Horizon />
    </header>

    <main
      css={css`
        margin-top: 1em;
      `}
    >
      <div
        css={css`
          width: 650px;
          margin: 2em auto;
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
          </div>
        </div>
      </div>

      <div
        css={css`
          display: flex;
          flex-wrap: wrap;

          & > div {
            width: 33%;
            padding: 0.2em;
          }
        `}
      >
        <div>
          <Card
            footer={
              <>
                <Button icon={"comment"}>5</Button>
                <Button icon={"quote-left"} />
              </>
            }
          >
            Q. 描いてほしいキャラクターはいますか？
          </Card>
        </div>
        <div>
          <Card>ほげぴよ</Card>
        </div>
        <div>
          <CardPanel>ほげぴよ</CardPanel>
        </div>
        <div>
          <CardPanel>ほげぴよ</CardPanel>
        </div>
        <div>
          <CardPanel>あああああああ</CardPanel>
        </div>
      </div>
    </main>

    <footer>ふったー</footer>
  </div>
);

export default Index;
