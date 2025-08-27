import { useFilterList } from '@/composables/useFilterList'
import api from '@/services/services'
import type { IProduct } from '@/types/IProduct'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useListStore = defineStore('list', () => {
  const list = ref<IProduct[]>([])

  const fetchList = async () => {
    const response = await api.get<IProduct[]>('/')
    list.value = response.data
  }

  const { searchTerm, filteredList } = useFilterList(list)

  return {
    list,
    searchTerm,
    filteredList,
    fetchList,
  }
})
