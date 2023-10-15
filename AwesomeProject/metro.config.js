/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const blacklistErrors = (rules) => {
  rules[1].message = 'RegExp not match any rules';
};

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    sourceExts: ['js', 'json', 'ts', 'tsx'],
  },
  serializer: {
    getModulesRunBeforeMainModule: () => [
      path.resolve(__dirname, './blacklistErrors.js'),
    ],
  },
};
