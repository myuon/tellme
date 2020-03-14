import React from "react";
import { css } from "@emotion/core";
import { useTheme } from "emotion-theming";
import { Theme } from "./Theme";

export const Avatar: React.FC = props => {
  const theme = useTheme<Theme>();

  return (
    <div
      css={css`
        border-radius: 50%;
        border: 2px solid ${theme.palette.primary.base};

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
