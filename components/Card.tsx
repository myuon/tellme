import React from "react";
import { css, SerializedStyles } from "@emotion/core";

export const CardPanel: React.FC<{ css?: SerializedStyles }> = props => {
  return (
    <div
      css={css`
        background-color: #ffffff;
        border-radius: 2px;
        border: 1px solid rgba(2, 0, 36, 0.2);
        padding: 1em 1.5em;
      `}
    >
      {props.children}
    </div>
  );
};

export const Card: React.FC<{ footer?: React.ReactNode }> = props => {
  return (
    <CardPanel>
      <div
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <div
          css={css`
            flex: 1 1 auto;
          `}
        >
          {props.children}
        </div>
        {props.footer && (
          <div
            css={css`
              margin-top: 1em;
              margin-left: -1em;
            `}
          >
            {props.footer}
          </div>
        )}
      </div>
    </CardPanel>
  );
};
