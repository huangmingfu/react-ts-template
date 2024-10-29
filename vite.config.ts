import { ConfigEnv, defineConfig, loadEnv, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  // 获取`.env`环境配置文件
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(fileURLToPath(new URL(".", import.meta.url)), 'src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: `@use "@/styles/scss/var.scss" as *;`, // 引入全局scss变量
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
      env.VITE_NODE_ENV === 'develop'
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
      target: 'esnext',// target: 'es2015',
      outDir: env.VITE_OUT_DIR || 'dist',
      minify: 'esbuild',
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
          // manualChunks: {
          //   vendor: ['antd']
          // }
        }
      }
    }
  };
});
