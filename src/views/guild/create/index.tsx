import { useState } from 'react';
import './index.scss';
import { useUserStore } from '@/store';

function Create() {
  const [count, setCount] = useState(99);

  const { userInfo, updateUserName } = useUserStore();

  return (
    <>
      <div className="pg-guild-create">
        Guild/Create：
        <span className="pg-guild-create__count">{count}</span>
        <hr />
        <span className="pg-guild-create__username">{userInfo.username}</span>
        <img className="pg-guild-create__avatar" src={userInfo.avatar} alt="" />
        <button onClick={() => updateUserName('vue3')}>updateUserName</button>
      </div>
    </>
  );
}

export default Create;
