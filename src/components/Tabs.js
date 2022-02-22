import React, { useState } from 'react';
import { Box, Flex, Text } from 'rebass';

const Tabs = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Box>
    <Flex
      alignItems="center"
      my={3}
      css={`
        gap: 20px;
        margin: 10px 0;
        border-bottom: 1px solid var(--border);
      `}
    >
      {tabs.map((tab, index) => (
        <Text
          key={tab.label}
          as="button"
          fontWeight="bold"
          color={index === selectedTab ? `var(--text-primary)` : `var(--text-secondary)`}
          px={0}
          py={3}
          fontSize={1}
          onClick={() => setSelectedTab(index)}
          css={`
            cursor: pointer;
            background: transparent;
            border: none;
            border-bottom: 2px solid ${index === selectedTab ? `var(--text-primary)` : `transparent`};
          `}
        >
          {tab.label}
        </Text> 
      ))}
    </Flex>
    {tabs[selectedTab].render()}
    </Box>
  )
}

export default Tabs;