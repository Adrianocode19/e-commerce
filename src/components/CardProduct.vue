<template>
  <div class="w-[220px] rounded-lg shadow-lg">
    <div class="flex justify-center items-center size-[220px] bg-gray rounded-t-lg p-2.5 relative">
      <img class="size-full" :src="props.image" alt="" />
      <button class="bg-white rounded-full p-2 absolute top-2 right-2">
        <img class="size-5" src="../assets/icons/heart.svg" alt="Icone coração" />
      </button>
    </div>
    <div class="flex flex-col items-center pt-7 pb-3.5 px-3 rounded-b-lg">
      <div class="flex flex-col gap-3.5 w-full mb-5">
        <h3 class="text-lg font-semibold">{{ limitedName }}</h3>
        <h4 class="text-sm text-chateau-gray">{{ props.categoria }}</h4>
        <h5 class="text-lg font-semibold">R$ {{ props.preco.toFixed(2).replace('.', ',') }}</h5>
      </div>
      <BtnAdd
        @click="
          cartStore.addToCart({
            id: props.id,
            nome: props.nome,
            categoria: props.categoria,
            preco: props.preco,
            image: props.image,
          })
        "
        >Adicionar</BtnAdd
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import BtnAdd from './BtnAdd.vue'
import { defineProps } from 'vue'
import { useCartStore } from '@/stores/useCartStore'
const cartStore = useCartStore()
import { computed } from 'vue'

const limitedName = computed(() =>
  props.nome.length > 20 ? props.nome.slice(0, 15) + '…' : props.nome,
)
const props = defineProps<{
  id: number
  nome: string
  categoria: string
  preco: number
  image: string
}>()
</script>
