import type { Ref } from 'vue'
import type { IProduct } from '@/types/IProduct'

export const useFavoriteLogic = (favorites: Ref<IProduct[]>) => {
  const addToFavorites = (item: IProduct) => {
    if (!favorites.value.find((i) => i.id === item.id)) {
      favorites.value.push(item)
    } else {
      removeFromFavorites(item.id)
    }
  }

  const isFavorite = (id: number) => {
    return favorites.value.some((fav) => fav.id === id)
  }

  const removeFromFavorites = (id: number) => {
    favorites.value = favorites.value.filter((item) => item.id !== id)
  }

  return {
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  }
}
