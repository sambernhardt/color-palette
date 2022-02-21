import { Box, Flex, Text } from 'rebass';

import Badge from './components/Badge';
import Code from './components/Code';

const ExampleContent = () => {
  return (
    <Box py={4}>
      {/* <Text color="var(--text-teal)" fontSize={1} fontWeight="bold" mb={2}>Getting Started</Text> */}
      <Badge color="teal" icon="circle-arrow-right" mb={2}>Getting Started</Badge>

      <Text as="h1" mt={2} mb={3}>Editor Setup</Text>
      <Text color="var(--text-secondary)" as="p" mb={3}>
        Plugins and configuration settings that can improve the developer experience when working with Tailwind CSS.
      </Text>
      <Text as="h2" mt={4} mb={3}>Syntax support</Text>
      <Text color="var(--text-secondary)" as="p" mb={3}>
        Tailwind CSS uses a lot of custom CSS at-rules like <Code>@tailwind</Code>, <Code>@apply</Code>, and <Code>@screen</Code>, and in many editors this can trigger warnings or errors where these rules aren’t recognized.
      </Text>
      <Text color="var(--text-secondary)" as="p" mb={3}>
        The solution to this is almost always to install a plugin for your editor/IDE for PostCSS language support instead of regular CSS. For example, VS Code has a PostCSS Language Support plugin you can use that works great with Tailwind CSS.
      </Text> 
      <Text color="var(--text-secondary)" as="p" mb={3}>
        In some cases, you may need to disable native CSS linting/validations if your editor is very strict about the syntax it expects in your CSS files.
      </Text>
      
      <Text as="h2" mt={5} mb={3}>Browser Support</Text>
      <Text as="h4" mb={4}>Understanding which browsers Tailwind supports and how to manage vendor prefixes.</Text>
      <Text color="var(--text-secondary)" as="p" mb={3}>
        Plugins and configuration settings that can improve the developer experience when working with Tailwind CSS.
      </Text>
      <Text as="h3" mt={4} mb={3}>Syntax support</Text>
      <Text color="var(--text-secondary)" as="p" mb={3}>
        Tailwind CSS uses a lot of custom CSS at-rules like <Code>@tailwind</Code>, <Code>@apply</Code>, and <Code>@screen</Code>, and in many editors this can trigger warnings or errors where these rules aren’t recognized.
      </Text>
      <Text color="var(--text-secondary)" as="p" mb={3}>
        The solution to this is almost always to install a plugin for your editor/IDE for PostCSS language support instead of regular CSS. For example, VS Code has a PostCSS Language Support plugin you can use that works great with Tailwind CSS.
      </Text> 
      <Text color="var(--text-secondary)" as="p" mb={3}>
        In some cases, you may need to disable native CSS linting/validations if your editor is very strict about the syntax it expects in your CSS files.
      </Text>
    </Box>
  )
}

export default ExampleContent