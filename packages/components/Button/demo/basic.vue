<script setup lang="ts">
/**
 * Button 基本用法 demo
 * - 展示不同 type / size / plain / round 的组合
 */
import Button from "../index.vue";
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <div style="display: flex; gap: 8px">
      <Button type="primary">Primary</Button>
      <Button type="success">Success</Button>
      <Button type="warning">Warning</Button>
      <Button type="danger">Danger</Button>
      <Button type="info">Info</Button>
      <Button>Default</Button>
    </div>
    <div style="display: flex; gap: 8px">
      <Button type="primary" plain>Plain</Button>
      <Button type="primary" round>Round</Button>
      <Button type="primary" circle>◎</Button>
      <Button type="primary" loading>Loading</Button>
      <Button type="primary" disabled>Disabled</Button>
    </div>
  </div>
</template>

