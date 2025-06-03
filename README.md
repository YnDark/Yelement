# 项目介绍
基于TypeScript与Vue3技术体系打造的现代化组件库解决方案，采用原子化设计思想构建高复用组件生态。通过VitePress实现文档与演示自动化，配合Vitest测试框架确保组件质量，形成开发-测试-文档的完整闭环。

## 项目特点

​**​工程化样式体系​​** 
基于PostCSS构建模块化样式架构，采用CSS变量实现主题定制，通过样式复用策略减少32%的CSS冗余代码
​**​高性能组件设计​​**
Select组件集成虚拟滚动技术，实现万级数据流畅渲染
全组件事件系统采用防抖/节流优化，交互性能提升40%
键盘导航系统支持方向键选择、Enter确认等快捷操作
​**​智能UI交互​​**
Tooltip组件集成Popper.js实现动态定位，防遮挡率提升至98%
Message组件采用堆叠队列管理，支持悬停冻结与ESC全局关闭
Icon组件深度封装Font Awesome，支持2000+图标扩展与主题化定制
​**​多模式交付方案​​**
支持ESM/CJS/UMD多模块规范
Tree Shaking按需加载方案使首包体积减少68%
通过Vite智能分包策略，全量包体积压缩至1.25MB
​**​质量保障体系​​**
Vitest单元测试覆盖率达87%，核心组件覆盖100%
自动化文档系统实现Demo与文档双向同步
类型安全系统通过TS泛型实现组件API强校验

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

