import { FC } from 'react';
import { useRouteError } from 'react-router';

import './index.scss';

const ErrorBoundary: FC = () => {
  const routeError = useRouteError() as any;
  console.error(routeError);
  // 可以在这里根据不同的业务逻辑处理错误或者上报给日志服务
  return (
    <div className="error-boundary">
      <h1 className="error-boundary__title">{routeError?.name || 'Error'}:</h1>
      <p className="error-boundary__message">{routeError?.message || routeError?.error?.message}</p>
      <div className="error-boundary__details">
        <p className="error-boundary__details-title">Render Fail:</p>
        <pre className="error-boundary__stack">{routeError?.stack || routeError?.error?.stack}</pre>
      </div>
      <button
        type="button"
        className="error-boundary__btn error-boundary__btn--retry"
        onClick={() => location.reload()}
      >
        重试
      </button>
      <button
        type="button"
        className="error-boundary__btn error-boundary__btn--back"
        onClick={() => history.back()}
      >
        返回
      </button>
      <button
        type="button"
        className="error-boundary__btn error-boundary__btn--home"
        onClick={() => (location.href = '/')}
      >
        回到首页
      </button>
    </div>
  );
};

export default ErrorBoundary;
