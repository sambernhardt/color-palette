import { useState } from 'react';
import { Box, Flex, Text } from 'rebass';
import ThemeSwitcher from './ThemeSwitcher';

import Button from './components/Button';
import Tabs from './components/Tabs';
import ExampleContent from './ExampleContent';
import ExampleComponents from './ExampleComponents';
import ColorTab from './ColorTab';

function App() {
  const [selectedTheme, setTheme] = useState(null);

  return (
    <div className="App">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        p={3}
        pl={4}
        css={`
          background: var(--background-surface);
          border-bottom: 1px solid var(--border);
        `}
      >
        <Text as="h3">Color palette</Text>
        <Flex alignItems="center">
          <Text mr={2}>Theme:</Text>
          <ThemeSwitcher handleSetTheme={setTheme} />
        </Flex>
        {/* <input type="text" placeholder="Search" /> */}
        {/* <Button>Click me</Button> */}
      </Flex>
      <Box className="container" mx="auto" p={3}>
        <Tabs
          tabs={[
            {
              label: 'Colors',
              render: () => <ColorTab selectedTheme={selectedTheme} />
            },
            {
              label: 'Components',
              render: () => <ExampleComponents />
            },
            {
              label: 'Content',
              render: () => <ExampleContent />
            },
          ]}
        />
      </Box>
    </div>
  );
}

export default App;
