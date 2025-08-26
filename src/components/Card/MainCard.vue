<script setup lang="ts">
import CardProduct from './CardProduct.vue'
import MainHeader from '../MainHeader.vue'
import MainFooter from '../Footer/MainFooter.vue'
import { useListStore } from '@/stores/useListStore'
import { computed } from 'vue'
import MainLayout from '@/Layout/MainLayout.vue'

const listStore = useListStore()

const list = computed(() => {
  return listStore.searchTerm.length < 1 ? listStore.list : listStore.filteredList
})
</script>

<template>
  <MainHeader />
  <MainLayout>
    <img class="mb-2.5 sm:mb-[48px]" src="../../assets/img/banner.png" alt="Banner" />
    <section class="flex flex-col items-center">
      <h2 class="text-ebony text-xl font-bold mb-2.5 sm:mb-[42px]">Nossos Produtos</h2>
      <p v-if="list.length === 0 && listStore.searchTerm.length === 0">Carregando...</p>
      <div
        class="grid grid-cols-2 place-items-center gap-x-5 gap-y-5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-8 sm:gap-y-9"
      >
        <CardProduct
          v-for="item in list"
          :id="item.id"
          :key="item.id"
          :nome="item.title"
          :categoria="item.category"
          :preco="item.price"
          :image="item.image"
        />
        <div v-if="listStore.searchTerm.length > 0 && listStore.filteredList.length === 0">
          <p class="text-gray-500">Nenhum produto encontrado.</p>
        </div>
      </div>
    </section>
  </MainLayout>
  <MainFooter />
</template>
