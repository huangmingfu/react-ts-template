import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { ConfigEnv, UserConfig, defineConfig, loadEnv } from 'vite';

import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  // 获取`.env`环境配置文件
  const env = loadEnv(mode, process.cwd());
  return {
    base: env.VITE_NODE_ENV === 'development' ? './' : undefined, // 目前仅为github pages作的配置，可根据情况自行修改或删除
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(fileURLToPath(new URL('.', import.meta.url)), 'src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/scss/index.scss" as *;`, // 引入全局scss变量、样式工具函数等
          javascriptEnabled: true
        }
      }
    },
    // 反向代理解决跨域问题
    server: {
      // open: true,// 运行时自动打开浏览器
      host: '0.0.0.0', // 局域网别人也可访问
      port: Number(env.VITE_APP_PORT), //端口号
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_APP_SERVICE_API,
          changeOrigin: true,
          rewrite: (path: string) => path.replace(new RegExp('^' + env.VITE_APP_BASE_API), '')
        }
      }
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
            legalComments: 'none'
          },
    build: {
      target: 'esnext', // 'es2015'
      outDir: env.VITE_OUT_DIR || 'dist',
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        // 分包
        output: {
          chunkFileNames: 'js/[name]-[hash].js', // chunk包输出的文件夹名称
          entryFileNames: 'js/[name]-[hash].js', // 入口文件输出的文件夹名称
          assetFileNames: '[ext]/[name]-[hash].[ext]', // 静态文件输出的文件夹名称
          // 手动分包，将第三方库拆分到单独的chunk包中
          manualChunks: {
            'vendor-react': ['react', 'react-dom', 'react-router-dom'],
            'vendor-utils': [
              'axios',
              'dayjs',
              'immer',
              'zustand',
              'ahooks',
              'classnames',
              'lodash-es'
            ]
            // 'vendor-ui':['antd']
          }
        }
      }
    },
    // 预构建的依赖项，优化开发（该优化器仅在开发环境中使用）
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-router-dom',
        'zustand',
        'classnames',
        'lodash-es',
        'axios',
        'dayjs',
        'immer',
        'ahooks'
      ]
    }
  };
});
