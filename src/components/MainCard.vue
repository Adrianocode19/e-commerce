<script setup lang="ts">
import CardProduct from './CardProduct.vue'
import MainHeader from './MainHeader.vue'
import MainFooter from './MainFooter.vue'
import { useListStore } from '@/stores/useListStore'

const listStore = useListStore()
</script>

<template>
  <MainHeader />
  <main class="flex flex-col items-center max-w-screen px-3.5 py-4 relative">
    <img class="mb-2.5 sm:mb-[48px]" src="../assets/img/banner.png" alt="Banner" />
    <section class="flex flex-col items-center">
      <h2 class="text-ebony text-xl font-bold mb-2.5 sm:mb-[42px]">Nossos Produtos</h2>
      <div
        class="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-9"
      >
        <CardProduct
          v-for="item in listStore.searchTerm.length < 1 ? listStore.list : listStore.filteredList"
          :id="item.id"
          :key="item.id"
          :nome="item.title"
          :categoria="item.category"
          :preco="item.price"
          :image="item.image"
        />
      </div>
    </section>
  </main>
  <MainFooter />
</template>
