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
      <Box
        p={3}
        css={`
          background: var(--background-gray-muted);
        `}
      >
        <ThemeSwitcher handleSetTheme={setTheme} />
        {/* <input type="text" placeholder="Search" /> */}
        {/* <Button>Click me</Button> */}
      </Box>
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
