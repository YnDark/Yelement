import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros'
import { vitepressDemoPlugin } from 'vitepress-demo-plugin';
export default defineConfig({
  title: "Yelement",
  description: "Yelement组件库",
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
      { text: '首页', link: '/' },
      { text: '文档', link: '/examples' },
      { text: '安装', link: '/install' },
      { text: '开始', link: '/start' }
    ],
    search: {
      provider: "local",
    },
    //404页面的配置
    notFound: {
      title: "页面未找到",
      quote: "哎呀，您好像迷失在网络的小胡同里啦，别着急，赶紧回头是岸！",
      linkText: "返回首页",
    },
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '介绍', link: '/examples' },
          { text: '安装', link: '/install' },
          { text: '开始', link: '/start' }
        ]
      },
      {
        text: '基础组件',
        items: [
          {text: '按钮（Button）', link: '/components/button' },
          {text: '输入框（Input）', link: '/components/input' },
          {text: '开关（Switch）', link: '/components/switch' },
          {text: '消息（Message）', link: '/components/message' },
          {text: '下拉显示框（Tooltip）', link: '/components/tooltip' },
        ]
      },
      {
        text: '复合组件',
        items: [
          {text: '下拉显示框（Dropdown）', link: '/components/dropdown' },
          {text: '选择框（Select）', link: '/components/select' },
          {text: '表单（Form）', link: '/components/form' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YnDark/Yelement.git' }
    ]
  }
})
