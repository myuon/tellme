import React from "react";
import { css } from "@emotion/core";
import { useTheme } from "emotion-theming";
import { Theme } from "./Theme";

export const Button: React.FC = props => {
  const theme = useTheme<Theme>();

  return (
    <button
      css={css`
        background-color: ${theme.palette.primary.base};
        color: #fff;
        border-left: 2px solid ${theme.palette.primary.light};
        border-top: 2px solid ${theme.palette.primary.light};
        border-right: 2px solid ${theme.palette.primary.dark};
        border-bottom: 2px solid ${theme.palette.primary.dark};
        padding: 0.65em 1em;
        display: inline-block;
        border-radius: 6px;
        font-weight: 700;
      `}
    >
      {props.children}
    </button>
  );
};
