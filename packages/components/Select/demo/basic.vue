<script setup lang="ts">
import { ref } from "vue";
import Select from "../index.vue";

const value = ref("");
const options = [
  { label: "北京", value: "bj" },
  { label: "上海", value: "sh" },
  { label: "广州", value: "gz" },
];
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 8px; width: 260px">
    <Select v-model="value" :options="options" placeholder="请选择城市" />
    <div>当前选择：{{ value || "暂无" }}</div>
  </div>
</template>

