import { StyleSheet } from 'react-native';

import { theme } from '../../config';

const { fonts, colors } = theme;

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',

    paddingHorizontal: 24,
  },

  header: {
    flexDirection: 'row',

    marginVertical: 16,
  },

  titleContainer: {
    flex: 1,
    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',

    paddingRight: 24,
  },

  titleText: {
    fontSize: 20,
    fontFamily: fonts.medium,
    color: colors.textPrimary,
  },

  image: {
    width: 24,
    height: 24,

    marginRight: 8,
  },

  input: {
    width: '100%',
    height: 112,

    marginBottom: 8,

    padding: 12,
    paddingTop: 12,

    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.stroke,

    fontFamily: fonts.regular,
    textAlignVertical: 'top',
    color: colors.textPrimary,
  },

  footer: {
    flexDirection: 'row',

    marginBottom: 16,
  },
});
