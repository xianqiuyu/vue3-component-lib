# vue3-component-lib 组件总览

## 基础组件（Element Plus 风格 mini 版）

- Button 按钮：type/size/plain/round/circle/loading
- Input 输入框：v-model、placeholder、clearable
- Select 选择器：options + v-model 单选
- Tag 标签：多种语义色、closable

## 反馈组件

- Modal/Dialog 对话框：Teleport + v-model:visible + header/footer 插槽
- Alert 警告（可在此基础上继续扩展 type/closable 等）

## 数据展示

- Card 卡片：包裹内容区域，支持 header/extra
- Table（VirtualTable）虚拟滚动表格：大数据量性能亮点
- Tree 树形结构：递归渲染、节点展开收起

## 导航与分页

- Tabs 选项卡：受控 activeKey + onChange
- Pagination 分页器：current/pageSize/total，简化版页码算法
