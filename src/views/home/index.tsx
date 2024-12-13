import { useState } from 'react';

import { useRouter } from '@/hooks';

import reactLogo from '@/assets/react.svg';

import './index.scss';
import viteLogo from '/vite.svg';

function Home() {
  const [count, setCount] = useState(0);
  const router = useRouter();
  return (
    <div className="pg-home">
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <br />
      <button onClick={() => router.push('/test/count')} style={{ fontSize: '15px' }}>
        跳转测试页面
      </button>
    </div>
  );
}

export default Home;
