module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 'latest'
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended', // Usa as regras recomendadas do @typescript-eslint/eslint-plugin
    'prettier'
  ],
  root: true,
  env: {
    node: true,
    jest: true,
    commonjs: true,
    es2021: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "prettier/prettier": ["error", {
      "semi": true,
      "singleQuote": true,
      "tabWidth": 2,
      "useTabs": false,
      'endOfLine': 'auto',
      }
    ]
  },
};
