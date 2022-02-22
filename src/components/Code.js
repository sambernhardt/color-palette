import { Text } from 'rebass';

const Code = ({ color, ...props }) => {
  return (
    <Text
      as="code"
      css={`
        font-family: 'Roboto Mono', monospace;
        font-size: 14px;
        background: var(--background-${color}-muted-alpha);
        color: var(--text-primary);
        padding: 1px 4px;
        border-radius: 4px;
        margin-right: 4px;
      `}
      {...props}
    />
  )
}

Code.defaultProps = {
  color: 'gray',
}

export default Code;