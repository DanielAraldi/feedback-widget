import { StyleSheet } from 'react-native';

import { theme } from '../../config';

const { colors, fonts } = theme;

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 112,

    justifyContent: 'center',
    alignItems: 'center',

    marginHorizontal: 8,

    padding: 8,

    backgroundColor: colors.surfaceSecondary,

    borderRadius: 8,
  },

  image: {
    width: 40,
    height: 40,
  },

  title: {
    marginTop: 8,

    fontSize: 14,
    fontFamily: fonts.medium,
    color: colors.textPrimary,
  },
});
