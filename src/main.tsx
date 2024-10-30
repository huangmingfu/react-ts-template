import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// 重置样式
import '@/styles/css/reset.css';
// 公共样式
import '@/styles/scss/global.scss';

import App from './app.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
