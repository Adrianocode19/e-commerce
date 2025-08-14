import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const cart = ref<
    {
      id: number
      nome: string
      categoria: string
      preco: number
      quantidade: number
      image: string
    }[]
  >([])

  const modal = ref(false)

  const addToCart = (item: {
    id: number
    nome: string
    categoria: string
    preco: number
    image: string
    quantidade?: number
  }) => {
    const existingItem = cart.value.find((i) => i.id === item.id)
    if (existingItem) {
      existingItem.quantidade++
    } else {
      cart.value.push({ ...item, quantidade: 1 })
    }
  }

  const removeFromCart = (id: number) => {
    cart.value = cart.value.filter((item) => item.id !== id)
  }

  const showModal = () => {
    modal.value = !modal.value
  }

  const totalItems = computed(() => cart.value.reduce((total, item) => total + item.quantidade, 0))

  const totalPrice = computed(() =>
    cart.value.reduce((total, item) => total + item.preco * item.quantidade, 0),
  )

  return {
    cart,
    modal,
    addToCart,
    removeFromCart,
    showModal,
    totalItems,
    totalPrice,
  }
})
