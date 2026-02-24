<script setup lang="ts">
/**
 * mini-el-tag
 *
 * 功能：
 * - type：primary / success / warning / danger / info
 * - closable：可关闭标签
 */

const props = defineProps<{
  type?: "primary" | "success" | "warning" | "danger" | "info" | "default";
  closable?: boolean;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();

const handleClose = (e: MouseEvent) => {
  e.stopPropagation();
  emit("close");
};
</script>

<template>
  <span
    class="vc-tag"
    :class="[`vc-tag--${type || 'default'}`]"
  >
    <slot />
    <span
      v-if="closable"
      class="vc-tag__close"
      @click="handleClose"
    >
      ✕
    </span>
  </span>
</template>

<style scoped>
.vc-tag {
  display: inline-flex;
  align-items: center;
  padding: 0 8px;
  height: 24px;
  border-radius: 4px;
  font-size: 12px;
  background-color: #f4f4f5;
  color: #909399;
}

.vc-tag__close {
  margin-left: 4px;
  cursor: pointer;
}
</style>

