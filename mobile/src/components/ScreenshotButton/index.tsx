import { View, TouchableOpacity, Image } from 'react-native';
import { Camera, Trash } from 'phosphor-react-native';

import { ScreenshotButtonProps } from '../../@types';
import { theme } from '../../config';
import { styles } from './styles';

export function ScreenshotButton(props: ScreenshotButtonProps) {
  const { screenshot, isLoading = false, onRemoveShot, onTakeShot } = props;

  const { colors } = theme;

  const renderScreenshot: JSX.Element = screenshot ? (
    <View>
      <Image
        style={styles.image}
        source={{ uri: screenshot }}
        resizeMode='cover'
      />

      <Trash
        weight='fill'
        size={22}
        color={colors.textSecondary}
        style={styles.removeIcon}
      />
    </View>
  ) : (
    <Camera weight='bold' size={24} color={colors.textPrimary} />
  );

  async function handleOnPress(): Promise<void> {
    if (screenshot && onRemoveShot) onRemoveShot();
    else if (onTakeShot) await onTakeShot();
  }

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.container, { opacity: isLoading ? 0.5 : 1 }]}
      onPress={async () => await handleOnPress()}
    >
      {renderScreenshot}
    </TouchableOpacity>
  );
}
