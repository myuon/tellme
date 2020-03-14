import React from "react";
import { css } from "@emotion/core";

export const Avatar: React.FC = props => {
  return (
    <div
      css={css`
        border-radius: 50%;
        border: 2px solid #f62f75;

        & > * {
          border-radius: 50%;
          height: 100%;
        }
      `}
    >
      {props.children}
    </div>
  );
};
