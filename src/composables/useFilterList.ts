import type { IProduct } from '@/types/IProduct'
import { computed, ref, type Ref } from 'vue'

export const useFilterList = (items: Ref<IProduct[]>) => {
  const searchTerm = ref('')
  const filteredList = computed(() => {
    if (!searchTerm.value) return items.value
    return items.value.filter(
      (item: IProduct) =>
        item.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.value.toLowerCase()),
    )
  })

  return {
    filteredList,
    searchTerm,
  }
}
