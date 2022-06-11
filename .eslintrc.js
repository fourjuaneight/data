const prettierConf = require('./prettier.config');

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    tw: true,
  },
  overrides: [
    {
      files: '**/*.+(ts|tsx)',
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        'no-use-before-define': [0],
        '@typescript-eslint/no-use-before-define': [1],
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/quotes': [
          2,
          'backtick',
          {
            avoidEscape: true,
          },
        ],
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      classes: true,
      impliedStrict: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'id-length': [
      2,
      {
        exceptions: ['_', 'a', 'b', 'c', 'i', 'x', 'y', 'z'],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
    'import/no-unresolved': [2, { caseSensitive: false }],
    'import/prefer-default-export': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'no-await-in-loop': 0,
    'no-console': [
      'error',
      {
        allow: ['error', 'log'],
      },
    ],
    'no-case-declarations': 0,
    'no-nested-ternary': 0,
    'no-restricted-syntax': [
      'error',
      'FunctionExpression',
      'WithStatement',
      "BinaryExpression[operator='in']",
    ],
    'no-throw-literal': 0,
    'prettier/prettier': ['error', prettierConf],
    'react/display-name': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-unused-prop-types': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'none',
        vars: 'local',
        varsIgnorePattern: '^(React|e|i|it|expect)$',
      },
    ],
    '@typescript-eslint/no-useless-constructor': 0,
    '@typescript-eslint/no-explicit-any': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
};
