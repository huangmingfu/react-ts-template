import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import { fileURLToPath } from 'node:url';

export default tseslint.config(
  { ignores: ['dist', '/dist*', '/config/', '/build/', '/node_modules/*', '/*.js'] },
  {
    settings: { react: { version: '18.3' } },
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      '@typescript-eslint/no-unused-vars': 'off', // 禁用 TypeScript 未使用变量的警告
      'react-refresh/only-export-components': 'off', // 禁用 react-refresh 插件中仅导出组件的规则
      '@typescript-eslint/no-explicit-any': 'off' // 允许使用any
    },
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: fileURLToPath(new URL('.', import.meta.url))
      }
    }
  }
);
