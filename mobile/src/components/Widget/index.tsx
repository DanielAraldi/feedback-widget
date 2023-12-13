import { TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';

import { theme } from '../../config';
import { styles } from './styles';

export function Widget() {
  const { colors } = theme;

  return (
    <>
      <TouchableOpacity activeOpacity={0.85} style={styles.button}>
        <ChatTeardropDots
          weight='bold'
          size={24}
          color={colors.textOnBrandColor}
        />
      </TouchableOpacity>
    </>
  );
}
