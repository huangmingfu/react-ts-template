import { useMemo } from 'react';

export function useDesign(scope: string) {
  return useMemo(
    () => ({
      prefixCls: scope // 前缀：'pg'页面、'cmp'组件、'pub'公共组件
    }),
    [scope]
  );
}

/**
 * 如果不想在函数组件内使用的话，可以更名为：（并且去掉useMemo，直接返回对象即可）
 * getPrefixCls/createDesign
 *
 * 因为use开头的hooks会报eslint错误：
 * 可以查看官方文档的 hook 规则：Hook 比普通函数更为严格。你只能在你的组件（或其他 Hook）的 顶层 调用 Hook。
 * React Hook "useDesign" cannot be called at the top level.
 * React Hooks must be called in a React function component or a custom React Hook function.
 * eslintreact-hooks/rules-of-hooks
 */
