import { useCallback, useState } from 'react';

import { useDesign, useRouter } from '@/hooks';
import { useLoadingStore } from '@/store';

import './index.scss';

function Count() {
  const { prefixCls } = useDesign('pg-guild-count');

  const [count, setCount] = useState(0);

  const router = useRouter();

  const { showLoading, hideLoading } = useLoadingStore();

  const handleLoading = useCallback(() => {
    showLoading();
    setTimeout(() => {
      hideLoading();
    }, 1000);
  }, []);

  return (
    <div className={prefixCls}>
      <span className={`${prefixCls}__count`}>{count}</span>
      <button onClick={() => setCount(count + 1)}>count++</button>
      <br />
      <button onClick={() => router.push('/test/create')}>跳转guild/create页面</button>
      <button onClick={() => (location.href = '/test/auth-test')}>路由权限测试</button>
      <button onClick={() => router.push('/test/error-test')}>ErrorBoundary 测试</button>
      <button onClick={handleLoading}>loading展示，1s后关闭</button>
    </div>
  );
}

export default Count;
