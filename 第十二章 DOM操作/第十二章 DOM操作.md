# 第十二章 DOM 操作

## 主要内容

- 向 DOM 中插入 HTML
- 理解 DOM 的特性和属性
- 获取计算样式
- 处理频繁布局操作

## 问题

- 为什么在注入 HTML 之前需要预解析（preparse）页面中可以自动
  闭合的元素？
- 使用 DOM 片段（DOM fragments）插入 HTML 的好处是什么？
- 如何确定页面上隐藏元素的尺寸？

### 12.1 向 DOM 中注入 HTML

##### 1. HTML 转 DOM ： innerHTML

步骤如下：

1. 确保 HTML 合法
2. 包裹在符合浏览器规则的闭合标签内
3. 使用 innerHTML 将这串 HTML 插入 DOM 中
4. 提取该 DOM 节点

### 12.2 DOM 的特性和属性

访问元素特性时，可以使用 DOM 的 getAttribute 和 setAttribute
也可以直接访问 DOM 的原生属性

### 12.3 样式特性

位于 DOM 的 style 属性上

### 12.4 避免布局抖动

改变元素时会导致级联变化

## 小结

- 批量更新 DOM
