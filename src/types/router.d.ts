import { RouteObject as ReactRouteObject } from 'react-router-dom';

export type RouteObject = {
  meta?: {
    title: string; // 页面标题
  };
} & ReactRouteObject;
