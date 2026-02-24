# vue3-component-lib

基于 **Vue3 + Composition API** 的小型组件库示例，重点展示：

- 通用组件封装（Button / Modal）
- 虚拟滚动表格 `VirtualTable` 的实现
- 组合式函数 `useVirtualList` 的抽象

## 目录结构

```bash
vue3-component-lib/
├── README.md
├── packages/
│   ├── components/
│   │   ├── Button/
│   │   │   └── index.vue
│   │   ├── Modal/
│   │   │   └── index.vue
│   │   ├── Table/
│   │   │   └── VirtualTable.vue   # 虚拟滚动表格（亮点）
│   │   ├── Form/
│   │   └── Tree/
│   ├── hooks/
│   │   └── useVirtualList.ts     # 虚拟列表 Hook
│   └── utils/
├── docs/                         # 文档（可用 VitePress 搭建）
└── playground/                   # 组件演示项目（Vite）
```

## VirtualTable 设计要点

- 只渲染可视区行数据，避免长列表整表渲染
- 通过容器高度 / 行高计算「起始索引 + 渲染数量」
- 使用 `translateY` 做内容位移，占位容器高度不变

## useVirtualList Hook

抽象虚拟列表的核心计算逻辑，便于在 Table 或其他列表组件中复用：

- 输入：原始列表、容器高度、行高、预留缓冲区
- 输出：可视数据切片 + 容器总高度 + 偏移量

## 开发指令

```bash
npm install
npm run dev    # 启动 playground（配置完成后）
npm run test   # 运行组件单元测试（后续可补充）
```
