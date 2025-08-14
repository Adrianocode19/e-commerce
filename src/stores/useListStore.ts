import api from '@/services/services'
import type { IList } from '@/types/IList'
import { defineStore } from 'pinia'
import { ref, computed, onMounted } from 'vue'

export const useListStore = defineStore('list', () => {
  const list = ref<IList[]>([])
  const searchTerm = ref('')

  const fetchList = async () => {
    const response = await api.get<IList[]>('/')
    list.value = response.data
  }

  const filteredList = computed(() => {
    if (!searchTerm.value) return list.value
    return list.value.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.value.toLowerCase()),
    )
  })

  onMounted(() => {
    fetchList()
  })

  return {
    list,
    searchTerm,
    filteredList,
    fetchList,
  }
})
