import React from 'react';
import { Box, Flex, Text } from 'rebass';

import Button from './Button';
import Icon from './Icon';

const Message = ({ children, color, headingText, icon }) => {
  return (
    <Flex
      my={3}
      css={`
        background: var(--background-${color}-muted-alpha);
        padding: 20px;
        border-radius: 16px;
        margin: 10px 0;

        h3 {
          margin: 0;
          margin-bottom: 10px;
          transition-duration: .3s;
        }
      `}
    >
      {icon && (
        <Flex
          alignItems="center"
          css={`
            height: 23px;
          `}
        >
          <Icon icon={icon} color={`var(--icon-${color})`} mr={3} />
        </Flex>
      )}
      <Box>
        <Text
          as="h3"
          fontFamily="Inter"
          color={`var(--text-primary)`}
        >
          {headingText}
        </Text>
        <Text
          as="p"
          color={`var(--text-${color}-muted)`}
          mb={3}
          fontSize={1}
        >
          {children}
        </Text>
        <Button color={color}variant="solid">Get started</Button>
        <Button color={color} ml={1}>Dismiss</Button>
      </Box>
    </Flex>
  )
}

Message.defaultProps = {
  color: 'gray'
}

export default Message