GitHub Repository: [React-Ts-Template](https://github.com/huangmingfu/react-ts-template)

<h1 align="center">React-Ts-Template</h1>

<p align="center">
  Modern frontend project template built with React 19, TypeScript, and Vite 7
</p>

<p align="center">
  <a href="https://github.com/huangmingfu/react-ts-template/stargazers">
    <img src="https://img.shields.io/github/stars/huangmingfu/react-ts-template" alt="GitHub stars">
  </a>
  <a href="https://github.com/huangmingfu/react-ts-template/issues">
    <img src="https://img.shields.io/github/issues/huangmingfu/react-ts-template" alt="GitHub issues">
  </a>
  <a href="https://github.com/huangmingfu/react-ts-template/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/huangmingfu/react-ts-template" alt="GitHub">
  </a>
  <a href="https://github.com/huangmingfu/react-ts-template/network/members">
    <img src="https://img.shields.io/github/forks/huangmingfu/react-ts-template" alt="GitHub forks">
  </a>
</p>

> With `create-react-app` scaffold no longer being maintained, developers need a modern, efficient, and out-of-the-box React project template. **React-Ts-Template** was born for this! This is a project template built on the latest **React 19, TypeScript, and Vite 7**, designed to help you rapidly start your project and save considerable configuration time.

## 🌟 Why Choose React-Ts-Template?

- ⚡ **Lightning Fast HMR** - Built on Vite 7 for extremely fast cold start and hot module replacement
- 🚀 **Cutting-edge Tech Stack** - React 19, TypeScript, Zustand, React-Router v7 and more latest technologies
- 📦 **Out-of-the-box** - Integrated routing, state management, request encapsulation, code standards and complete solutions
- 🛡️ **Type Safety** - Complete TypeScript type definitions for code quality assurance
- 🎨 **Modern CSS** - SCSS preprocessing + BEM naming convention for standardized styling
- 🔧 **Engineering Standards** - ESLint, Prettier, Stylelint, Commitlint and other code quality assurance tools

## 🚀 Quick Start

```bash
# Clone the project
git clone https://github.com/huangmingfu/react-ts-template.git

# Navigate to project directory
cd react-ts-template

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build:pro
```

## 🧩 Core Features

- **Route Lazy Loading**: Implemented route lazy loading to improve page switching performance and reduce initial loading time. (See `router`)
- **Route Guards**: Encapsulated flexible route guard management to ensure user access control and enhance application security. (See `router`)
- **Global State Management**: Provides Zustand global state management example code, simplifying cross-component state sharing and improving development efficiency. (See [store](./src/store))
- **Axios Request Encapsulation**: Encapsulated Axios to uniformly handle HTTP requests and responses, simplifying interaction with backend interfaces. (See [services](./src/services))
- **Utility Functions & Hooks**: Provides some convenient and practical utility functions and hooks. (See [utils](./src/utils), [hooks](./src/hooks))
- **react-dev-inspector Integration**: Click on page elements to open corresponding code in IDE, facilitating code debugging and improving development efficiency. (See [vite.config.ts](./vite.config.ts))
- **Automatic Import Order Beautification**: Integrated prettier-plugin-sort-imports plugin to automatically beautify import order, enhancing code readability and maintainability.
- **Others**: Provides commands for convenient environment-based running and building; configured code splitting strategy; local reverse proxy for CORS; and detailed `nanny-level comments`, etc.

## 🛠 Technology Stack

| Category | Technology | Description |
| --- | --- | --- |
| **Core Framework** | React 19 | Latest React version for higher performance and smoother user experience |
| **Routing** | React-Router v7 | Supports route lazy loading, optimizes page transition performance |
| **State Management** | Zustand | Lightweight state management library, simple and easy to use |
| **Styling** | SCSS + BEM | Modular style management with clear structure (Optional: Use CSS modules xxx.module.scss) |
| **HTTP Client** | Axios | Unified handling of HTTP requests and responses |
| **Utility Libraries** | ahooks + es-toolkit | Rich React Hooks and JS utility functions |
| **Build Tool** | Vite 7 | Lightning-fast build tool that enhances development experience |
| **Type Checking** | TypeScript | Powerful type system for code quality assurance |
| **Code Standards** | ESLint + Prettier + Stylelint | Unified code style for improved code quality |

## 📁 Project Structure

```
├── .vscode              # VSCode configuration
├── .husky               # Git Hooks
├── .github              # GitHub configuration
├── public               # Static assets
├── src                  # Source code
│   ├── assets           # Static resources
│   ├── components       # Reusable components
│   ├── hooks            # Custom Hooks
│   ├── views            # Page components
│   ├── router           # Routing configuration
│   ├── services         # API encapsulation
│   ├── store            # State management
│   ├── styles           # Style files
│   ├── types            # Type definitions
│   ├── utils            # Utility functions
│   ├── app.tsx          # Root component
│   └── main.tsx         # Entry file
├── .env                 # Environment variables
└── ...                  # Configuration files
```

## 🎯 Key Highlights

### 🚀 High Performance Building

- Built on Vite 7 with millisecond-level cold start time
- Supports code splitting and dynamic imports to optimize first screen loading speed

### 🛡️ Complete Type System

- Complete TypeScript type definitions
- Strict tsconfig configuration with all strict checking options enabled
- Unified type management for easy maintenance and collaboration

### 🎨 Standardized Code Style

- Integrated ESLint, Prettier, Stylelint - the three major code standard tools
- Unified commit message standards (Commitlint + Husky)
- Automatic code formatting to ensure team code style consistency

### 🔧 Powerful Development Toolchain

- react-dev-inspector integration - click page elements to jump directly to source code
- Automatic import order sorting for improved code readability
- Multi-environment configuration (dev/test/pro) to meet different deployment requirements

## 📦 About Route Caching (keep-alive)

> React officially hasn't implemented functionality similar to Vue's \<keep-alive\>. React team rejected adding this feature based on two considerations, which you can search and read about. To achieve state preservation, the official team recommends these two manual state preservation methods:

- Lift the state of components needing state preservation to their parent components.
- Use CSS visible property to control the rendering of components needing state preservation, instead of using if/else, to prevent React from unmounting them.

> However, there are some libraries that implement this functionality, such as react-router-cache-route, react-activation, keepalive-for-react, etc. If your project needs to handle a small amount of state caching data, it's better to follow React's official recommendations and solve state caching issues manually.

## ⚠️ Notes

> 1. Currently, some UI libraries or third-party libraries do not yet support React 19. Please verify and choose appropriate versions for installation and usage.
> 2. This project does not use any features specific to version 19. If needed, you can directly downgrade to version 18 using the following command.

```bash
pnpm install react@18.3.1 react-dom@18.3.1
```

## 🤝 Contributing

Any contributions are welcome! If you find this project helpful, please give it a Star ⭐ for support!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

<h3 align="center">If you like this project, don't be stingy with your Star ⭐</h3>

<p align="center">
  <a href="https://github.com/huangmingfu/react-ts-Template">
    <img src="https://img.shields.io/github/stars/huangmingfu/react-ts-template?style=social" alt="GitHub stars">
  </a>
</p>
