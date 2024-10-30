import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AutoScrollToTop = ({ children }: { children: any }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    const notScrollTop = ['']; // 排除不需要置顶的页面，示例'/home'
    if (!notScrollTop.includes(location.pathname)) {
      if (document?.documentElement || document?.body) {
        document.documentElement.scrollTop = document.body.scrollTop = 0; // 切换路由时页面置顶
      }
    }
  }, [location.pathname]);
  return children;
};

export default AutoScrollToTop;
