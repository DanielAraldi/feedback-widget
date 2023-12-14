import { useState } from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import { ArrowLeft } from 'phosphor-react-native';
import { CaptureOptions, captureScreen } from 'react-native-view-shot';

import { FormProps } from '../../@types';
import { theme } from '../../config';
import { FEEDBACK_TYPES } from '../../constants';
import { ScreenshotButton } from '../ScreenshotButton';
import { Button } from '../Button';
import { styles } from './styles';

export function Form({ feedbackType }: FormProps) {
  const [isTakeScreenshot, setIsTakeScreenshot] = useState<boolean>(false);
  const [screenshot, setScreenshot] = useState<string>('');
  const [screenshotToBeShowed, setScreenshotToBeShowed] = useState<string>('');

  const { colors } = theme;
  const { image, title } = FEEDBACK_TYPES[feedbackType];

  function handleScreenshotRemove(): void {
    setScreenshot('');
    setScreenshotToBeShowed('');
  }

  async function handleScreenshot(): Promise<void> {
    setIsTakeScreenshot(true);

    try {
      const captureCommonOptions: CaptureOptions = {
        format: 'jpg',
        quality: 1,
      };
      const tmpFile = await captureScreen({
        ...captureCommonOptions,
        result: 'tmpfile',
      });
      const base64 = await captureScreen({
        ...captureCommonOptions,
        result: 'base64',
      });
      setScreenshotToBeShowed(tmpFile);
      setScreenshot(`data:image/jpeg;base64,${base64}`);
    } catch (error) {
      Alert.alert(
        'Falha ao realizar a captura',
        'Infelizmente não conseguir realizar a imagem de captura da seu tela, tente novamente mais tarde.'
      );
    } finally {
      setIsTakeScreenshot(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.5}>
          <ArrowLeft weight='bold' size={24} color={colors.textSecondary} />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Image source={image} style={styles.image} />

          <Text style={styles.titleText}>{title}</Text>
        </View>
      </View>

      <TextInput
        multiline
        style={styles.input}
        placeholder='Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo...'
        placeholderTextColor={colors.textSecondary}
      />

      <View style={styles.footer}>
        <ScreenshotButton
          screenshot={screenshotToBeShowed}
          isLoading={isTakeScreenshot}
          onRemoveShot={handleScreenshotRemove}
          onTakeShot={handleScreenshot}
        />

        <Button isLoading={false} />
      </View>
    </View>
  );
}
