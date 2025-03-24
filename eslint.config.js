import eslintReact from '@eslint-react/eslint-plugin';
import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist', 'dist*', 'node_modules'] },
  {
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      eslintReact.configs['recommended-typescript'],
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/no-unused-vars': 'off', // 禁用 TypeScript 未使用变量的警告
      'react-refresh/only-export-components': 'off', // 禁用 react-refresh 插件中仅导出组件的规则
      '@typescript-eslint/no-explicit-any': 'off', // 允许使用any
      '@typescript-eslint/no-unused-expressions': 'off', // 关闭对未使用的表达式的检查
      '@eslint-react/hooks-extra/no-unnecessary-use-prefix': 'off',
      // 'react-hooks/exhaustive-deps': 'off' // 关闭依赖项检查规则
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
      },
    },
  },
);
