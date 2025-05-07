---
title: Tooltip | Yelement
description: Tooltip 组件的文档
---

# Tooltip 下拉显示框
用于消息气泡提示
通过类HTML写法嵌入自定义模板

## 基础用法
使用 `placement` 来定义下拉显示框显示位置。
使用 `transition` 设置显示动效
使用 `open-delay` `close-delay` 来设置开启关闭延迟
使用 `content` 来手动设置默认文本
使用 `trigger` 设置触发方式
使用 `popper-options` 设置popper.js
使用 `ref` 获取下拉显示框实例

<demo vue="../demo/Tooltip/Basic.vue" title="基础用法" description="Tooltip 组件的基础用法"></demo>

### Dropdown Attributes

| Name          | Description  | Type                 | Default |
| ------------- | ------------ | -------------------- | ------- |
| content       | 内容选项     | `MenuOption[]`       | —       |
| trigger       | 是否点击消失 | `'hover' \| 'click'` | false   |
| placement     | 内容选项     | `Placement`          | bottom       |
| manual        | 是否手动设置 | `boolean`            | false   |
| popperOptions | popper设置   | `Partial<Options>`   | —       |
| transition    | 过渡动画设置 | `string`             | —       |
| openDelay     | 打开延迟     | `number`             | —       |
| closeDelay    | 关闭延迟     | `number`             | —       |

### Tooltip Events
| Name | Description | Type       |
| ---- | ----------- | ---------- |
| visible-change | 可见性切换        | `(boolean)=>void` |
| click-outside | 点击外部        | `(boolean)=>void` |

### Tooltip Instance
| Name | Description | Type       |
| ---- | ----------- | ---------- |
| show | 显示        | `()=>void` |
| hide | 隐藏        | `()=>void` |
