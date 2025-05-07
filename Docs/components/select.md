---
title: Select | Yelement
description: Select 组件的文档
---
# 选择器

当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法

适用广泛的基础单选 v-model 的值为当前被选中的 option 的 value 属性值。

<demo vue="../demo/Select/Basic.vue" title="基础选择器" description="Select 基础选择器"></demo>

## 键盘操作

支持使用键盘进行快捷操作，Enter打开选项栏、Up/Down切换选中选项、Enter选中选项、ESC关闭下拉选项框

<demo vue="../demo/Select/Keybord.vue" title="键盘操作" description="Select 键盘操作"></demo>

## 自定义模板

自定义插入选项模板进行渲染

<demo vue="../demo/Select/VNode.vue" title="自定义模板选择器" description="Select 自定义模板"></demo>

## 过滤

可通过输入关键词进行过滤

<demo vue="../demo/Select/Filter.vue" title="可过滤选择器" description="Select 自动填充"></demo>

## 远程请求选项

可通过请求远程资源获取选项（该示例使用的是github网址，国内访问可能被拒绝）

<demo vue="../demo/Select/Remote.vue" title="远程请求选项选择器" description="Select 远程请求选项"></demo>

## Select Interface
| Name         | Description | Type                                               |
| ------------ | ----------- | -------------------------------------------------- |
| SelectOption | 选择框选项  | `{label:string; value:string;disabled:boolean}` |
## Select Attributes
| Name         | Description              | Type                                  | Default |
| ------------ | ------------------------ | ------------------------------------- | ------- |
| modelValue   | 选择框绑定值             | `string`                              | —       |
| options      | 选项                     | `SelectOption`                        | —       |
| placeholder  | 选择框提示内容           | `string`                              | —       |
| clearable    | 选择框是否可清除         | `boolean`                             | false   |
| disabled     | 选择框是否禁用           | `boolean`                             | false   |
| renderLable  | 选择框选项渲染函数       | (`option`)=>`VNode`                   | —       |
| filterable   | 选择框是否可输入过滤     | `string`                              | —       |
| filterMethod | 选择框过滤方法           | (`string`)=>`SelectOption[]`          | —       |
| remote       | 是否使用远程请求填充选项 | `boolean`                             | —       |
| remoteMethod | 远程请求方法             | (`string`)=>`Promise<SelectOption[]>` | —       |

## Select Events

| Name              | Description                     | Input           | Output |
| ----------------- | ------------------------------- | --------------- | ------ |
| update:modelValue | 选择框文本更新触发              | `value:string`  | `void` |
| change            | 选择框文本变化并且失去focus触发 | `value:string`  | `void` |
| visible-change    | 选择框选项可见性切换时触发      | `value:boolean` | `void` |
| clear             | 选择框clear时触发               | `void`          | `void` |