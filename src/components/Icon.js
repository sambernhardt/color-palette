import { Text } from 'rebass';

const Icon = ({ icon, color, weight, ...props }) => {
  return (
    <Text
      as="i"
      className={`fa-${weight} fa-${icon}`}
      color={color}
      {...props}
    />
  )
};

Icon.defaultProps = {
  weight: 'solid',
};

export default Icon