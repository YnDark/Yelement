# 项目介绍
本项目旨在通过开发依赖vue的组件库，预封装可复用的原子化组件（如按钮、表单控件）和复合组件（如数据表格、模态框），开发者无需重复造轮子，可将核心精力聚焦于业务逻辑实现。
组件库通过模块化设计和标准化接口，实现了代码质量的三重保障：严格的单元测试体系确保功能稳定性，类型系统(TypeScript)和样式隔离技术规避潜在错误，版本控制机制则保障了迭代过程的可控性。
基于Vue3、Typescript、Vite构建的组件库，内含Alert、Button、Collapse、Dropdown、Form、Input、Message、Select、Switch、Tooltip等多种高性能组件。

## 项目特点

- Form + Input + Select 组合支持嵌套表单（如动态增减表单项）、内置异步校验（如检查两次密码是否重复）、通过 FormContext 统一管理校验状态，避免逐项传递 props。

- Message、Alert 组件支持：平滑动画、队列管理（多个消息按顺序展示，避免重叠）

- Select实现虚拟滚动与懒加载

- Collapse 和 Tooltip 组件支持：通过默认插槽插入内容（如 Tooltip 的触发区域）、通过 renderContent 函数自定义渲染逻辑（如 Collapse 标题区域添加图标）

- 通过Vitepress每个组件编写 demo.md 和类型注释，自动生成交互式文档。使用vitest进行单元测试组件覆盖率85%+

- 二次封装Font Awesome图标库为Icon组件，拓展了其属性

- 通过postcss统一项目样式，css样式工程化

## 项目依赖
Vue3、TypeScript、Vite

## 项目文档
http://yelement.yndarksy.fun/

## 项目使用教程

### 使用npm安装
```
npm i yndarksy-element
```

### 在main.js/main.ts文件中设置
```ts
import { createApp } from 'vue'
import App from './App.vue'
import Yelement from 'yndarksy-element'
import 'yndarksy-element/dist/index.css'

createApp(App).use(Yelement).mount('#app')
```

### 直接使用
```HTML
<template>
  <YButton type="danger">测试</YButton>
</template>
```
## 项目文件结构 

```plain
├── .vscode/                # VSCode编辑器配置
├── node_modules/           # npm依赖库
├── public/                 # 静态资源目录
├── src/                    # 核心源码目录
│   ├── assets/             # 静态资源（如图片、字体）
│   ├── components/         # 自定义自建实现（vue组件）
│   ├── styles/             # 全局样式定义
│   ├── App.vue             # 根Vue组件
│   └── main.ts             # 应用入口文件
│
├── .editorconfig           # 编辑器编码风格配置
├── .eslintrc.cjs           # ESLint配置（CommonJS格式）
├── .gitattributes          # Git属性配置
├── .gitignore              # Git忽略规则
├── .prettierrc.json        # Prettier代码格式化配置
├── env.d.ts                # TypeScript环境类型声明
├── index.html              # 应用入口HTML
├── package.json            # npm项目配置
├── package-lock.json       # 依赖版本锁文件
├── postcss.config.cjs      # PostCSS配置
├── tsconfig.json           # TypeScript全局配置
├── tsconfig.app.json       # 应用专属TypeScript配置
├── tsconfig.node.json      # Node相关TypeScript配置
└── vite.config.ts          # Vite构建工具配置
```

