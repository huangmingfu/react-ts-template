import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist', 'dist*', 'node_modules'] },
  {
    settings: { react: { version: '19.0' } },
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      '@typescript-eslint/no-unused-vars': 'off', // 禁用 TypeScript 未使用变量的警告
      'react-refresh/only-export-components': 'off', // 禁用 react-refresh 插件中仅导出组件的规则
      '@typescript-eslint/no-explicit-any': 'off', // 允许使用any
      '@typescript-eslint/no-unused-expressions': 'off', // 关闭对未使用的表达式的检查
      // 'react-hooks/exhaustive-deps': 'off' // 关闭依赖项检查规则
    },
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
);
