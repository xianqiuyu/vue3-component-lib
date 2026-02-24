<script setup lang="ts">
import { ref } from "vue";
import Tree from "../index.vue";

const data = ref([
  {
    label: "一级 1",
    children: [{ label: "二级 1-1" }],
  },
]);
</script>

<template>
  <Tree :data="data" />
</template>
