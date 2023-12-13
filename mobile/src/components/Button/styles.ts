import { StyleSheet } from 'react-native';

import { theme } from '../../config';

const { colors, fonts } = theme;

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    height: 40,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: colors.brand,

    borderRadius: 4,
  },

  title: {
    fontSize: 14,
    fontFamily: fonts.medium,
    color: colors.textOnBrandColor,
  },
});
