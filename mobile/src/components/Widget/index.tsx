import { TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';
import BottomSheet from '@gorhom/bottom-sheet';

import { theme } from '../../config';
import { styles } from './styles';
import { useRef } from 'react';
import { Options } from '../Options';

export function Widget() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const { colors } = theme;

  function handleOpen(): void {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.expand();
    }
  }

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.85}
        style={styles.button}
        onPress={handleOpen}
      >
        <ChatTeardropDots
          weight='bold'
          size={24}
          color={colors.textOnBrandColor}
        />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        <Options />
      </BottomSheet>
    </>
  );
}
