import { FC } from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorBoundary: FC = () => {
  const routeError = useRouteError() as Error;

  // 可以在这里根据不同的业务逻辑处理错误或者上报给日志服务
  return (
    <div
      style={{
        width: '80%',
        margin: '100px auto',
        padding: '20px',
        backgroundColor: '#fff0f0',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
      }}
    >
      <h1 style={{ color: '#ff6347', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
        {routeError?.name}：渲染失败
      </h1>
      <p style={{ fontSize: '16px', color: '#333' }}>发送生了错误：</p>
      <div
        style={{
          margin: '20px 0',
          padding: '10px',
          backgroundColor: '#f7f7f7',
          borderRadius: '5px'
        }}
      >
        <p style={{ fontWeight: 'bold' }}>routeError：</p>
        <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{routeError?.stack}</pre>
        <p>{routeError?.message}</p>
      </div>
      <button
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          color: '#fff',
          backgroundColor: '#ff6347',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
        onClick={() => location.reload()}
      >
        重试
      </button>
      <button
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          color: '#fff',
          backgroundColor: 'skyblue',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginLeft: '10px'
        }}
        onClick={() => (location.href = '/')}
      >
        回到首页
      </button>
    </div>
  );
};

export default ErrorBoundary;