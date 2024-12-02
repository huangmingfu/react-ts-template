import { createRoot } from 'react-dom/client';

// 公共样式
import '@/styles/scss/global.scss';

import App from './app.tsx';

function setupApp() {
  createRoot(document.getElementById('root')!).render(
    // <StrictMode>
    <App />
    // </StrictMode>
  );
}

setupApp();
