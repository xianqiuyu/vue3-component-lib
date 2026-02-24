<script setup lang="ts">
/**
 * mini-el-input
 *
 * 参考 Element Plus Input：
 * - 支持 v-model
 * - 支持 size / disabled / placeholder / clearable
 */

const props = defineProps<{
  modelValue?: string;
  size?: "large" | "default" | "small";
  placeholder?: string;
  disabled?: boolean;
  clearable?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "clear"): void;
}>();

const handleInput = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};

const handleClear = () => {
  if (props.disabled) return;
  emit("update:modelValue", "");
  emit("clear");
};
</script>

<template>
  <span
    class="vc-input"
    :class="[`vc-input--${size || 'default'}`, { 'is-disabled': disabled }]"
  >
    <input
      class="vc-input__inner"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="handleInput"
    />
    <span
      v-if="clearable && modelValue"
      class="vc-input__clear"
      @click="handleClear"
    >
      ✕
    </span>
  </span>
</template>

<style scoped>
.vc-input {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.vc-input__inner {
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  outline: none;
  transition: border-color 0.2s;
  font-size: 14px;
}

.vc-input__inner:focus {
  border-color: #409eff;
}

.vc-input__clear {
  position: absolute;
  right: 6px;
  font-size: 12px;
  cursor: pointer;
  color: #909399;
}
</style>

