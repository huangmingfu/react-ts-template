import { inspectorServer } from '@react-dev-inspector/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'node:path';
import process from 'node:process';
import { ConfigEnv, UserConfig, defineConfig, loadEnv } from 'vite';
import checker from 'vite-plugin-checker';

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  // 获取`.env`环境配置文件
  const env = loadEnv(mode, process.cwd());
  return {
    base: env.VITE_NODE_ENV === 'development' ? './' : undefined, // 目前仅为github pages作的配置，可根据情况自行修改或删除
    plugins: [
      react(),
      /**
       * 点击页面元素，IDE直接打开对应代码插件（本项目配置的快捷键是：ctrl+alt+q，详见main.tsx）
       * @see https://react-dev-inspector.zthxxx.me/docs/inspector-component#setup
       */
      inspectorServer(),
      // 在浏览器中直接看到上报的类型错误（更严格的类型校验）
      checker({
        typescript: true,
        eslint: {
          useFlatConfig: true,
          lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
        },
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(import.meta.dirname, 'src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData的内容会在每个scss文件的开头自动注入
          additionalData: `@use "@/styles/scss/index.scss" as *;`, // 引入全局scss变量、样式工具函数等
        },
      },
    },
    // 反向代理解决跨域问题
    server: {
      // open: true,// 运行时自动打开浏览器
      host: '0.0.0.0', // 局域网别人也可访问
      port: Number(env.VITE_APP_PORT), //端口号
      proxy: {
        [env.VITE_API_BASE_URL]: {
          target: env.VITE_SERVER_URL,
          changeOrigin: true,
          rewrite: (path: string) => path.replace(new RegExp('^' + env.VITE_API_BASE_URL), ''),
        },
      },
    },
    esbuild:
      env.VITE_NODE_ENV === 'development'
        ? undefined
        : {
            /** 打包时移除 console.log */
            pure: ['console.log'],
            /** 打包时移除 debugger */
            drop: ['debugger'],
            /** 打包时移除所有注释 */
            legalComments: 'none',
          },
    build: {
      target: 'esnext', // 最低 es2015/es6
      outDir: env.VITE_OUT_DIR || 'dist',
      chunkSizeWarningLimit: 2000, // 单个 chunk 文件的大小超过 2000kB 时发出警告（默认：超过500kb警告）
      rollupOptions: {
        // 分包
        output: {
          chunkFileNames: 'js/[name]-[hash].js', // chunk包输出的文件夹名称
          entryFileNames: 'js/[name]-[hash].js', // 入口文件输出的文件夹名称
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]', // 静态文件输出的文件夹名称
          // 手动分包，将第三方库拆分到单独的chunk包中（注意这些包名必须存在，否则打包会报错）
          manualChunks: {
            'vendor-react': ['react', 'react-dom', 'react-router'],
            'vendor-utils': [
              'axios',
              'dayjs',
              'immer',
              'zustand',
              'ahooks',
              'classnames',
              'es-toolkit',
            ],
            // 'vendor-ui':['antd']
          },
        },
      },
    },
    // 预构建的依赖项，优化开发（该优化器仅在开发环境中使用）
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-router',
        'zustand',
        'classnames',
        'es-toolkit',
        'axios',
        'dayjs',
        'immer',
        'ahooks',
      ],
    },
  };
});
