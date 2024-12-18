GitHub Repository: [React-Ts-Template](https://github.com/huangmingfu/react-ts-template)

In modern frontend development, we often need to quickly set up a React project. With the `create-react-app` scaffold no longer being maintained, **React-Ts-Template** was born to address this need! This is a project template built on the latest **React 19, TypeScript, and Vite 6**, designed to help you rapidly start your project and save considerable configuration time. The template integrates various development standards and popular plugins, ready to use out of the box, allowing you to focus on implementing business logic!

## Features

- **Route Lazy Loading**: Implemented route lazy loading to improve page switching performance and reduce initial loading time. (See `router`)
- **Route Guards**: Encapsulated flexible route guard management to ensure user access control and enhance application security. (See `router`)
- **Global State Management**: Provides Zustand global state management example code, simplifying cross-component state sharing and improving development efficiency. (See `store`)
- **Axios Request Encapsulation**: Encapsulated Axios to uniformly handle HTTP requests and responses, simplifying interaction with backend interfaces. (See `services`)
- **Utility Functions & Hooks**: Provides some convenient and practical utility functions and hooks. (See `utils`, `hooks`)
- **react-dev-inspector Integration**: Click on page elements to open corresponding code in IDE, facilitating code debugging and improving development efficiency. (See `vite.config.ts`)
- **Automatic Import Order Beautification**: Integrated prettier-plugin-sort-imports plugin to automatically beautify import order, enhancing code readability and maintainability.
- **Others**: Provides commands for convenient environment-based running and building; configured code splitting strategy; local reverse proxy for CORS; and detailed `nanny-level comments`, etc.

## Technology Stack Overview

### 🛠 Technology Stack Selection

- **React 19 & React-DOM**: Using the latest version of React for high frontend performance and smoother user experience.
- **React-Router**：Latest v7 version, supports lazy loading of routes, optimizes page transition performance.
- **SCSS Preprocessing**: Fully adopts the new version of SCSS, using `@use` instead of `@import` for stronger modularity.
- **ahooks**: Provides rich React Hooks similar to VueUse, further simplifying logic code.
- **zustand**: Lightweight state management library. After comparing Redux, Dva, React-Toolkit, MobX, and `useContext` combined with `useReducer`, we chose the simpler Zustand.
- **Immer**: Simplifies immutable data structure operations, especially convenient for handling deeply nested objects.
- **es-toolkit**: A modern JavaScript utility library that provides a range of powerful functions for everyday use, with a smaller size and better performance (similar to lodash-es).
- **Axios**: Encapsulated HTTP request library for easier backend interface integration.
- **classnames**: Dynamic class name management tool, particularly suitable for conditional style rendering.
- **Dayjs**: Lightweight date processing library, providing APIs similar to Moment.js but with smaller size and better performance.

### 🔧 Other Recommended Tools

- **Alova.js**: New generation request tool, convenient for request data management.
- **SWR**: Another choice for data request caching and synchronization management.

## Project Standards and Configuration

To ensure code consistency and standardization in team collaboration, **React-Ts-Template** introduces a complete set of project standards:

- **Full ESM Standard Usage**: Adopts modular imports, aligning with modern JavaScript development trends.
- **Mandatory pnpm Package Manager**: Improves dependency installation speed, reduces disk space usage, and solves phantom dependency issues.
- **BEM Style Naming Convention**: Clear structure, reduces style conflicts, improves code maintainability (CSS Modules wasn't adopted for easier style penetration, but you can use xxx.module.scss if needed).
- **File and Folder Naming**: Uniformly uses `kebab-case`, which is most reliable, especially when sharing code through version control across different operating systems with varying case sensitivity.

### 💡 Efficient Code Standard Management

Besides code structure standardization, the project integrates various code quality inspection tools to ensure development experience and code quality:

- **ESLint**: Code style and error checking, upgraded to the latest version, deprecated `.eslintignore` in favor of `ignores` configuration.
- **Prettier**: Unified code formatting to avoid conflicts due to formatting issues in team collaboration.
- **Stylelint**: Style-specific lint tool ensuring SCSS code consistency.
- **Commitlint** + **Husky** + **Lint-Staged**: Works with Git Hooks to standardize code submissions and prevent low-quality code from entering the repository.
- **EditorConfig**: Unified editor configuration to reduce issues caused by editor differences.

## Project Structure

```tree
├── .vscode # VSCode editor configuration folder
│   └── settings.json # Specific VSCode editor settings
│   └── extensions.json # VSCode recommended plugins
├── .husky # Husky configuration folder for managing Git hooks
│   └── commit-msg # Commit message check hook configuration
│   └── pre-commit # Formatting hook configuration
├── .github # GitHub specific configuration and workflow folder
│   └── workflows # GitHub Actions workflow configuration
│       └── deploy.yml # Continuous integration configuration file
├── public # Static resource directory for assets not processed by Vite
├── src # Source code directory
│ ├── assets # Static assets like images, fonts, etc.
│ ├── components # Common components directory
│ │ ├── high-light # Code highlighting component
│ │ └── auto-scroll-to-top # Auto scroll to top component
│ │ └── ...
│ ├── hooks # Custom React Hooks
│ │ └── use-design # Design-related custom Hook
│ │ └── ...
│ ├── layouts # Page layout components
│ ├── views # Page components
│ ├── router # Route configuration
│ │ └── utils # Route-related utility functions
│ │ └── ...
│ ├── services # API service encapsulation
│ ├── store # State management
│ │ └── modules # State management modules
│ │ │ └── use-loading-store.ts # Counter loading state management
│ │ └── ...
│ ├── styles # Styles
│ ├── types # TypeScript type definitions
│ └── utils # Utility functions
├── .env # Environment configuration file
├── .editorconfig # Editor configuration file for unified code style across editors
├── eslint.config.js # ESLint configuration file for code style and error checking
├── .prettierrc.js # Prettier configuration file for code formatting
├── stylelint.config.js # Stylelint configuration file for style file standards
├── .commitlintrc.js # Commitlint configuration file for Git commit message style checking
├── lint-staged.config.js # Lint-Staged configuration file for running Linters before Git commits
├── package.json # Project dependency configuration file
├── tsconfig.json # TypeScript configuration file
└── vite.config.ts # Vite configuration file for build and service options
```

## Others

### 📦 About Route Caching (keep-alive)

> React officially hasn't implemented functionality similar to Vue's \<keep-alive\>. React team rejected adding this feature based on two considerations, which you can search and read about. To achieve state preservation, the official team recommends these two manual state preservation methods:

- Lift the state of components needing state preservation to their parent components.
- Use CSS visible property to control the rendering of components needing state preservation, instead of using if/else, to prevent React from unmounting them.

> However, there are some libraries that implement this functionality, such as react-router-cache-route, react-activation, keepalive-for-react, etc. If your project needs to handle a small amount of state caching data, it's better to follow React's official recommendations and solve state caching issues manually.

---

## Summary

The **React-Ts-Template** project template aims to reduce developers' tedious configuration steps during project initialization through preset best practice configurations, allowing you to get started with project development faster. Meanwhile, it's equipped with mature development toolchains and powerful plugin support to ensure team development consistency and code quality. If you're looking for an efficient React project template, why not try **React-Ts-Template**!

**👉 Star the project now and start your React project journey!**

> [React-Ts-Template](https://github.com/huangmingfu/react-ts-template)

## Note
> 1.Currently, some UI libraries do not support React 19. Please be cautious when installing and using them.
> 2.This project does not use any features specific to version 19. If needed, you can directly downgrade to version 18 using the following command.
```bash
pnpm install react@18.3.1 react-dom@18.3.1
```