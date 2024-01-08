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
    // 'prettier/@typescript-eslint', // Usa eslint-config-prettier para desabilitar regras ESLint de @typescript-eslint/eslint-plugin que entraria em conflito com Prettier
    // 'plugin:prettier/recommended', // Ativa o eslint-plugin-prettier e exibe erros Prettier como erros ESLint. Certifique-se de que esta seja sempre a última configuração no array
    'prettier'
  ],
  // [
  //   'plugin:@typescript-eslint/recommended',
  //   'plugin:prettier/recommended',
    
  // ],
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
