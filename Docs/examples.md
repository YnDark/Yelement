# 介绍
Yelement是基于Vue3、Typescript、Vite构建的组件库，内含Alert、Button、Collapse、Dropdown、Form、Input、Message、Select、Switch、Tooltip等多种高性能组件。

- Form + Input + Select 组合支持嵌套表单（如动态增减表单项）、内置异步校验（如检查两次密码是否重复）、通过 FormContext 统一管理校验状态，避免逐项传递 props。

- Message、Alert 组件支持：平滑动画、队列管理（多个消息按顺序展示，避免重叠）

- Select实现虚拟滚动与懒加载

- Collapse 和 Tooltip 组件支持：通过默认插槽插入内容（如 Tooltip 的触发区域）、通过 renderContent 函数自定义渲染逻辑（如 Collapse 标题区域添加图标）

- 通过Vitepress每个组件编写 demo.md 和类型注释，自动生成交互式文档。使用vitest进行单元测试组件覆盖率85%+

- 二次封装Font Awesome图标库为Icon组件，拓展了其属性

- 通过postcss统一项目样式，css样式工程化
