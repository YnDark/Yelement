import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import eslint from 'vite-plugin-eslint'
import VueMacros from 'unplugin-vue-macros'
import { resolve } from 'node:path'
import dts from 'vite-plugin-dts'
import Components from 'unplugin-vue-components/vite';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueMacros.vite({
      plugins: {
        vue: vue(),
        vueJsx: vueJsx(),
      },
    }),
    eslint(),
    dts({
      tsconfigPath: './tsconfig.build.json'
    }),
    Components({
      resolvers: [
        // 自动引入组件
        (componentName) => {
          return { name: componentName, from: 'yndarksy-element' };
        },
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'Yelement',
      fileName: 'Yelement',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue','@fortawesome/free-solid-svg-icons','@fortawesome/fontawesome-svg-core','@fortawesome/vue-fontawesome'],
      output: {
        exports: 'named',
        //定义全局变量名称
        globals: {
          vue: 'Vue'
        },
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
