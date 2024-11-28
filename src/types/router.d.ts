import { RouteObject as ReactRouteObject } from 'react-router';

export type RouteObject = {
  meta?: {
    title: string; // 页面标题
  };
} & ReactRouteObject;
