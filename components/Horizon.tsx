import React from "react";
import { css } from "@emotion/core";
import { useTheme } from "emotion-theming";
import { Theme } from "./Theme";

export const Horizon: React.FC = props => {
  const theme = useTheme<Theme>();

  return (
    <div
      css={css`
        width: 100%;
        height: 3px;
        background: rgb(2, 0, 36);
        background: linear-gradient(
          90deg,
          rgba(2, 0, 36, 1) 0%,
          ${theme.palette.primary.base} 100%
        );
      `}
    />
  );
};
