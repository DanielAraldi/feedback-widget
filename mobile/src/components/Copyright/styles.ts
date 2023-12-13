import { StyleSheet } from 'react-native';

import { theme } from '../../config';

const { colors, fonts } = theme;

export const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    fontFamily: fonts.medium,
    color: colors.textSecondary,
  },
});
