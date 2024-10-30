import { useState } from 'react';

import { useDesign } from '@/hooks';

import './index.scss';

function Home() {
  const { prefixCls } = useDesign('pg-home');

  const [count, setCount] = useState(0);

  return (
    <>
      <div className={prefixCls}>
        <span className={`${prefixCls}__count`}>{count}</span>
      </div>
      <button onClick={() => setCount(count + 1)}>count++</button>
    </>
  );
}

export default Home;
