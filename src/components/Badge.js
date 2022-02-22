import React from 'react';
import { Box, Text } from 'rebass';

import Icon from './Icon';

const getVariantStyles = (color) => ({
  solid: {
    iconColor: `var(--text-on-background-${color})`,
    textColor: `var(--text-on-background-${color})`,
    backgroundColor: `var(--background-${color})`,
    borderColor: `var(--background-${color})`,
  },
  muted: {
    iconColor: `var(--icon-${color})`,
    textColor: `var(--text-${color})`,
    backgroundColor: `var(--background-${color}-muted)`,
    borderColor: `transparent`,
  },
  outline: {
    iconColor: `var(--icon-${color})`,
    textColor: `var(--text-${color})`,
    backgroundColor: `transparent`,
    borderColor: `var(--border)`,
  },
  ghost: {
    iconColor: `var(--icon-${color})`,
    textColor: `var(--text-${color})`,
    backgroundColor: `transparent`,
    borderColor: `transparent`,
  },
})

const Badge = ({ color, children, icon, variant, ...props }) => {
  const { textColor, iconColor, backgroundColor, borderColor } = getVariantStyles(color)[variant];

  return (
    <Box
      css={`
        display: inline-flex;
        align-items: center;
        background: ${backgroundColor};
        border: 1px solid ${borderColor};
        padding: 4px 8px;
        border-radius: 8px;
        gap: 8px;
      `}
      {...props}
    >
      {icon && (
        <Icon
          icon={icon}
          weight="solid"
          color={iconColor}
          fontSize={0}
        />
      )}
      {children && <Text
        as="p"
        fontFamily="Inter"
        color={textColor}
        fontSize={0}
        fontWeight="bold"
      >
        {children}
      </Text>}
    </Box>
  )
}

Badge.defaultProps = {
  color: 'gray',
  variant: 'muted'
}

export default Badge