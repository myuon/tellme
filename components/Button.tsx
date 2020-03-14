import React from "react";
import { css } from "@emotion/core";
import { useTheme } from "emotion-theming";
import { Theme } from "./Theme";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Button: React.FC<{
  style?: "button" | "text";
  icon?: IconProp;
}> = props => {
  const theme = useTheme<Theme>();
  const style = props.style ?? "text";

  return (
    <button
      css={css`
        padding: 0.4em 1em;
        display: inline-block;
        border-radius: 3px;
        font-weight: 700;

        ${style === "button"
          ? css`
              background-color: ${theme.palette.primary.base};
              color: #fff;
              border-left: 2px solid ${theme.palette.primary.light};
              border-top: 2px solid ${theme.palette.primary.light};
              border-right: 2px solid ${theme.palette.primary.dark};
              border-bottom: 2px solid ${theme.palette.primary.dark};
            `
          : css`
              color: ${theme.palette.primary.base};

              &:hover {
                background-color: ${theme.palette.primary.light};
              }
            `}
      `}
    >
      {props.icon && (
        <FontAwesomeIcon
          icon={props.icon}
          css={css`
            ${props.children &&
              css`
                margin-right: 0.3em;
              `}
          `}
        />
      )}
      {props.children}
    </button>
  );
};
