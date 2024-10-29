import { useState } from 'react';
import './index.scss';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="home">
        <span className="count">{count}</span>
      </div>
      <button onClick={() => setCount(count + 1)}></button>
    </>
  );
}

export default Home;
