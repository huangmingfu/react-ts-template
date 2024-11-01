import { useState } from 'react';

import { useDesign, useRouter } from '@/hooks';

import './index.scss';

function Count() {
  const { prefixCls } = useDesign('pg-guild-count');

  const [count, setCount] = useState(0);

  const router = useRouter();

  return (
    <div className={prefixCls}>
      <span className={`${prefixCls}__count`}>{count}</span>
      <button onClick={() => setCount(count + 1)}>count++</button>
      <br />
      <button onClick={() => router.push('/guild/create')}>跳转guild/create页面</button>
    </div>
  );
}

export default Count;
