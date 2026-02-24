<script setup lang="ts">
/**
 * Input 基本用法 demo
 */
import { ref } from "vue";
import Input from "../index.vue";

const value = ref("");
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 12px; width: 260px">
    <Input v-model="value" placeholder="请输入内容" clearable />
    <div>当前值：{{ value }}</div>
  </div>
</template>

