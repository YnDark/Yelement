---
title: Dropdown | Yelement
description: Dropdown 组件的文档
---

# Dropdown 下拉显示框
用于消息气泡提示
传入选项的模板，自定义嵌入。

## 基础用法
使用 `menu-options` 来定义下拉显示框的模板。
使用 `transition` 设置显示动效

<demo vue="../demo/Dropdown/Basic.vue" title="基础用法" description="Dropdown 组件的基础用法"></demo>

### Dropdown Attributes

| Name           | Description  | Type           | Default |
| -------------- | ------------ | -------------- | ------- |
| menuOptions    | 内容选项     | `MenuOption[]` | —       |
| hideAfterClick | 是否点击消失 | `boolean`      | false   |

### MenuOption Attributes

| Name     | Description      | Type                   | Default |
| -------- | ---------------- | ---------------------- | ------- |
| label    | 内容选项         | `'string' \| 'VNode'`  | —       |
| key      | 选项标识符       | `'string' \| 'number'` | —       |
| divided  | 选项是否有分隔线 | `boolean`              | false   |
| disabled | 是否点击消失     | `boolean`              | false   |

### MenuOption Events
| Name | Description | Type       |
| ---- | ----------- | ---------- |
| show | 显示        | `()=>void` |
| hide | 隐藏        | `()=>void` |
