import React from "react";
import { css } from "@emotion/core";

export const Panel: React.FC<{ padding?: number }> = props => {
  return (
    <div
      css={css`
        border: 1px solid #f62f75;
        border-radius: 10px;
        padding: ${props.padding}em;
        box-shadow: 0px 1px 3px 0px #851d3f;
      `}
    >
      {props.children}
    </div>
  );
};
