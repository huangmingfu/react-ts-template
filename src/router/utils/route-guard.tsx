import { FC, ReactNode } from 'react';
import { RouteObject, useLocation } from 'react-router-dom';

export const RouteGuard: FC<{ children: ReactNode; routes: RouteObject[] }> = (props) => {
  const { pathname } = useLocation();
  console.log(`pathname -->`, pathname);
  return <>{props.children}</>;
};
