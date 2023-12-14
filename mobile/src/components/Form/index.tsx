import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import { ArrowLeft } from 'phosphor-react-native';

import { FormProps } from '../../@types';
import { theme } from '../../config';
import { FEEDBACK_TYPES } from '../../constants';
import { styles } from './styles';
import { ScreenshotButton } from '../ScreenshotButton';
import { Button } from '../Button';

export function Form({ feedbackType }: FormProps) {
  const { colors } = theme;
  const { image, title } = FEEDBACK_TYPES[feedbackType];

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
          screenshot='https://github.com/DanielAraldi.png'
          onRemoveShot={async () => {}}
          onTakeShot={async () => {}}
        />

        <Button isLoading={false} />
      </View>
    </View>
  );
}
