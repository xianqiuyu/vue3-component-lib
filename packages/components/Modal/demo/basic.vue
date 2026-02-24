<script setup lang="ts">
/**
 * Modal 基本用法 demo
 * - 展示 v-model:visible、header/footer 插槽
 */
import { ref } from "vue";
import Modal from "../index.vue";
import Button from "../../Button/index.vue";

const visible = ref(false);
</script>

<template>
  <div>
    <Button type="primary" @click="visible = true">打开对话框</Button>
    <Modal v-model:visible="visible" title="标题">
      这里是对话框内容，可以放表单或说明文字。
      <template #footer>
        <Button @click="visible = false">取消</Button>
        <Button type="primary" @click="visible = false">确定</Button>
      </template>
    </Modal>
  </div>
</template>

