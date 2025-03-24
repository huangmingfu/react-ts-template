import { FC } from 'react';
import { useRouteError } from 'react-router';

const ErrorBoundary: FC = () => {
  const routeError = useRouteError() as any;
  console.error(routeError);
  // 可以在这里根据不同的业务逻辑处理错误或者上报给日志服务
  return (
    <div
      style={{
        width: '80%',
        margin: '100px auto',
        padding: '20px',
        backgroundColor: '#fff0f0',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h1 style={{ color: '#ff6347', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
        {routeError?.name || 'Error'}:
      </h1>
      <p style={{ fontWeight: 'bold' }}>{routeError?.message || routeError?.error?.message}</p>
      <div
        style={{
          margin: '10px 0',
          padding: '10px',
          backgroundColor: '#f7f7f7',
          borderRadius: '5px',
        }}
      >
        <p style={{ fontWeight: 'bold', marginBottom: '10px', color: '#ff6347' }}>Render Fail:</p>
        <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
          {routeError?.stack || routeError?.error?.stack}
        </pre>
      </div>
      <button
        type="button"
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          color: '#fff',
          backgroundColor: '#ff6347',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={() => location.reload()}
      >
        重试
      </button>
      <button
        type="button"
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          color: '#fff',
          backgroundColor: '#4169E1',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginLeft: '10px',
        }}
        onClick={() => history.back()}
      >
        返回
      </button>
      <button
        type="button"
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          color: '#fff',
          backgroundColor: 'skyblue',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginLeft: '10px',
        }}
        onClick={() => (location.href = '/')}
      >
        回到首页
      </button>
    </div>
  );
};

export default ErrorBoundary;
