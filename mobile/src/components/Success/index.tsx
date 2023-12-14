import { Image, Text, TouchableOpacity, View } from 'react-native';

import { Copyright } from '../Copyright';
import { SuccessProps } from '../../@types';
import { SUCCESS_IMAGE } from '../../config';
import { styles } from './styles';

export function Success({ onSendAnotherFeedback }: SuccessProps) {
  return (
    <View style={styles.container}>
      <Image source={SUCCESS_IMAGE} style={styles.image} />

      <Text style={styles.title}>Agradecemos o feedback</Text>

      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.button}
        onPress={onSendAnotherFeedback}
      >
        <Text style={styles.buttonTitle}>Quero enviar outro</Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}
