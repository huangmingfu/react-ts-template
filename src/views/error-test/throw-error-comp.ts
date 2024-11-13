import React from 'react';

const ThrowErrorComponent: React.FC = () => {
  throw new Error('这是一个故意抛出的错误');
  // return <div>这个组件会抛出错误</div>;
};

export default ThrowErrorComponent;
