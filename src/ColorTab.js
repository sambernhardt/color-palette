import React from 'react'
import { Box, Flex, Text } from 'rebass';
import Badge from './components/Badge';

import Code from './components/Code';

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Swatch = ({ color, ...props }) => (
  <Box
    css={`
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: ${color};
      border: 1px solid var(--border);
    `}
    {...props}
  />
);

const renderColorValue = (value) => {
  if (value.indexOf('#') === 0) {
    return <Code>{value}</Code>;
  } else if (value.indexOf('$') === 0) {
    return <Code>var(--{value.replace('$', '')})</Code>;
  }
  const [modifier, color, amount] = value.split(' ');
  if (modifier && color && amount) {
    return (
      <Flex alignItems="center" flexWrap="wrap" css="gap: 10px;">
        <Badge variant="ghost" icon="wrench" color="gray">{modifier}({amount})</Badge>
        <Code>var(--{color.replace('$', '')})</Code>
      </Flex>
    );
  }
  return <Code>{value}</Code>;
};

const SwatchTable = ({ children }) => (
  <Box
    css={`
      border: 1px solid var(--border);
      border-radius: 8px;
      overflow: hidden;
      display: inline-block;
      overflow-x: scroll;

      table {
        margin: -1px;
      }
    `}
  >
    <table>
      <thead>
        <tr>
          <th></th>
          <th>
            Color
          </th>
          <th>
            Value
          </th>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  </Box>
);

const ColorTab = ({ selectedTheme }) => {
  if (!selectedTheme) return 'No theme selected';

  const colors = selectedTheme.themes[selectedTheme.theme];
  const groupCriteria = {
    background: key => key.indexOf('background') === 0,
    border: key => key.indexOf('border') === 0,
    text: key => key.indexOf('text') === 0,
    icon: key => key.indexOf('icon') === 0,
    scales: key => ['gray', 'blue', 'teal', 'green', 'lime', 'yellow', 'orange', 'red', 'purple'].some(color => {
      return key.indexOf(color) === 0
    }),
  };

  const groups = {};
  // put colors in groups
  Object.keys(colors).forEach(key => {
    const group = Object.keys(groupCriteria).find(groupCriteriaKey => groupCriteria[groupCriteriaKey](key));
    if (!groups[group]) groups[group] = {};
    groups[group][key] = colors[key];
  });

  // separate scales
  const scales = ['gray', 'blue', 'teal', 'green', 'lime', 'yellow', 'orange', 'red', 'purple'].reduce((current, scale) => ({
    ...current,
    [scale]: {},
  }), {});
  // loop through items in scale group and put in appropriate scale group
  Object.keys(groups.scales).forEach(key => {
    const regexr = /(\w*)\d{3}/;
    const match = regexr.exec(key);
    if (match) {
      const scale = match[1];
      scales[scale][key] = colors[key];
    }
  });
  groups.scales = scales;

  const makeSwatchRows = (colors) => (
    Object.keys(colors).map(colorKey => {
      const colorValue = colors[colorKey];
      return (
        <tr key={colorKey}>
          <td>
            <Swatch color={`var(--${colorKey})`} />
          </td>
          <td>
            {colorKey}
          </td>
          <td>
          {renderColorValue(colorValue)}
          </td>
        </tr>
      );
    })
  );

  return (
    <Box my={4}>
      {/* <h2>Current theme: {selectedTheme.theme}</h2> */}
      <div>
        {Object.keys(groups).map(group => (
          <Box key={group} mb={5}>
            <h2>{capitalize(group)}</h2> 
              {group === 'scales' ? (
                <Flex
                  flexWrap="wrap"
                  css={`
                    gap: 20px;
                  `}
                >
                  {Object.keys(groups[group]).map(scaleKey => (
                    <Box>
                      <Text as="h4" mb={3}>{scaleKey}</Text>
                      <SwatchTable>
                        {makeSwatchRows(groups[group][scaleKey])}
                      </SwatchTable>
                    </Box>
                  ))}
                </Flex>
              ) : (
                <SwatchTable>
                  {makeSwatchRows(groups[group])}
                </SwatchTable>
              )}
          </Box>
        ))}
      </div>
    </Box>
  )
}

export default ColorTab