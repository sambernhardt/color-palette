import { Box, Flex, Text } from 'rebass';

import Badge from './components/Badge';
import Message from './components/Message';
import Code from './components/Code';
import Button from './components/Button';

const ExampleContent = () => {
  return (
    <Box py={4}>
      {/* <Text color="var(--text-teal)" fontSize={1} fontWeight="bold" mb={2}>Getting Started</Text> */}
      <Badge color="teal" icon="circle-arrow-right" mb={3}>Getting Started</Badge>

      <Text as="h1" mt={2} mb={2}>Editor Setup</Text>
      <Text color="var(--text-secondary)" as="p" mb={3} className="large">
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
      
      <Badge color="blue" icon="flask" mt={4} mb={3}>Beta</Badge>
      <Text as="h1"  mb={2}>Browser Support</Text>
      <Text as="p" mb={3} className="large">Understanding which browsers Tailwind supports and how to manage vendor prefixes.</Text>
      <Text color="var(--text-secondary)" as="p" mb={3}>
        Plugins and configuration settings that can improve the developer experience when working with Tailwind CSS.
      </Text>
      <Text color="var(--text-secondary)" as="p" mb={3}>
        The solution to this is almost always to install a plugin for your editor/IDE for PostCSS language support instead of regular CSS. For example, VS Code has a PostCSS Language Support plugin you can use that works great with Tailwind CSS.
      </Text>
      <Text as="h3" mt={4} mb={3}>Syntax support</Text>
      <Text color="var(--text-secondary)" as="p" mb={3}>
        Tailwind CSS uses a lot of custom CSS at-rules like <Code>@tailwind</Code>, <Code>@apply</Code>, and <Code>@screen</Code>, and in many editors this can trigger warnings or errors where these rules aren’t recognized.
      </Text> 
      <Text color="var(--text-secondary)" as="p" mb={3}>
        In some cases, you may need to disable native CSS linting/validations if your editor is very strict about the syntax it expects in your CSS files.
      </Text>
      <Message
        headingText="Applying conditionally"
        color="teal"
        variant="outline"
        my={4}
        icon="code-branch"
        buttons={(
          <>
            <Button color="teal" variant="solid">Learn more</Button>
            <Button color="teal" variant="outline">Dismiss</Button>
          </>
        )}
      >
        Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use hover:ring-4 to only apply the ring-4 utility on hover.
      </Message>
      
      <Badge color="orange" icon="circle-arrow-right" mt={5} mb={3}>Summary</Badge>

      <Text as="h1" mt={2} mb={2}>Editor Setup</Text>
      <Text color="var(--text-secondary)" as="p" mb={3} className="large">
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
      
      <Badge color="blue" icon="flask" mt={4} mb={3}>Beta</Badge>
      <Text as="h1"  mb={2}>Browser Support</Text>
      <Text as="p" mb={3} className="large">Understanding which browsers Tailwind supports and how to manage vendor prefixes.</Text>
      <Text color="var(--text-secondary)" as="p" mb={3}>
        Plugins and configuration settings that can improve the developer experience when working with Tailwind CSS.
      </Text>
      <Text color="var(--text-secondary)" as="p" mb={3}>
        The solution to this is almost always to install a plugin for your editor/IDE for PostCSS language support instead of regular CSS. For example, VS Code has a PostCSS Language Support plugin you can use that works great with Tailwind CSS.
      </Text>
      <Text as="h3" mt={4} mb={3}>Syntax support</Text>
      <Text color="var(--text-secondary)" as="p" mb={3}>
        Tailwind CSS uses a lot of custom CSS at-rules like <Code>@tailwind</Code>, <Code>@apply</Code>, and <Code>@screen</Code>, and in many editors this can trigger warnings or errors where these rules aren’t recognized.
      </Text> 
      <Text color="var(--text-secondary)" as="p" mb={3}>
        In some cases, you may need to disable native CSS linting/validations if your editor is very strict about the syntax it expects in your CSS files.
      </Text>

      <Message
        headingText="Sign up"
        color="purple"
        variant="muted"
        my={4}
        icon="code-branch"
        buttons={(
          <>
            <Button color="purple" variant="solid">Learn more</Button>
            <Button color="purple" variant="outline">Dismiss</Button>
          </>
        )}
      >
        Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use hover:ring-4 to only apply the ring-4 utility on hover.
      </Message>
    </Box>
  )
}

export default ExampleContent