import { Box, Flex, Text } from 'rebass';

import Message from './components/Message';
import Badge from './components/Badge';

const ExampleContent = () => {
  return (
    <Box py={4}>
      <Badge color="blue" icon="flask" mb={2}>Beta</Badge>
      <Text as="h1" mt={2} mb={3}>Components</Text>
      {['gray', 'blue', 'teal', 'green', 'lime', 'yellow', 'orange', 'red', 'purple'].map(color => (
        <Message
          color={color}
          key={color}
          icon="circle-info"
          headingText="Get started with Tailwind CSS"
        >
          It's fast, flexible, and reliable — with zero-runtime.
        </Message>
      ))}
      <Flex flexDirection={['row', 'column']} my={4}>
        {['solid', 'muted', 'outline', 'ghost'].map(variant => (
          <Flex flexWrap="wrap" justifyContent="flex-start" flexDirection={['column', 'row']} key={variant}>
            {['gray', 'blue', 'teal', 'green', 'lime', 'yellow', 'orange', 'red', 'purple'].map(color => (
              <Badge key={color} icon="info-circle" color={color} variant={variant} mr={2} mb={2}>Badge</Badge>
            ))}
          </Flex>
        ))}
      </Flex>
    </Box>
  )
}

export default ExampleContent