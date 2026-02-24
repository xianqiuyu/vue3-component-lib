<script setup lang="ts">
/**
 * mini-el-dialog（参考 Element Plus Dialog 的迷你版）
 *
 * 设计要点：
 * - 使用 v-model:visible 控制显隐
 * - 支持 title / width / closable，与 Element Plus 常用配置保持一致
 * - header / footer 插槽与 Element Plus 行为类似
 */

const props = defineProps<{
  visible: boolean;
  title?: string;
  width?: string;
  closable?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:visible", value: boolean): void;
  (e: "close"): void;
}>();

const handleClose = () => {
  emit("update:visible", false);
  emit("close");
};
</script>

<template>
  <teleport to="body">
    <div v-if="visible" class="vc-modal__mask" @click.self="handleClose">
      <div class="vc-modal" :style="{ width: width || '520px' }">
        <header class="vc-modal__header">
          <slot name="header">
            <span class="vc-modal__title">{{ title }}</span>
          </slot>
          <button
            v-if="closable !== false"
            class="vc-modal__close"
            type="button"
            @click="handleClose"
          >
            ✕
          </button>
        </header>
        <section class="vc-modal__body">
          <slot />
        </section>
        <footer class="vc-modal__footer">
          <slot name="footer" />
        </footer>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.vc-modal__mask {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.vc-modal {
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.16);
  overflow: hidden;
}

.vc-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid #f0f0f0;
}

.vc-modal__title {
  font-size: 16px;
  font-weight: 500;
}

.vc-modal__close {
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 16px;
}

.vc-modal__body {
  padding: 16px;
  max-height: 60vh;
  overflow: auto;
}

.vc-modal__footer {
  padding: 10px 16px;
  border-top: 1px solid #f0f0f0;
  text-align: right;
}
</style>
