import { useState } from 'react';

import { useUserStore } from '@/store';

import './index.scss';

function Create() {
  const [count, _setCount] = useState(99);

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

/** 
// **** import 自动排序测试 ****

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { debounce, reduce } from 'lodash-es';
import Cmp1 from '@/components/auto-scroll-to-top';
import Cmp2 from '@/components/not-fount';
import { useDesign } from '@/hooks';
import { useUserStore } from '@/store';
import { uuid } from '@/utils';
import { initializeApp } from '@core/app';
import { logger } from '@core/logger';
import { createConnection } from '@server/database';
import { createServer } from '@server/node';
import { Alert } from '@ui/Alert';
import { Popup } from '@ui/Popup';
import { Message } from '../Message';
import { add, filter, repeat } from '../utils';
import './index.scss';

 */
