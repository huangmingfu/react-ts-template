import { memo } from 'react';

import './index.scss';

/** Loading组件示例，可替换为ui库的loading组件作二次封装 */
function Loading() {
  return (
    <div className="pub-loading">
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="#4579FF"
          strokeDasharray="15"
          strokeDashoffset="15"
          strokeLinecap="round"
          strokeWidth="2"
          d="M12 3C16.9706 3 21 7.02944 21 12"
        >
          <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0" />
          <animateTransform
            attributeName="transform"
            dur="1.5s"
            repeatCount="indefinite"
            type="rotate"
            values="0 12 12;360 12 12"
          />
        </path>
      </svg>
    </div>
  );
}

export default memo(Loading);