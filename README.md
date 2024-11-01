GitHub 项目地址：[React-Ts-Template](https://github.com/huangmingfu/react-ts-template)

在现代前端开发中，我们常常需要快速搭建一个 React 项目。而 `create-react-app` 脚手架也已经很久不维护了，为了解决这一需求，**React-Ts-Template** 应运而生！这是一个基于最新的 **React 18、TypeScript 和 Vite 5** 打造的项目模板，旨在帮助你极速启动项目，节省大量重复的配置时间。同时，模板集成了各种开发规范和流行插件，开箱即用，让你专注于业务逻辑的实现！

## 技术栈一览

> （截至2024-11-01前均为最新版本）

### 🛠 核心技术栈

- **React 18 & React-DOM**：使用最新版 React 实现前端高性能和更流畅的用户体验。
- **React-Router-DOM**：支持路由懒加载，优化页面切换性能。
- **SCSS 预编译**：全面采用新版 SCSS，使用 `@use` 替代 `@import`，模块化更强。
- **ahooks**：提供丰富的 React Hooks 类似 VueUse，进一步简化逻辑代码。
- **zustand**：轻量级的状态管理库。通过对比 Redux、Dva、React-Toolkit、MobX，以及 `useContext` 结合 `useReducer` 的管理方式，最终选择了更简单的 Zustand。
- **Immer**：简化不可变数据结构操作，尤其在多层次嵌套对象中处理更方便。
- **Lodash-es**：提供常用工具函数。若更偏向现代 ES 实现，也可以考虑 `es-toolkit`。
- **Axios**：封装 HTTP 请求库，更方便与后端接口对接。
- **classnames**：动态类名管理工具，特别适合条件渲染样式。
- **Dayjs**：轻量级的日期处理库，提供类似 Moment.js 的 API，但体积更小，性能更好。

### 🔧 其他推荐工具

- **Alova.js**：新一代请求工具，便于请求数据管理。
- **SWR**：数据请求缓存和同步管理的另一选择。

## 项目规范与配置

为确保团队合作时的代码一致性和规范性，**React-Ts-Template** 引入了一整套项目规范：

- **全面使用 ESM 规范**：采用模块化导入，符合现代 JavaScript 的发展趋势。
- **包管理器强制使用 pnpm**：提高依赖安装速度，减少磁盘空间占用，解决幽灵依赖问题。
- **样式 BEM 命名规范**：结构清晰，减少样式冲突，提升代码可维护性（为了方便样式穿透，并没有采用CSS Modules，需要的也可以自行使用）。
- **文件与文件夹命名**：统一使用 `kebab-case`，这种最可靠，尤其是在版本控制共享代码时，不同操作系统对大小写的敏感性不同。

### 💡 高效的代码规范管理

除了代码结构的规范化，项目还集成了多种代码质量检查工具，确保开发体验与代码质量：

- **ESLint**：代码风格和错误检查，已升级到最新版，弃用 `.eslintignore`，改用 `ignores` 配置项。
- **Prettier**：统一代码格式，避免团队协作中因格式问题产生的冲突。
- **Stylelint**：针对样式的 Lint 工具，确保 SCSS 代码的一致性。
- **Commitlint** + **Husky** + **Lint-Staged**：配合 Git Hooks 实现代码提交规范化，避免低质量代码入库。
- **EditorConfig**：编辑器的统一配置，减少因编辑器差异产生的问题。

### 📝 package.json 配置

其中，**`lint:lint-staged` 相当于 `lint:all`**，实现对全部代码的质量检查和格式化。

## 其他

### 📦 关于路由缓存 keep-alive

> React 官方暂时没有实现 vue \<keep-alive\> 类似的功能。React 官方出于两点考虑拒绝添加这个功能，具体可以自行搜索查阅。为了达到状态保存的效果，官方推荐以下两种手动保存状态的方式：

- 将需要保存状态组件的 state 提升至父组件中保存。
- 使用 CSS visible 属性来控制需要保存状态组件的渲染，而不是使用 if/else，以避免 React 将其卸载。

> 不过也有一些相关库实现了这个功能，如：react-router-cache-route、react-activation、keepalive-for-react等等，如果项目中需要状态缓存处理的数据量较小，那最好还是按照 React 官方的建议，手动解决状态缓存问题。

---

## 总结

**React-Ts-Template** 项目模板的目标是通过预设的最佳实践配置，减少开发者在项目初始化时的琐碎配置步骤，让你可以更快上手项目开发。同时，配备了成熟的开发工具链和强大的插件支持，以确保团队开发的一致性和代码的高质量。如果你正在寻找一款高效的 React 项目模板，不妨试试 **React-Ts-Template**！

**👉 赶快 Star 项目，开启你的 React 项目之旅！**

> [React-Ts-Template](https://github.com/huangmingfu/react-ts-template)
