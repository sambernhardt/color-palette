import React from 'react';
import { Box, Flex, Text } from 'rebass';

import Button from './Button';
import Icon from './Icon';

const getVariantStyles = (color) => ({
  solid: {
    iconColor: `var(--text-on-background-${color})`,
    textHeadingColor: `var(--text-on-background-${color})`,
    textBodyColor: `var(--text-on-background-${color})`,
    backgroundColor: `var(--background-${color})`,
    borderColor: `var(--background-${color})`,
  },
  muted: {
    iconColor: `var(--icon-${color})`,
    textHeadingColor: `var(--text-primary)`,
    textBodyColor: `var(--text-${color}-muted)`,
    backgroundColor: `var(--background-${color}-muted)`,
    borderColor: `transparent`,
  },
  outline: {
    iconColor: `var(--icon-${color})`,
    textHeadingColor: `var(--text-primary)`,
    textBodyColor: `var(--text-secondary)`,
    backgroundColor: `transparent`,
    borderColor: `var(--border)`,
  },
})

const Message = ({ children, buttons, color, headingText, variant, icon, ...props }) => {
  const { iconColor, textHeadingColor, textBodyColor, backgroundColor, borderColor } = getVariantStyles(color)[variant];

  return (
    <Flex
      my={3}
      css={`
        background: ${backgroundColor};
        padding: 20px;
        border-radius: 16px;
        margin: 10px 0;
        border: 1px solid ${borderColor};

        h3 {
          margin: 0;
          margin-bottom: 10px;
          transition-duration: .3s;
        }
      `}
      {...props}
    >
      {icon && (
        <Flex
          alignItems="center"
          css={`
            height: 23px;
          `}
        >
          <Icon icon={icon} color={iconColor} mr="20px" />
        </Flex>
      )}
      <Box css="flex: 1;">
        <Text
          as="h3"
          fontFamily="Inter"
          color={textHeadingColor}
        >
          {headingText}
        </Text>
        <Text
          as="p"
          color={textBodyColor}
          mb={3}
          fontSize={1}
        >
          {children}
        </Text>
        {buttons && (
          <Flex
            css={`
              gap: 5px;
            `}
          >
            {buttons}
          </Flex>
        )}
      </Box>
    </Flex>
  )
}

Message.defaultProps = {
  color: 'gray',
  variant: 'muted'
}

export default Message