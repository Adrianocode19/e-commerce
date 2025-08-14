import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavoriteStore = defineStore('favorite', () => {
  const favorites = ref<
    {
      id: number
      nome: string
      categoria: string
      preco: number
      image: string
    }[]
  >([])

  const showModalFavorites = ref(false)

  const toggleModalFavorites = () => {
    showModalFavorites.value = !showModalFavorites.value
  }

  const isFavorite = (id: number) => {
    return favorites.value.some((fav) => fav.id === id)
  }

  const addToFavorites = (item: {
    id: number
    nome: string
    categoria: string
    preco: number
    image: string
  }) => {
    if (!favorites.value.find((i) => i.id === item.id)) {
      favorites.value.push(item)
    } else {
      removeFromFavorites(item.id)
    }
  }

  const removeFromFavorites = (id: number) => {
    favorites.value = favorites.value.filter((item) => item.id !== id)
  }

  return {
    favorites,
    isFavorite,
    addToFavorites,
    removeFromFavorites,
    showModalFavorites,
    toggleModalFavorites,
  }
})
