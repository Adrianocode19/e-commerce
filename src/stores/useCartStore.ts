import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as {
      id: number
      nome: string
      categoria: string
      preco: number
      quantidade: number
      image: string
    }[],
    modal: false,
  }),
  actions: {
    addToCart(item: {
      id: number
      nome: string
      categoria: string
      preco: number
      image: string
      quantidade?: number
    }) {
      const existingItem = this.cart.find((i) => i.id === item.id)
      if (existingItem) {
        existingItem.quantidade++
      } else {
        this.cart.push({ ...item, quantidade: 1 })
      }
    },

    removeFromCart(id: number) {
      this.cart = this.cart.filter((item) => item.id !== id)
    },
    showModal() {
      this.modal = !this.modal
    },
  },
  getters: {
    totalItems(state) {
      return state.cart.reduce(
        (total: number, item: { quantidade: number }) => total + item.quantidade,
        0,
      )
    },
    totalPrice(state) {
      return state.cart.reduce(
        (total: number, item: { preco: number; quantidade: number }) =>
          total + item.preco * item.quantidade,
        0,
      )
    },
  },
})
