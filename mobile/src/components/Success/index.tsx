import { Image, Text, TouchableOpacity, View } from 'react-native';

import { Copyright } from '../Copyright';
import { SUCCESS_IMAGE } from '../../config';
import { styles } from './styles';

export function Success() {
  return (
    <View style={styles.container}>
      <Image source={SUCCESS_IMAGE} style={styles.image} />

      <Text style={styles.title}>Agradecemos o feedback</Text>

      <TouchableOpacity activeOpacity={0.5} style={styles.button}>
        <Text style={styles.buttonTitle}>Quero enviar outro</Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}
