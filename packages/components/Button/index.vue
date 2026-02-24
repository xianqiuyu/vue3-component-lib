<script setup lang="ts">
/**
 * mini-el-button（参考 Element Plus Button 设计的迷你版）
 *
 * 设计目标：
 * - 保留 Element Plus 常用 API：type / size / plain / round / circle / disabled / loading
 * - 使用 BEM 风格 class，方便在文档中讲解“如何设计可扩展的组件样式体系”
 */

const props = defineProps<{
  /**
   * 按钮类型
   * 对应 Element Plus: primary / success / warning / danger / info / default
   */
  type?: "primary" | "success" | "warning" | "danger" | "info" | "default";
  /**
   * 按钮尺寸
   * 对应 Element Plus: large / default / small
   */
  size?: "large" | "default" | "small";
  /** 是否为朴素按钮（plain） */
  plain?: boolean;
  /** 是否为圆角按钮（round） */
  round?: boolean;
  /** 是否为圆形按钮（circle） */
  circle?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否加载中 */
  loading?: boolean;
}>();

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

const handleClick = (e: MouseEvent) => {
  if (props.disabled || props.loading) return;
  emit("click", e);
};
</script>

<template>
  <button
    class="vc-button"
    :class="[
      `vc-button--${props.type || 'default'}`,
      `vc-button--${props.size || 'default'}`,
      {
        'is-plain': props.plain,
        'is-round': props.round,
        'is-circle': props.circle,
        'is-disabled': props.disabled,
        'is-loading': props.loading,
      },
    ]"
    :disabled="props.disabled || props.loading"
    @click="handleClick"
  >
    <span v-if="props.loading" class="vc-button__spinner" />
    <span class="vc-button__content">
      <slot />
    </span>
  </button>
</template>

<style scoped>
/**
 * 组件样式说明：
 * - 采用 BEM 命名：.vc-button--primary / .is-plain 等
 * - 颜色/尺寸参数可以很方便地抽象成 design token 或 CSS 变量
 */

.vc-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  height: 32px;
  border-radius: 4px;
  border: 1px solid transparent;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.vc-button--default {
  background-color: #fff;
  border-color: #dcdfe6;
  color: #606266;
}

.vc-button--primary {
  background-color: #409eff;
  border-color: #409eff;
  color: #fff;
}

.vc-button--danger {
  background-color: #f56c6c;
  border-color: #f56c6c;
  color: #fff;
}

.vc-button--small {
  height: 28px;
  padding: 0 12px;
  font-size: 13px;
}

.vc-button--large {
  height: 36px;
  padding: 0 20px;
  font-size: 15px;
}

.is-disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.vc-button__spinner {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-top-color: rgba(255, 255, 255, 1);
  margin-right: 6px;
  animation: vc-btn-spin 0.6s linear infinite;
}

@keyframes vc-btn-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
