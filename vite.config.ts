import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

// 배포 타깃 결정
//   - NITRO_PRESET 이 있으면 그대로 사용 (예: node-server 로컬 확인용)
//   - Vercel 빌드 환경이면 vercel
//   - 그 외 기본값은 Cloudflare Workers
const preset =
  process.env.NITRO_PRESET ??
  (process.env.VERCEL ? 'vercel' : 'cloudflare_module')

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    nitro({
      preset,
      rollupConfig: { external: [/^@sentry\//] },
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
})

export default config
