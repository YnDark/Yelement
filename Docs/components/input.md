---
title: Input | V-Element
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
