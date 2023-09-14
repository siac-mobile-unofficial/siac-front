module.exports = function (api) {
api.cache(false);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['expo-router/babel',["module:react-native-dotenv",{"path": "./.env"}],],
  };
};
