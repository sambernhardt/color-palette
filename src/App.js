import { Box, Flex, Text } from 'rebass';
import ThemeSwitcher from './ThemeSwitcher';

import Button from './components/Button';
import Tabs from './components/Tabs';
import ExampleContent from './ExampleContent';
import ExampleComponents from './ExampleComponents';

function App() {

  return (
    <div className="App">
      <div className="header">
        <ThemeSwitcher />
        <input type="text" placeholder="Search" />
        <Button>Click me</Button>
      </div>
      <Box className="container" mx="auto">
        <Tabs
          tabs={[
            {
              label: 'Content',
              render: () => <ExampleContent />
            },
            {
              label: 'Components',
              render: () => <ExampleComponents />
            },
          ]}
        />
      </Box>
    </div>
  );
}

export default App;
