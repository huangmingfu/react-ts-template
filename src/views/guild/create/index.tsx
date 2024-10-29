import { useState } from 'react';
import './index.scss';

function Create() {
  const [count, setCount] = useState(99);

  return (
    <>
      <div className="pg-guild-create">
        Guild/Create：
        <span className="pg-guild-create__count">{count}</span>
      </div>
    </>
  );
}

export default Create;
