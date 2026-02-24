<script setup lang="ts">
import { ref } from "vue";
import Pagination from "../index.vue";

const current = ref(1);
</script>

<template>
  <Pagination v-model="current" :total="200" :page-size="10" />
</template>
