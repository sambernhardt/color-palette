import React from 'react';
import { Box } from 'rebass';

const getVariantStyles = (color) => ({
  solid: {
    textColor: `var(--text-on-background-${color})`,
    backgroundColor: `var(--background-${color})`,
    backgroundColorHover: `var(--background-${color}-hover)`,
    backgroundColorActive: `var(--background-${color}-active)`,
    borderColor: `var(--background-${color})`,
  },
  outline: {
    textColor: `var(--text-${color})`,
    backgroundColor: `var(--transparent)`,
    backgroundColorHover: `var(--hover)`,
    backgroundColorActive: `var(--active)`,
    borderColor: `var(--border)`,
  },
  ghost: {
    textColor: `var(--text-${color})`,
    backgroundColor: `var(--transparent)`,
    backgroundColorHover: `var(--hover)`,
    backgroundColorActive: `var(--active)`,
    borderColor: `transparent`,
  },
})

const Button = ({ color, variant, ...props }) => {
  const { textColor, backgroundColor, backgroundColorHover, backgroundColorActive, borderColor } = getVariantStyles(color)[variant];

  return (
    <Box
      as="button"
      className={`button focus ${color}`}
      css={`
        color: ${textColor};
        background: ${backgroundColor};
        border: 1px solid ${borderColor};
        padding: 12px 16px;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        font-family: 'Inter', sans-serif;

        @extend .focus;

        &:hover {
          background: ${backgroundColorHover};
        }

        &:active {
          background: ${backgroundColorActive};
        }
      `}
      {...props}
    />
  )
}

Button.defaultProps = {
  color: 'gray',
  variant: 'outline',
};

export default Button