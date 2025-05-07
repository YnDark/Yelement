---
title: Form | Yelement
description: Form 组件的文档
---

# Form 按钮
表单组件，配合FormItem一起使用。
支持将数据绑定到表单，表单设置label插槽设置表单项的标签，支持自定义模板，支持传入校验规则对表单项进行校验。
支持表单整体进行校验、支持清除表单校验状态、支持清除表单内容

## 基础用法
Form标签使用 `:model` 来绑定数据。
Form标签使用 `ref` 获取表单实例
FormItem标签 `label` 设置标签
FormItem标签 `prop` 设置使用属性


<demo vue="../demo/Form/Basic.vue" title="基础用法" description="Form 组件的基础用法"></demo>

## 校验设置
Form标签使用 `:rules`定义整个表单校验规则。

<demo vue="../demo/Form/Validate.vue" title="校验设置" description="Form 组件的校验设置"></demo>

### Form Attributes

| Name  | Description | Type                 | Default |
| ----- | ----------- | -------------------- | ------- |
| model | 绑定数据    | `Record<string,any>` | —       |
| rules | 校验规则    | `Record<string,any>` | —       |

### FormItem Attributes

| Name  | Description | Type     | Default |
| ----- | ----------- | -------- | ------- |
| label | 标签        | `string` | —       |
| prop  | 绑定属性    | `string` | —       |

### FormInstance Attributes

| Name          | Description  | Type                |
| ------------- | ------------ | ------------------- |
| validate      | 校验方法     | `()=>Promise<any>`  |
| clearValidate | 清除校验状态 | `(string[])=>void)` |
| resetFields   | 清除表单     | `(string[])=>void`  |

### FormItemInstance Attributes

| Name           | Description  | Type                                             | 
| -------------- | ------------ | ------------------------------------------------ | 
| validate       | 校验方法     | `(string)=>Promise<any>`                         |
| clearValidate  | 清除校验状态 | `()=>void)`                                      |
| resetFields    | 清除表单     | `()=>void`                                       |
| validateStatus | 校验状态     | `'init' \| 'success' \| 'error'\| 'loading' \|` |