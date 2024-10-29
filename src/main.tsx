import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.tsx';

// 重置样式
import '@/styles/css/reset.css';
// 公共样式
import '@/styles/scss/global.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
