import { computed, ref, type Ref } from "vue";

/**
 * 虚拟列表 Hook
 * - 根据容器高度和行高，计算需要渲染的可视数据切片
 * - 返回：可视数据、偏移量、容器总高度
 */

export interface UseVirtualListOptions {
  itemHeight: number; // 每一行高度（px）
  overscan?: number; // 预渲染缓冲区行数
}

export interface UseVirtualListReturn<T> {
  containerRef: Ref<HTMLElement | null>;
  visibleData: Ref<T[]>;
  offsetY: Ref<number>;
  totalHeight: Ref<number>;
}

export function useVirtualList<T>(
  source: Ref<T[]>,
  options: UseVirtualListOptions
): UseVirtualListReturn<T> {
  const containerRef = ref<HTMLElement | null>(null);
  const scrollTop = ref(0);

  const overscan = options.overscan ?? 5;

  const totalHeight = computed(() => source.value.length * options.itemHeight);

  const visibleCount = computed(() => {
    const el = containerRef.value;
    if (!el) return 0;
    return Math.ceil(el.clientHeight / options.itemHeight) + overscan;
  });

  const startIndex = computed(() => {
    return Math.max(
      0,
      Math.floor(scrollTop.value / options.itemHeight) - overscan
    );
  });

  const endIndex = computed(() => {
    return Math.min(
      source.value.length,
      startIndex.value + visibleCount.value
    );
  });

  const offsetY = computed(() => startIndex.value * options.itemHeight);

  const visibleData = computed(() =>
    source.value.slice(startIndex.value, endIndex.value)
  );

  const onScroll = () => {
    const el = containerRef.value;
    if (!el) return;
    scrollTop.value = el.scrollTop;
  };

  return {
    containerRef: new Proxy(containerRef, {
      set(target, key, value) {
        // 绑定 / 解绑 scroll 事件
        if (key === "value") {
          const old = (target as any).value as HTMLElement | null;
          if (old) {
            old.removeEventListener("scroll", onScroll);
          }
          if (value) {
            (value as HTMLElement).addEventListener("scroll", onScroll);
          }
        }
        (target as any)[key] = value;
        return true;
      },
    }) as Ref<HTMLElement | null>,
    visibleData,
    offsetY,
    totalHeight,
  };
}
