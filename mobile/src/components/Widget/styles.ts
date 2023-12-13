import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { theme } from '../../config';

const { colors } = theme;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
  },

  button: {
    position: 'absolute',

    right: 16,
    bottom: getBottomSpace() + 16,

    width: 48,
    height: 48,

    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 24,

    backgroundColor: colors.brand,
  },

  modal: {
    paddingBottom: getBottomSpace(),

    backgroundColor: colors.surfacePrimary,
  },

  indicator: {
    width: 56,

    backgroundColor: colors.textPrimary,
  },
});
