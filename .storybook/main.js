const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../**/*.stories.tsx'],
  addons: [],
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  viteFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@src': path.resolve(__dirname, 'src'),
    };

    return config;
  },
  // webpackFinal: async (config) => {
  //   config.module.rules.push({
  //     test: /\.(sass|s?css)$/,
  //     use: [
  //       'style-loader',
  //       {
  //         loader: 'css-loader',
  //         options: {
  //           modules: true,
  //           importLoaders: 1,
  //         },
  //       },
  //       'resolve-url-loader',
  //       'sass-loader',
  //     ],
  //     include: /\.(module)\.(sass|s?css)$/i,
  //   });

  //   config.module.rules.push({
  //     test: /\.(ts|tsx)$/,
  //     loader: require.resolve('babel-loader'),
  //     options: {
  //       presets: [['react-app', { flow: false, typescript: true }]],
  //     },
  //   });

  //   config.resolve.plugins.push(new TsconfigPathsPlugin({}));
  //   config.resolve.alias = {
  //     ...config.resolve.alias,
  //     '@src': path.resolve(__dirname, 'src'),
  //   };

  //   return config;
  // },
};
