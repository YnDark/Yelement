import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros'
import { resolve } from 'node:path';
import dts from 'vite-plugin-dts'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueMacros.vite({
      plugins: {
        vue: vue(),
        vueJsx: vueJsx(),
      },
    }),
    dts({
      tsconfigPath: './tsconfig.build.json',
      outDir: 'dist/types'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Yelement',
      fileName: 'Yelement',
      formats: ['es']
    },
    outDir: 'dist/es',
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue',"async-validator","normalize.css","axios","@popperjs/core",'@fortawesome/free-solid-svg-icons','@fortawesome/fontawesome-svg-core','@fortawesome/vue-fontawesome'],
      output: {
        assetFileNames: (chunkInfo) => {
          if(chunkInfo.name === 'style.css'){
            return 'index.css'
          }
          return chunkInfo.name as string
        }
      },
    },
  },
})
