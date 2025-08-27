import { useFavoriteLogic } from '@/composables/useFavoriteLogic'
import type { IProduct } from '@/types/IProduct'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavoriteStore = defineStore('favorite', () => {
  const favorites = ref<IProduct[]>([])

  const showModalFavorites = ref(false)

  const toggleModalFavorites = () => {
    showModalFavorites.value = !showModalFavorites.value
  }

  const { addToFavorites, removeFromFavorites, isFavorite } = useFavoriteLogic(favorites)

  return {
    favorites,
    isFavorite,
    addToFavorites,
    removeFromFavorites,
    showModalFavorites,
    toggleModalFavorites,
  }
})
