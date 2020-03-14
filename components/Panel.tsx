import React from "react";
import { css } from "@emotion/core";
import { useTheme } from "emotion-theming";
import { Theme } from "./Theme";

export const Panel: React.FC<{ padding?: number }> = props => {
  const theme = useTheme<Theme>();

  return (
    <div
      css={css`
        border: 1px solid ${theme.palette.primary.base};
        border-radius: 10px;
        padding: ${props.padding}em;
      `}
    >
      {props.children}
    </div>
  );
};
