import { Box, Flex, Text } from 'rebass';

import Message from './components/Message';
import Button from './components/Button';
import Badge from './components/Badge';

const ExampleContent = () => {
  return (
    <Box py={4}>
      {/* <Text as="h1" mt={2} mb={4}>Components</Text> */}
      <Text as="h2" mt={2} mb={3}>Badges</Text>
      <Flex flexDirection={['row', 'column']} mb={5}>
        {['solid', 'muted', 'outline', 'ghost'].map(variant => (
          <Flex flexWrap="wrap" justifyContent="flex-start" flexDirection={['column', 'row']} key={variant}>
            {['gray', 'blue', 'teal', 'green', 'lime', 'yellow', 'orange', 'red', 'purple'].map(color => (
              <Badge key={color} icon="info-circle" color={color} variant={variant} mr={2} mb={2}>Badge</Badge>
            ))}
          </Flex>
        ))}
      </Flex>
      <Text as="h2" mt={2} mb={3}>Messages</Text>
      {['muted', 'outline', 'solid'].map(variant => (
        ['gray', 'blue', 'teal', 'green', 'lime', 'yellow', 'orange', 'red', 'purple'].map(color => (
          <Message
            color={color}
            key={color}
            icon="circle-info"
            headingText="Get started"
            variant={variant}
            buttons={(
              <>
                <Button
                  color={variant === 'solid' ? 'white' : color}
                  variant="solid"
                >
                  Get started
                </Button>
                <Button
                  color={color}
                  ml={1}
                  variant={variant === 'solid' ? 'knockoutOutline' : 'outline'}
                >
                  Dismiss
                </Button>              
              </>
            )}
          >
            It's fast, flexible, and reliable — with zero-runtime.
          </Message>
        ))
      ))}
    </Box>
  )
}

export default ExampleContent