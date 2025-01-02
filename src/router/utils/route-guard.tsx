/**
 * 第二种实现路由守卫的方式（参考）：使用高阶组件（HOC），监听pathname，在useEffect中作路由守卫。
 * 不确定的影响：
 * 这样实现的话可能会出现页面内容加载完后以及触发接口调用后才跳出页面的情况，闪白屏。
 *
 * React-Ts-Template 默认使用的是第一种实现方式（loader），如果更喜欢下面这种，可以根据情况修改；
 * 如果使用默认的loader实现，【可以将此文件删除】。
 *
 * 其他拦截组件封装方式参考：
 * https://segmentfault.com/a/1190000044439881
 */
import { FC, ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

export const RouteGuard: FC<{ children: ReactNode }> = (props) => {
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const token = localStorage.getItem('token') || '';

  useEffect(() => {
    if (!token) {
      // message.error("token 过期，请重新登录!");
      navigate('/login');
    }
    // 已经登录的状态
    if (token) {
      if (location.pathname == '/' || location.pathname == '/login') {
        navigate('/home');
      } else {
        // 如果是其他路由就跳到其他的路由
        navigate(location.pathname);
      }
    }
  }, [token, pathname, navigate]);

  return <>{props.children}</>;
};
