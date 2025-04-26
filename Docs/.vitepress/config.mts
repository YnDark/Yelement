import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros'
import { vitepressDemoPlugin } from 'vitepress-demo-plugin';
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  markdown: {
    config(md) {
      md.use(vitepressDemoPlugin)
    },
  },
  vite: {
    plugins: [
      VueMacros.vite({
        setupComponent: false,
        setupSFC: false,
        plugins: {
          vueJsx: vueJsx(),
        },
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url))
      }
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Test', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Test here', link: '/api-examples' }
        ]
      },
      {
        text: 'Basic',
        items: [
          {text: 'Button', link: '/components/button' },
          {text: 'Input', link: '/components/Input' },
          {text: 'Switch', link: '/components/Switch' }
        ]
      },
      {
        text: 'Complex',
        items: [
          {text: 'Select', link: '/components/Select' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
