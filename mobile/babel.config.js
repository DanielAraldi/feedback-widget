module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          allowlist: ['API_URL', 'API_PORT'],
          safe: true,
          allowUndefined: true,
          verbose: false,
        },
      ],
    ],
  };
};
