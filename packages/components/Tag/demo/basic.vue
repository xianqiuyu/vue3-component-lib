<script setup lang="ts">
import { ref } from "vue";
import Tag from "../index.vue";

const visible = ref(true);
</script>

<template>
  <div style="display: flex; gap: 8px">
    <Tag type="primary">primary</Tag>
    <Tag type="success">success</Tag>
    <Tag type="danger">danger</Tag>
    <Tag v-if="visible" type="info" closable @close="visible = false">
      closable
    </Tag>
  </div>
</template>

