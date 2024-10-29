import { useState } from 'react';
import './index.scss';

import { useDesign } from '@/hooks';

const { prefixCls } = useDesign('pg-home');

function Home() {
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
