<script setup lang="ts">
import { useFavoriteStore } from '@/stores/useFavoriteStore'
import { useCartStore } from '@/stores/useCartStore'
import { formatValue } from '@/utils/formatValue'
import type { IProduct } from '@/types/IProduct'

const favoriteStore = useFavoriteStore()
const cartStore = useCartStore()

const isCartItem = (itemId: number) => {
  return cartStore.cart.some((item: IProduct) => item.id === itemId)
}
</script>

<template>
  <dialog
    v-if="favoriteStore.showModalFavorites"
    class="flex justify-center items-center h-screen w-screen bg-[rgba(0,0,0,0.5)] fixed top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4"
  >
    <section class="bg-white h-[400px] w-11/12 sm:h-[500px] sm:w-[620px] rounded-lg shadow-md">
      <div
        class="flex justify-between w-full pt-4 pb-2 px-3 sm:pt-6 sm:pb-3.5 sm:px-3.5 border-b border-[#BBBBBB]"
      >
        <h4 class="sm:text-2xl font-bold">Meus Favoritos</h4>
        <button @click="favoriteStore.toggleModalFavorites" class="cursor-pointer">
          <img src="../assets/icons/close.svg" alt="Icone de fechar modal" />
        </button>
      </div>
      <div
        class="py-4 px-5 min-h-[350px] max-h-[350px] sm:py-8 sm:px-10 sm:max-h-[420px] sm:min-h-[420px] overflow-auto"
      >
        <div v-if="favoriteStore.favorites.length > 0">
          <div
            v-for="item in favoriteStore.favorites"
            :key="item.id"
            class="flex justify-between items-center pb-3.5 mb-3 border-b border-[#BBBBBB] last:border-0 last:mb-0 last:pb-0"
          >
            <div class="flex items-center gap-2.5 sm:gap-3.5">
              <div>
                <img class="size-10 sm:size-16" :src="item.image" :alt="item.title" />
              </div>
              <div>
                <p class="text-sm sm:text-base font-semibold">{{ item.title }}</p>
                <p class="text-sm text-chateau-gray">{{ item.category }}</p>
                <p class="text-sm sm:text-base font-semibold text-[#5B3EFD]">
                  {{ formatValue(item.price) }}
                </p>
              </div>
            </div>
            <div class="flex flex-col justify-end gap-1 text-white">
              <button
                @click="
                  cartStore.addToCart({
                    id: item.id,
                    title: item.title,
                    category: item.category,
                    price: item.price,
                    image: item.image,
                    quantity: 1,
                  })
                "
                class="p-1 bg-[#5B3EFD] rounded-lg"
                :class="{ 'opacity-50': isCartItem(item.id) }"
                :disabled="isCartItem(item.id)"
              >
                Adicionar
              </button>
              <button
                @click="favoriteStore.removeFromFavorites(item.id)"
                class="p-1 bg-red-500 rounded-lg"
              >
                Remover
              </button>
            </div>
          </div>
        </div>
        <div v-else class="flex flex-col justify-center items-center">
          <p class="text-gray-500">Nenhum produto favorito selecionado :/</p>
        </div>
      </div>
    </section>
  </dialog>
</template>
