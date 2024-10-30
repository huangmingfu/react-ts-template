import { useMemo } from 'react';

export function useDesign(scope: string) {
  return useMemo(
    () => ({
      prefixCls: scope // 前缀：'pg'页面、'cmp'组件、'pub'公共组件
    }),
    [scope]
  );
}
