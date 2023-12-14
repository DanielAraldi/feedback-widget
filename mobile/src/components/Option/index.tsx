import { Image, Text, TouchableOpacity } from 'react-native';
import { OptionProps } from '../../@types';
import { styles } from './styles';

export function Option(props: OptionProps) {
  const { image, title, ...rest } = props;

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5} {...rest}>
      <Image source={image} style={styles.image} />

      <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
