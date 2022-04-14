---
title: Link 链接
group:
  title: Link 链接
nav:
  title: '组件'
  path: /components
---

### 基础用法

<code src="./demos/base.tsx" />

### 其他状态

失败、警告、成功等其他状态下操作，可出现不同样式的链接。

<code src="./demos/status.tsx" />

### 悬浮状态样式

可以通过 hoverable 属性设置是否在悬浮状态时隐藏底色。

<code src="./demos/hover.tsx" />

### API

链接的属性说明如下：

| 属性      | 说明               | 类型                              | 默认值 |
| --------- | ------------------ | --------------------------------- | ------ |
| status    | 不同状态           | `error` \| `success` \| `warning` | --     |
| disabled  | 是否禁用           | boolean                           | --     |
| hoverable | 悬浮状态是否有底色 | boolean                           | true   |
