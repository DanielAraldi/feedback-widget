import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

import { ButtonProps } from '../../@types';
import { theme } from '../../config';
import { styles } from './styles';

export function Button({ isLoading, ...rest }: ButtonProps) {
  const { colors } = theme;

  return (
    <TouchableOpacity style={styles.container} {...rest}>
      {isLoading ? (
        <ActivityIndicator size='small' color={colors.textOnBrandColor} />
      ) : (
        <Text style={styles.title}>Enviar Feedback</Text>
      )}
    </TouchableOpacity>
  );
}
