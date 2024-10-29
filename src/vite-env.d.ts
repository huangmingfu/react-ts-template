/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_NODE_ENV: string
  readonly VITE_APP_PORT: string
  readonly VITE_OUT_DIR: string
  readonly VITE_APP_BASE_API: string
  readonly VITE_APP_SERVICE_API: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
