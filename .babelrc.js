const sharedPresets = [['@babel/preset-typescript', { allowDeclareFields: true }]];
const shared = {
  ignore: ['src/**/*.spec.ts'],
  presets: sharedPresets,
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        alias: {
          '@': './src'
        }
      }
    ]
  ]
};

module.exports = {
  env: {
    esmUnbundled: shared,
    esmBundled: {
      ...shared,
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              browsers: '> 0.25%, not dead'
            },
            modules: false
          }
        ],
        ...sharedPresets
      ]
    },
    cjs: {
      ...shared,
      presets: [
        [
          '@babel/preset-env',
          {
            modules: 'commonjs'
          }
        ],
        ...sharedPresets
      ]
    },
    test: {
      presets: ['@babel/preset-env', ...sharedPresets]
    }
  }
};
