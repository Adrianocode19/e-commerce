import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useCartLogic } from '@/composables/useCartLogic'
import type { IProduct } from '@/types/IProduct'

export const useCartStore = defineStore('cart', () => {
  const cart = ref<IProduct[]>([])

  const modal = ref(false)

  const showModal = () => {
    modal.value = !modal.value
  }

  const { addToCart, removeFromCart, totalItems, totalPrice } = useCartLogic(cart)

  return {
    cart,
    modal,
    showModal,
    addToCart,
    removeFromCart,
    totalItems,
    totalPrice,
  }
})
