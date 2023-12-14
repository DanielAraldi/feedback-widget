import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

import { ButtonProps } from '../../@types';
import { theme } from '../../config';
import { styles } from './styles';

export function Button(props: ButtonProps) {
  const { isLoading = false, disabled, ...rest } = props;

  const { colors } = theme;
  const isDisabled = isLoading || disabled;

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.container, { opacity: isDisabled ? 0.5 : 1 }]}
      disabled={isLoading || disabled}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator size='small' color={colors.textOnBrandColor} />
      ) : (
        <Text style={styles.title}>Enviar Feedback</Text>
      )}
    </TouchableOpacity>
  );
}
