---
title: Avatar 头像
group:
  title: Avatar 头像
nav:
  title: '组件'
  path: /components
---

### 基础用法

头像的基础使用。如果头像是文字的话，会自动调节字体大小，来适应头像框。

<code src="./demos/base.tsx" />

### 大小和形状

通过设置 size 字段，可以调节头像的大小，默认大小为 40px。设置 shape 字段，可以设置头像是圆形 (circle) 还是正方形 (square)。

<code src="./demos/size.tsx" />

### 自动调整字体大小

如果头像是文字的话，会自动调节字体大小，来适应头像框。
<code src="./demos/change.tsx" />

### API

链接的属性说明如下：

| 属性    | 说明                                           | 类型                 | 默认值 |
| ------- | ---------------------------------------------- | -------------------- | ------ |
| size    | 头像的尺寸大小，单位是 px                      | number               | 40     |
| shape   | 头像的形状，有圆形(circle)和正方形(square)两种 | `circle` \| `square` | circle |
| onClick | 点击回调                                       | (e) => void          | -      |
