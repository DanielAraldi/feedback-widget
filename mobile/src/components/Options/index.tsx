import { Text, View } from 'react-native';

import { Copyright } from '../Copyright';
import { Option } from '../Option';
import { FeedbackKeyType, OptionsProps } from '../../@types';
import { FEEDBACK_TYPES } from '../../constants';
import { styles } from './styles';

export function Options({ onFeedbackTypeChanged }: OptionsProps) {
  const renderFeedbacks: JSX.Element[] = Object.entries(FEEDBACK_TYPES).map(
    ([key, value]) => (
      <Option
        key={key}
        title={value.title}
        image={value.image}
        onPress={() => onFeedbackTypeChanged(key as FeedbackKeyType)}
      />
    )
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe o seu feedback</Text>

      <View style={styles.options}>{renderFeedbacks}</View>

      <Copyright />
    </View>
  );
}
