<script setup lang="ts">
import { ref } from "vue";
import Tabs from "../index.vue";

const active = ref("tab1");
</script>

<template>
  <Tabs v-model="active">
    <Tabs.TabPane label="标签一" name="tab1">内容一</Tabs.TabPane>
    <Tabs.TabPane label="标签二" name="tab2">内容二</Tabs.TabPane>
  </Tabs>
</template>
