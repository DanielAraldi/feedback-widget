import { StyleSheet } from 'react-native';

import { theme } from '../../config';

const { fonts, colors } = theme;

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  image: {
    width: 36,
    height: 36,

    marginTop: 42,
    marginBottom: 10,
  },

  title: {
    marginBottom: 24,

    fontSize: 20,
    fontFamily: fonts.medium,
    color: colors.textPrimary,
  },

  button: {
    height: 40,

    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 36,

    paddingHorizontal: 24,

    backgroundColor: colors.surfaceSecondary,

    borderRadius: 4,
  },

  buttonTitle: {
    fontSize: 14,
    fontFamily: fonts.medium,
    color: colors.textPrimary,
  },
});
