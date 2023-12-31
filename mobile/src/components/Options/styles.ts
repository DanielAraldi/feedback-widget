import { StyleSheet } from 'react-native';

import { theme } from '../../config';

const { colors, fonts } = theme;

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  options: {
    flexDirection: 'row',

    width: '100%',

    justifyContent: 'center',

    marginBottom: 48,
  },

  title: {
    marginBottom: 32,

    fontSize: 20,
    fontFamily: fonts.medium,
    color: colors.textPrimary,
  },
});
