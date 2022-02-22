import React, { useEffect } from 'react'
import chroma from 'chroma-js';
import { Box, Flex, Text } from 'rebass';
import Badge from './components/Badge';

import Code from './components/Code';
import Icon from './components/Icon';

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
      <Flex alignItems="center">
        <Icon icon="wrench" fontSize={0} color="var(--icon-gray)" mr={2} />
        <Code mr={2}>var(--{color.replace('$', '')})</Code>
        <Flex alignItems="center">        
          <Icon icon="times" fontSize={0} color="var(--gray400)" mr={2} />
          <Badge variant="outline" color="gray">{modifier} ( {amount} )</Badge>
        </Flex>
      </Flex>
    );
  }
  return <Code>{value}</Code>;
};

const SwatchTable = ({ children, group }) => (
  <Box
    css={`
      width: 100%;
      overflow-x: auto;

      @media (max-width: 768px) {
        margin-left: -20px;
        padding: 0 20px;
        width: calc(100% + 40px);
      }
    `}
  >
    <Box
      css={`
        border: 1px solid var(--border);
        border-radius: 8px;
        overflow: hidden;
        display: inline-block;

        table {
          margin: -1px;
          white-space: nowrap;
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
            {(group.label === 'Text' || group.label === 'Icon') && (
              <th>
                Contrast
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </Box>
  </Box>
);

const ColorTab = ({ selectedTheme }) => {
  useEffect(() => {
    window.chroma = chroma;
  }, [selectedTheme]);

  if (!selectedTheme) return 'No theme selected';

  const colors = selectedTheme.themes[selectedTheme.theme];
  const groups = [
    {
      label: 'Scales',
      criteria: key => ['gray', 'blue', 'teal', 'green', 'lime', 'yellow', 'orange', 'red', 'purple'].some(color => {
        return key.indexOf(color) === 0
      }),
      colors: {}
    },
    {
      label: 'Text',
      criteria: key => key.indexOf('text') === 0,
      colors: {}
    },
    {
      label: 'Icon',
      criteria: key => key.indexOf('icon') === 0,
      colors: {}
    },
    {
      label: 'Background',
      criteria: key => key.indexOf('background') === 0,
      colors: {}
    },
    {
      label: 'Border',
      criteria: key => key.indexOf('border') === 0,
      colors: {}
    },
    {
      label: 'Other',
      criteria: key => true,
      colors: {}
    }
  ];

  // put colors in groups
  Object.keys(colors).forEach(key => {
    const group = groups.find(g => g.criteria(key));
    group.colors[key] = colors[key];
  });
  
  // separate scales
  const scales = ['gray', 'blue', 'teal', 'green', 'lime', 'yellow', 'orange', 'red', 'purple'].reduce((current, scale) => ({
    ...current,
    [scale]: {},
  }), {});
  // loop through items in scale group and put in appropriate scale group
  Object.keys(groups.filter(g => g.label === 'Scales')[0].colors).forEach(key => {
    const regexr = /(\w*)\d{3}/;
    const match = regexr.exec(key);
    if (match) {
      const scale = match[1];
      scales[scale][key] = colors[key];
    }
  });
  groups.filter(g => g.label === 'Scales')[0].colors = scales;

  const makeSwatchRows = (colors, group) => (
    Object.keys(colors).map(colorKey => {
      const colorValue = colors[colorKey];
      
      const computedValue = getComputedStyle(document.body).getPropertyValue(`--${colorKey}`).trim();

      let backgroundColorKey = '--background';
      let backgroundColor = getComputedStyle(document.body).getPropertyValue(backgroundColorKey).trim();
      let isOnColor = false;

      if (colorKey.indexOf('-on-background-') > -1) {
        isOnColor = true;
        backgroundColorKey = colorKey.split('-on-')[1];
        backgroundColor = getComputedStyle(document.body).getPropertyValue(`--${backgroundColorKey}`).trim();
      }

      const contrastAgainstBackground = chroma.contrast(computedValue, backgroundColor);

      const icon = (
        <Icon
          fontSize={1}
          icon="check"
          color={isOnColor ? `var(--${colorKey})` : 'var(--icon-gray)'}
          ml={2}
        />
      );
      const textColor = isOnColor ? `var(--${colorKey})` : 'var(--text-primary)';

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
          {group.label === 'Text' && (
            <Text as="td" bg={`var(--${backgroundColorKey})`} color={textColor}>
              {contrastAgainstBackground.toFixed(2)}
              {contrastAgainstBackground > 4.5 && icon}
            </Text>
          )}
          {group.label === 'Icon' && (
            <Text as="td" bg={`var(--${backgroundColorKey})`} color={textColor}>
              {contrastAgainstBackground.toFixed(2)}
              {contrastAgainstBackground > 3 && icon}
            </Text>
          )}
        </tr>
      );
    })
  );

  return (
    <Box my={4}>
      {/* <h2>Current theme: {selectedTheme.theme}</h2> */}
      <div>
        {groups.map(group => (
          <Box key={group.label} mb={5}>
            <h2>{capitalize(group.label)}</h2> 
              {group.label === 'Scales' ? (
                <Flex
                  flexWrap="wrap"
                  css={`
                    gap: 20px;
                  `}
                >
                  {Object.keys(group.colors).map(scaleKey => (
                    <Box key={scaleKey}>
                      <Text as="h4" mb={3}>{capitalize(scaleKey)}</Text>
                      <SwatchTable group={group}>
                        {makeSwatchRows(group.colors[scaleKey], group)}
                      </SwatchTable>
                    </Box>
                  ))}
                </Flex>
              ) : (
                <SwatchTable group={group}>
                  {makeSwatchRows(group.colors, group)}
                </SwatchTable>
              )}
          </Box>
        ))}
      </div>
    </Box>
  )
}

export default ColorTab