---
title: Input | Yelement
description: Input 组件的文档
---

# Input 输入框
通过鼠标或键盘输入字符

## 基础文本框

<demo vue="../demo/Input/Basic.vue" title="基础文本框" description="Input 基础文本框"></demo>

## 禁用文本框

通过 **disabled** 属性指定是否禁用 input 组件


<demo vue="../demo/Input/Disable.vue" title="禁用文本框" description="Input 禁用文本框"></demo>

## 尺寸
使用 size 属性改变输入框大小。 除了默认大小外，还有另外两个选项： **large**, **small**。

<demo vue="../demo/Input/Size.vue" title="不同尺寸文本框" description="不同尺寸文本框"></demo>


## 复合型输入框

可以在输入框前置或后置一个元素，通常是标签或按钮。可以使用 **prepend** 和 **append** 插槽。
要在输入框中添加前后元素，可以使用 **prefix** 和 **suffix** 插槽。

<demo vue="../demo/Input/Combo.vue" title="复合型输入框" description="Input 复合型输入框"></demo>

## Textarea

用于输入多行文本信息可缩放的输入框。 添加 **type="textarea"** 属性来将 input 元素转换为原生的 textarea 元素。

<demo vue="../demo/Input/Textarea.vue" title="Textarea" description="Textarea"></demo>

## 密码文本框

使用 **show-password** 属性即可得到一个可切换显示隐藏的密码框

<demo vue="../demo/Input/Password.vue" title="密码文本框" description="Input 密码文本框"></demo>

## 清空文本框

使用 **clearable** 属性即可得到一个可一键清空的输入框


<demo vue="../demo/Input/Clear.vue" title="清空文本框" description="Input 清空文本框"></demo>

### Input Attributes

| Name         | Description                         | Type                           | Default |
| ------------ | ----------------------------------- | ------------------------------ | ------- |
| type         | 输入框类型                          | `string`                       | —       |
| modelvalue   | 输入框绑定文本                      | `string`                       | —       |
| size         | 输入框大小                          | `enum` - `'large'\| 'small'\|` | —       |
| disabled     | 输入框是否禁用                      | `boolean`                      | false   |
| clearable    | 输入框是否可清除                    | `boolean`                      | false   |
| readonly     | 输入框是否只可读                    | `boolean`                      | false   |
| showPassword | 输入框是否可切换文本可见性          | `boolean`                      | false   |
| placeholder  | 输入框提示文本                      | `string`                       | —       |
| autocomplete | 和input原生属性 `autocomplete` 相同 | `enum` - `'off'\| 'on'\|`      | off     |
| autofocus    | 和input原生属性 `autofocus` 相同    | `boolean`                      | —       |
| form         | 和button原生属性 `type` 相同        | `string`                       | —       |

### Input Events

| Name              | Description                         | Input                     | Output |
| ----------------- | ----------------------------------- | ------------------------- | ------ |
| update:modelValue | 输入框文本更新触发                  | `value:string`            | `void` |
| input             | 输入框文本变化触发                  | `value:string`            | `void` |
| change            | 输入框文本变化并且失去focus触发     | `value:string`            | `void` |
| focus             | 输入框获取focus触发                 | `value:FocusEvent`        | `void` |
| blur              | 输入框失去focus触发                 | `value:FocusEvent`        | `void` |
| clear             | 输入框clear时触发                   | `void`                    | `void` |
