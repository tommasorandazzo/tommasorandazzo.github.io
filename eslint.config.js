import prettier, { rules } from 'eslint-config-prettier';
import js from '@eslint/js';
import { includeIgnoreFile } from '@eslint/compat';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import { fileURLToPath } from 'node:url';
import svelteConfig from './svelte.config.js';

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

export default [
  includeIgnoreFile(gitignorePath),
  js.configs.recommended,
  ...svelte.configs.recommended,
  prettier,
  ...svelte.configs.prettier,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }
    }
  },
  {
    files: ['**/*.svelte', '**/*.svelte.js'],
    languageOptions: { parserOptions: { svelteConfig } }
  },
  {
    rules: {
      strict: 0,
      'svelte/no-at-html-tags': 'warn',
      'prettier/prettier': 'error',
      'no-console': 'off',
      'no-underscore-dangle': 0,
      'no-unused-vars': 'warn',
      'object-shorthand': 0,
      'import/no-named-default': 0,
      'prefer-destructuring': 0,
      radix: 0,
    },
    settings: {
      'import/resolver': {
        alias: {
          extensions: ['.js', '.svelte'],
          map: [
            ['~', '/node_modules'],
            ['@atoms', '/src/components/01-atoms'],
            ['@molecules', '/src/components/02-molecules'],
            ['@organisms', '/src/components/03-organisms'],
            ['@templates', '/src/components/04-templates'],
            ['@pages', '/src/components/05-pages'],
          ]
        }
      }
    }
  }
];
