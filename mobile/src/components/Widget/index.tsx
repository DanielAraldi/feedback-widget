import { useRef } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';
import BottomSheet from '@gorhom/bottom-sheet';

import { Form } from '../Form';
import { Options } from '../Options';
import { Success } from '../Success';
import { theme } from '../../config';
import { styles } from './styles';

export function Widget() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const { colors } = theme;
  const behavior = Platform.OS === 'ios' ? 'padding' : 'height';

  function handleOpen(): void {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.expand();
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior={behavior}>
      <TouchableNativeFeedback onPress={Keyboard.dismiss}>
        <View style={styles.content}>
          <TouchableOpacity
            activeOpacity={0.5}
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
            <Form feedbackType='BUG' />
          </BottomSheet>
        </View>
      </TouchableNativeFeedback>
    </KeyboardAvoidingView>
  );
}
