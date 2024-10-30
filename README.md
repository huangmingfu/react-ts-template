# React-Ts-Template

> 一套基于`react18、ts、vite5`的项目模板,帮助快速搭建`react项目`。集成了一些`项目规范`，封装了`axios`、`router路由懒加载`等，配置了`环境变量、scss样式全局变量`等，集成了`import 顺序自动美化排序插件`。

## 技术栈（以下都是最新版2024-10-29）

- 1.react相关库（react18、react-dom、react-router-dom）
- 2.scss 预编译（已使用最新版，@import 弃用，改用 @use）
- 3.ahooks 类似vueuse
- 4.zustand 状态管理（已对比`redux、dva、react-toolkit、mobx，以及react的useContext结合useReducer等的状态管理方式`）
- 5.immer 弥补了 Javascript 没有不可变数据结构的问题、更简易方便安全的处理对象。
- 6.use-immer 更方便使用immer
- 7.lodash-es 工具库（更现代api实现的话可以采用es-toolkit）
- 8.axios 请求库
- 9.classnames 方便管理动态类名
- 其他推荐：alova.js 下一代请求工具、swr 方便请求管理

## 项目规范

- 1.全面 ESM 规范
- 2.包管理器：已强制使用 `pnpm`
- 3.样式：采用 BEM 类名规范
- 4.文件夹+文件名：采用 kebab-case 形式（这种最可靠，尤其是在版本控制共享代码时，不同操作系统对大小写的敏感性不同）
- 其他：`eslint、prettier、stylelint、commitlint、husky、lint-staged、editorconfig`
- （eslint已使用最新版：.eslintignore弃用，改用 ignores 配置项）

## 备注

> package.json中的命令：lint:lint-staged 相当于 lint:all
