<script setup lang="ts">
import { useCartStore } from '@/stores/useCartStore'
import { useListStore } from '@/stores/useListStore'

const cartStore = useCartStore()
const listStore = useListStore()
</script>

<template>
  <header
    class="grid grid-cols-2 sm:grid-cols-3 p-4 sm:mb-9 sm:grid-rows-1 gap-4 shadow-lg items-center place-items-center"
  >
    <h1 class="font-bold text-2xl text-ebony">MinhaLoja</h1>
    <nav
      class="flex gap-3.5 flex-row justify-end items-center sm:col-start-3 sm:row-start-1 relative"
    >
      <img class="size-5" src="../assets/icons/heart.svg" alt="Icone de Coração" />
      <div class="flex items-center relative size-10">
        <button @click="cartStore.showModal">
          <img class="size-5" src="../assets/icons/cart.svg" alt="Icone de Carrinho" />
        </button>
        <div
          v-if="cartStore.totalItems > 0"
          class="bg-[#5B3EFD] text-white rounded-full w-5 h-5 flex items-center justify-center absolute top-0 right-3"
        >
          <span class="text-xs">{{ cartStore.totalItems }}</span>
        </div>
      </div>
    </nav>
    <div
      class="flex items-center col-span-2 bg-athens-gray rounded-full py-2.5 px-3.5 gap-2.5 sm:col-start-2 sm:row-start-1 sm:col-end-2"
    >
      <img class="size-4" src="../assets/icons/search.svg" alt="Icone de Pesquisa" />
      <input
        v-model="listStore.searchTerm"
        type="text"
        placeholder="Pesquisar produtos..."
        class="text-chateau-gray outline-none"
      />
    </div>
  </header>
</template>
