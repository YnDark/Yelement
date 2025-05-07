---
title: Button | Yelement
description: Button 组件的文档
---

# Button 按钮
常用的操作按钮。

## 基础用法
使用 `plain`、`round` 和 `circle` 来定义按钮的样式。
使用 `loading`定义按钮加载。
使用 `icon`定义按钮前缀图标。


<demo vue="../demo/Button/Basic.vue" title="基础用法" description="Button 组件的基础用法"></demo>

## 尺寸设置
使用 `size`来定义按钮的大小。

<demo vue="../demo/Button/Size.vue" title="尺寸设置" description="Button 组件的尺寸设置"></demo>

## 类型设置
使用 `type` 来定义按钮的主题样式。

<demo vue="../demo/Button/Type.vue" title="类型设置" description="Button 组件的类型设置"></demo>

### Button Attributes

| Name        | Description                       | Type                                                             | Default |
| ----------- | --------------------------------- | ---------------------------------------------------------------- | ------- |
| size        | 按钮尺寸                          | `enum` - `'large'\| 'small'`                                     | —       |
| type        | 按钮类型                          | `enum` - `'primary'\| 'success'\| 'warning'\| 'danger'\| 'info'` | —       |
| plain       | 按钮是否为朴素类型                | `boolean`                                                        | false   |
| round       | 按钮是否为圆角类型                | `boolean`                                                        | false   |
| circle      | 按钮是否为圆形类型                | `boolean`                                                        | false   |
| loading     | 按钮是否在加载                    | `boolean`                                                        | false   |
| disabled    | 按钮是否禁用                      | `boolean`                                                        | false   |
| icon        | 按钮前缀图标名                    | `string`                                                         | —       |
| autofocus   | 和button原生属性 `autofocus` 相同 | `boolean`                                                        | false   |
| native-type | 和button原生属性 `type` 相同      | `enum` - `'button'\| 'submit'\| 'reset'`                         | button  |
