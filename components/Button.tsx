import React from "react";
import { css } from "@emotion/core";

export const Button: React.FC = props => {
  return (
    <button
      css={css`
        background-color: #e61865;
        color: #fff;
        border-left: 2px solid #fdb3c1;
        border-top: 2px solid #fdb3c1;
        border-right: 2px solid #b91150;
        border-bottom: 2px solid #b91150;
        padding: 0.65em 1em;
        display: inline-block;
        border-radius: 6px;
        font-weight: 700;
        /* box-shadow: 0px 1px 3px 0px #000; */
      `}
    >
      {props.children}
    </button>
  );
};
