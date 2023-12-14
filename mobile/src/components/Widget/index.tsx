import { useRef, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';
import BottomSheet from '@gorhom/bottom-sheet';

import { Form } from '../Form';
import { Options } from '../Options';
import { Success } from '../Success';
import { FeedbackKeyType } from '../../@types';
import { theme } from '../../config';
import { styles } from './styles';

export function Widget() {
  const [feedbackSent, setFeedbackSent] = useState<boolean>(false);
  const [feedbackType, setFeedbackType] = useState<FeedbackKeyType | null>(
    null
  );

  const bottomSheetRef = useRef<BottomSheet>(null);

  const { colors } = theme;
  const renderProgress: JSX.Element = feedbackSent ? (
    <Success onSendAnotherFeedback={handleRestartFeedback} />
  ) : (
    <>
      {feedbackType ? (
        <Form
          feedbackType={feedbackType}
          onFeedbackCancelled={handleRestartFeedback}
          onFeedbackSent={handleFeedbackSent}
        />
      ) : (
        <Options onFeedbackTypeChanged={setFeedbackType} />
      )}
    </>
  );

  function handleFeedbackSent(): void {
    setFeedbackSent(true);
  }

  function handleRestartFeedback(): void {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  function handleOpen(): void {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.expand();
    }
  }

  return (
    <View style={styles.container}>
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
        keyboardBehavior='interactive'
        android_keyboardInputMode='adjustResize'
      >
        {renderProgress}
      </BottomSheet>
    </View>
  );
}
