---
title: Collapse | Yelement
description: Collapse 组件的文档
---

# Collapse 按钮
常用的操作按钮。

## 基础用法
通过 `CollapseItem` 中 `title` 插槽插入具体内容
<demo vue="../demo/Collapse/Basic.vue" title="基础用法" description="Collapse 组件的基础用法"></demo>

## 手风琴模式
通过 `according` 设置是否为手风琴模式
<demo vue="../demo/Collapse/According.vue" title="手风琴模式" description="Collapse 组件的手风琴模式"></demo>

### Collapse Attributes

| Name       | Description        | Type       | Default |
| ---------- | ------------------ | ---------- | ------- |
| modelValue | 绑定值             | `NameType` | —       |
| according  | 是否开启手风琴模式 | `boolean`  | —       |

### CollapseItem Attributes
| Name     | Description | Type       | Default |
| -------- | ----------- | ---------- | ------- |
| name     | 选项名称    | `NameType` | —       |
| title    | 标题        | `string`   | —       |
| disabled | 是否禁用    | `boolean`  | —       |

### 额外属性
| Name     | Description | Type              | Default |
| -------- | ----------- | ----------------- | ------- |
| nameType | 名称属性    | `string / number` | —       |

### Collapse Events
| Name              | Description  | Type                                                 |
| ----------------- | ------------ | ---------------------------------------------------- |
| update:modelValue | 绑定内容更新 | `(e: 'update:modelValue',values: NameType[]): void;` |
| change            | 切换展开项   | `(e: 'change',values: NameType[]): void;`            |
