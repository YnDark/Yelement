---
title: Message | Yelement
description: Message 组件的文档
---

# Message 消息
常用的消息通知。
悬停在消息上时消息不会消失，移出后在指定时间内消失，还可通过ESC销毁全部消息，显示消息时会自动计算之前消息的位置，保证消息不会重叠遮挡。
可以设置消息样式、消失时间、是否能够手动关闭、间距、id、zIndex等

## 基础用法
使用 `type` 来定义按钮的样式。
使用 `duration` 来控制消息消失时间。


<demo vue="../demo/Message/Basic.vue" title="基础用法" description="Message 组件的基础用法"></demo>

## 通过实例手动关闭
使用消息实例中的 `Destroy` 方法手动销毁信息。

<demo vue="../demo/Message/HandleClose.vue" title="手动销毁信息" description="Message 组件手动销毁"></demo>

## 设置消息是否能够点击关闭
使用 `showClose` 来设置按钮是否可以通过点击关闭。

<demo vue="../demo/Message/ShowClose.vue" title="点击关闭" description="Message 组件点击关闭"></demo>

## Message Attributes

| Name      | Description          | Type                                                 | Default |
| --------- | -------------------- | ---------------------------------------------------- | ------- |
| type      | 消息类型             | `enum` - `'success'\| 'warning'\| 'danger'\| 'info'` | —       |
| message   | 消息内文本           | `string`                                             | —       |
| showClose | 消失是否可以点击关闭 | `boolean`                                            | true    |
| offset    | 消息间距             | `number`                                             | 0       |

## Message Instance
| Method/Prop | Description      | Type                        | Default    |
| ----------- | ---------------- | --------------------------- | ---------- |
| id          | 消息id           | `string`                    | 前消息id+1 |
| vnode       | 消息内部虚拟节点 | `VNode`                     | —          |
| props       | 消息参数         | `MessageProps`              | —          |
| vm          | 消息实例         | `ComponentInternalInstance` | —          |
| destroy     | 消息销毁方法     | `string`                    | —          |
