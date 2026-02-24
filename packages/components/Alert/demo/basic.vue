<script setup lang="ts">
/**
 * Alert 基本用法 demo
 */
import Alert from "../index.vue";
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 8px">
    <Alert type="success">成功提示</Alert>
    <Alert type="warning">警告提示</Alert>
    <Alert type="danger" closable>错误提示（可关闭）</Alert>
  </div>
</template>
