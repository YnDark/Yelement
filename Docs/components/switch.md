---
title: Switch | Yelement
description: Switch 组件的文档
---

# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法

绑定 v-model 到一个 Boolean 类型的变量。 可以使用 **--yd-switch-on-color** 属性与 **--yd-switch-off-color** 属性来设置开关的背景色。

<demo vue="../demo/Switch/Basic.vue" title="基础Switch" description="Switch 基础用例"></demo>

## 禁用状态

设置 **disabled** 属性，接受一个 boolean，设置true即可禁用。

<demo vue="../demo/Switch/Disabled.vue" title="Switch 禁用状态" description="Switch 禁用状态"></demo>

## 不同尺寸

设置 **size** 属性，接受**large / small**，呈现不同的尺寸。

<demo vue="../demo/Switch/Size.vue" title="Switch 不同尺寸" description="Switch 不同尺寸"></demo>

## 支持自定义 value 类型

你可以设置 **active-value** 和 **inactive-value** 属性， 它们接受 boolean | string | number 类型的值。
<demo vue="../demo/Switch/CustomValue.vue" title="支持自定义 value 类型" description="Switch 支持自定义 value 类型"></demo>

## 文字描述

使用 **active-text** 属性与 **inactive-text** 属性来设置开关的文字描述。

<demo vue="../demo/Switch/Text.vue" title="支持文字描述" description="Switch 文字描述"></demo>

### Input Attributes

| Name          | Description      | Type                                         | Default |
| ------------- | ---------------- | -------------------------------------------- | ------- |
| modelvalue    | 开关绑定文本     | `string`                                     | —       |
| size          | 开关大小         | `enum` - `'large'\| 'small'\|`               | —       |
| disabled      | 开关是否禁用     | `boolean`                                    | false   |
| name          | 开关名称         | `string`                                     | —       |
| activeText    | 开关打开显示文本 | `string`                                     | —       |
| inactiveText  | 开关关闭显示文本 | `string`                                     | —       |
| activeValue   | 开关打开值       | `enum` - `'boolean'\| 'string'\| 'number'\|` | —       |
| inactiveValue | 开关关闭值       | `enum` - `'boolean'\| 'string'\| 'number'\|` | —       |
| name          | 开关名称         | `string`                                     | —       |
| id            | 开关id           | `string`                                     | —       |

### Input Events

| Name              | Description        | Input                                     | Output |
| ----------------- | ------------------ | ----------------------------------------- | ------ |
| update:modelValue | 开关更新时触发     | `value:'boolean'\| 'string'\| 'number'\|` | `void` |
| change            | 开关状态变化时触发 | `value:'boolean'\| 'string'\| 'number'\|` | `void` |