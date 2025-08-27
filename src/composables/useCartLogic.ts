import type { IProduct } from '@/types/IProduct'
import { computed } from 'vue'
import type { Ref } from 'vue'

export const useCartLogic = (cart: Ref<IProduct[]>) => {
  const totalItems = computed(() =>
    cart.value.reduce((total, item) => total + (item.quantity ?? 1), 0),
  )

  const totalPrice = computed(() =>
    cart.value.reduce((total, item) => total + item.price * (item.quantity ?? 1), 0),
  )

  const addToCart = (item: IProduct) => {
    const existingItem = cart.value.find((i) => i.id === item.id)
    if (existingItem) {
      existingItem.quantity = (existingItem.quantity ?? 1) + 1
    } else {
      cart.value.push({ ...item, quantity: 1 })
    }
  }

  const removeFromCart = (id: number) => {
    cart.value = cart.value.filter((item) => item.id !== id)
  }

  return {
    addToCart,
    removeFromCart,
    totalItems,
    totalPrice,
  }
}
