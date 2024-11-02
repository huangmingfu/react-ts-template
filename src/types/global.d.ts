declare module '*.css' {}
declare module '*.scss' {}
declare module '*.json' {}
declare module '*.png' {}
declare module '*.jpg' {}
declare module '*.svg' {}
declare module '*.js' {}

declare interface IResponse<T = unknown> {
  code: number;
  message: string;
  data: T;
}

declare type Fn = () => void;
