import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router';

/**
 * 路由切换时页面置顶
 * （因为react不同于vue，没有方便的scrollBehavior: () => ({ left: 0, top: 0 })的路由配置项，所以封装此组件）
 * （将AutoScrollToTop包裹整个App或整个路由即可）
 */
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
