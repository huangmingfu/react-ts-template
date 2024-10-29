import { useState } from 'react';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}></button>
    </>
  );
}

export default Home;
