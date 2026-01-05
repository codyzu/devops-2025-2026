import eslintPluginAstro from 'eslint-plugin-astro';

/** @type {import("xo").FlatXoConfig} */
const config = [
  {
    ignores: ['dist'],
  },
  {
    space: 2,
    prettier: true,
    react: true,
    semicolon: true,
    rules: {
      'react/react-in-jsx-scope': 0,
      'import-x/extensions': 'off',
    },
  },
  {
    files: ['**/*.tsx', '**/*.astro'],
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          case: 'pascalCase',
          ignore: ['index.astro', /\[\w+]\.astro$/],
        },
      ],
      'n/file-extension-in-import': 'off',
    },
  },
  {
    files: ['**/*.astro'],
    rules: {
      'react/no-unknown-property': 'off',
      'react/self-closing-comp': 'off',
      'react/jsx-no-undef': 'off',
      'react/jsx-key': 'off',
    },
  },
  ...eslintPluginAstro.configs['flat/recommended'],
];

export default config;
