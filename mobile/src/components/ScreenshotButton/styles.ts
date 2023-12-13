import { StyleSheet } from 'react-native';

import { theme } from '../../config';

const { colors } = theme;

export const styles = StyleSheet.create({
  container: {
    position: 'relative',

    overflow: 'hidden',

    width: 40,
    height: 40,

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 8,

    borderRadius: 4,

    backgroundColor: colors.surfaceSecondary,
  },

  removeIcon: {
    position: 'absolute',

    right: 0,
    bottom: 0,
  },

  image: {
    width: 40,
    height: 40,
  },
});
