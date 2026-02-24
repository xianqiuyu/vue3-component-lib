<script setup lang="ts">
import ButtonDemo from "@packages/components/Button/demo/basic.vue";
import InputDemo from "@packages/components/Input/demo/basic.vue";
import SelectDemo from "@packages/components/Select/demo/basic.vue";
import TagDemo from "@packages/components/Tag/demo/basic.vue";
import ModalDemo from "@packages/components/Modal/demo/basic.vue";
import TableDemo from "@packages/components/Table/demo/basic.vue";
import AlertDemo from "@packages/components/Alert/demo/basic.vue";
import TabsDemo from "@packages/components/Tabs/demo/basic.vue";
import PaginationDemo from "@packages/components/Pagination/demo/basic.vue";
import CardDemo from "@packages/components/Card/demo/basic.vue";
import TreeDemo from "@packages/components/Tree/demo/basic.vue";
</script>

<template>
  <div class="gallery">
    <h1 class="gallery__title">vue3-component-lib 组件总览</h1>

    <section class="gallery__section">
      <h2>基础组件</h2>
      <h3>Button</h3>
      <ButtonDemo />
      <h3>Input</h3>
      <InputDemo />
      <h3>Select</h3>
      <SelectDemo />
      <h3>Tag</h3>
      <TagDemo />
    </section>

    <section class="gallery__section">
      <h2>反馈组件</h2>
      <h3>Alert</h3>
      <AlertDemo />
      <h3>Modal</h3>
      <ModalDemo />
    </section>

    <section class="gallery__section">
      <h2>数据展示</h2>
      <h3>Card</h3>
      <CardDemo />
      <h3>Table（虚拟滚动）</h3>
      <TableDemo />
      <h3>Tree</h3>
      <TreeDemo />
    </section>

    <section class="gallery__section">
      <h2>导航与分页</h2>
      <h3>Tabs</h3>
      <TabsDemo />
      <h3>Pagination</h3>
      <PaginationDemo />
    </section>
  </div>
</template>

<style scoped>
.gallery {
  padding: 24px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
.gallery__title {
  margin-bottom: 16px;
}
.gallery__section {
  margin-bottom: 32px;
}
.gallery__section h2 {
  margin-bottom: 12px;
}
.gallery__section h3 {
  margin: 12px 0 8px;
}
</style>

