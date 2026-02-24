<script setup lang="ts">
/**
 * mini-el-select（简化版下拉选择）
 *
 * 功能：
 * - v-model 绑定当前值
 * - options 数组渲染下拉项
 */
export interface Option {
  label: string;
  value: string | number;
}

const props = defineProps<{
  modelValue?: string | number;
  options: Option[];
  placeholder?: string;
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();

const handleChange = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLSelectElement).value);
};
</script>

<template>
  <select
    class="vc-select"
    :value="modelValue"
    :disabled="disabled"
    @change="handleChange"
  >
    <option v-if="placeholder" disabled value="">
      {{ placeholder }}
    </option>
    <option
      v-for="opt in options"
      :key="opt.value"
      :value="opt.value"
    >
      {{ opt.label }}
    </option>
  </select>
</template>

<style scoped>
.vc-select {
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  font-size: 14px;
}
</style>

