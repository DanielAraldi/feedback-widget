import { TouchableOpacityProps, ImageProps } from 'react-native';
import { FeedbackDataProps } from '../constants';

export type OptionProps = TouchableOpacityProps &
  FeedbackDataProps & {
    image: ImageProps;
  };
