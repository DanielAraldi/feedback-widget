import { useState } from 'react';
import { View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { ArrowLeft } from 'phosphor-react-native';
import { captureScreen } from 'react-native-view-shot';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import * as FileSystem from 'expo-file-system';

import { FeedbackService } from '../../services';
import { FormProps } from '../../@types';
import { theme } from '../../config';
import { FEEDBACK_TYPES } from '../../constants';
import { ScreenshotButton } from '../ScreenshotButton';
import { Button } from '../Button';
import { styles } from './styles';

export function Form(props: FormProps) {
  const [isSendingFeedback, setIsSeedingFeedback] = useState<boolean>(false);
  const [isTakeScreenshot, setIsTakeScreenshot] = useState<boolean>(false);
  const [comment, setComment] = useState<string>('');
  const [screenshot, setScreenshot] = useState<string>('');

  const { feedbackType, onFeedbackCancelled, onFeedbackSent } = props;

  const { colors } = theme;
  const { image, title } = FEEDBACK_TYPES[feedbackType];

  function handleScreenshotRemove(): void {
    setScreenshot('');
  }

  async function handleScreenshot(): Promise<void> {
    setIsTakeScreenshot(true);

    try {
      const uri = await captureScreen({
        format: 'png',
        quality: 1,
      });
      setScreenshot(uri);
    } catch (error) {
      Alert.alert(
        'Falha ao realizar a captura',
        'Infelizmente não conseguir realizar a imagem de captura da seu tela, tente novamente mais tarde.'
      );
    } finally {
      setIsTakeScreenshot(false);
    }
  }

  async function handleSendFeedback(): Promise<void> {
    setIsSeedingFeedback(true);

    try {
      let screenshotBase64 = '';
      if (screenshot) {
        screenshotBase64 = await FileSystem.readAsStringAsync(screenshot, {
          encoding: 'base64',
        });
      }
      await FeedbackService.send({
        type: feedbackType,
        screenshot: screenshotBase64
          ? `data:image/png;base64,${screenshotBase64}`
          : null,
        comment,
      });
      onFeedbackSent();
    } catch (error) {
      onFeedbackCancelled();
      Alert.alert(
        'Tivemos um problema!',
        'Infelizmente não conseguimos enviar o seu querido feedback para o nossos servidores. Por favor, tente novamente mais tarde.'
      );
    } finally {
      setIsSeedingFeedback(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          disabled={isSendingFeedback}
          activeOpacity={0.5}
          onPress={onFeedbackCancelled}
        >
          <ArrowLeft weight='bold' size={24} color={colors.textSecondary} />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Image source={image} style={styles.image} />

          <Text style={styles.titleText}>{title}</Text>
        </View>
      </View>

      <BottomSheetTextInput
        multiline
        autoCorrect={false}
        editable={!isSendingFeedback}
        value={comment}
        style={styles.input}
        placeholder='Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo...'
        placeholderTextColor={colors.textSecondary}
        onChangeText={setComment}
      />

      <View style={styles.footer}>
        <ScreenshotButton
          screenshot={screenshot}
          isLoading={isTakeScreenshot || isSendingFeedback}
          onRemoveShot={handleScreenshotRemove}
          onTakeShot={handleScreenshot}
        />

        <Button
          onPress={async () => await handleSendFeedback()}
          isLoading={isSendingFeedback}
          disabled={comment.length === 0}
        />
      </View>
    </View>
  );
}
