<script setup lang="ts">
/**
 * VirtualTable 基本用法 demo
 */
import { ref } from "vue";
import VirtualTable from "../VirtualTable.vue";

interface Row {
  id: number;
  name: string;
  age: number;
}

const columns = [
  { key: "id", title: "ID", width: 80 },
  { key: "name", title: "姓名", width: 160 },
  { key: "age", title: "年龄", width: 100 },
];

const data = ref<Row[]>(Array.from({ length: 1000 }).map((_, i) => ({
  id: i + 1,
  name: `用户-${i + 1}`,
  age: 18 + (i % 20),
})));
</script>

<template>
  <VirtualTable :columns="columns" :data-source="data" :height="320" />
</template>

