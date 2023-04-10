module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: '> 0.5%, last 2 versions, Firefox ESR, not dead'
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-transform-object-assign',
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true
      }
    ],
    [
      'babel-plugin-styled-components',
      {
        displayName: true,
        namespace: 'chem-space/ui-kit'
      }
    ],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }]
  ],
  env: {
    production: {
      plugins: [['react-remove-properties', { properties: [/data-test/u] }]]
    }
  }
};
