const presets = [
  '@babel/preset-react',
  [
    '@babel/env',
    {
      targets: {
        edge: '17',
        ie: '11',
        firefox: '50',
        chrome: '64',
        safari: '11.1',
        android: '67',
        ios: '11',
      },
      useBuiltIns: 'usage',
      corejs: '3.4.1',
    },
  ],
];

module.exports = { presets };
