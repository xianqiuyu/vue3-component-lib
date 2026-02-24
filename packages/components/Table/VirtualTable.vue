<script setup lang="ts">
import { computed, ref } from "vue";
import type { Ref } from "vue";
import { useVirtualList } from "../../hooks/useVirtualList";

/**
 * mini-el-table（虚拟滚动版）
 *
 * 设计思路：
 * - API 参考 Element Plus Table：columns + data（此处命名为 dataSource）
 * - 使用 useVirtualList 抽象列表计算，专注于表格渲染本身
 */

interface Column<T = any> {
  key: keyof T | string;
  title: string;
  width?: number | string;
}

const props = defineProps<{
  columns: Column[];
  dataSource: any[];
  /** 表格容器高度（可视区域） */
  height: number;
  /** 每行高度（与 useVirtualList 的 itemHeight 对齐） */
  rowHeight?: number;
}>();

const dataRef = ref(props.dataSource) as Ref<any[]>;

const { containerRef, visibleData, offsetY, totalHeight } = useVirtualList(
  dataRef,
  {
    itemHeight: props.rowHeight || 40,
    overscan: 5,
  }
);

const tableStyle = computed(() => ({
  height: `${props.height}px`,
}));
</script>

<template>
  <div class="vc-virtual-table" :style="tableStyle" ref="containerRef">
    <table class="vc-virtual-table__inner" cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <th
            v-for="col in columns"
            :key="col.key as string"
            class="vc-virtual-table__th"
            :style="{ width: col.width ? col.width + 'px' : undefined }"
          >
            {{ col.title }}
          </th>
        </tr>
      </thead>
    </table>
    <div class="vc-virtual-table__body-wrapper" :style="{ height: totalHeight + 'px' }">
      <table
        class="vc-virtual-table__inner"
        cellspacing="0"
        cellpadding="0"
        :style="{ transform: `translateY(${offsetY}px)` }"
      >
        <tbody>
          <tr
            v-for="(row, rowIndex) in visibleData"
            :key="rowIndex"
            class="vc-virtual-table__tr"
          >
            <td
              v-for="col in columns"
              :key="col.key as string"
              class="vc-virtual-table__td"
            >
              <slot :name="col.key as string" :row="row">
                {{ row[col.key as keyof typeof row] }}
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.vc-virtual-table {
  border: 1px solid #ebeef5;
  border-radius: 4px;
  overflow: auto;
  position: relative;
}

.vc-virtual-table__inner {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

.vc-virtual-table__th,
.vc-virtual-table__td {
  padding: 8px 12px;
  border-bottom: 1px solid #ebeef5;
  font-size: 13px;
  line-height: 1.5;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.vc-virtual-table__th {
  background-color: #f5f7fa;
  font-weight: 500;
}

.vc-virtual-table__body-wrapper {
  position: relative;
  width: 100%;
}

.vc-virtual-table__tr:nth-child(2n) .vc-virtual-table__td {
  background-color: #fafafa;
}
</style>
