<script setup lang="ts">
import { computed } from 'vue'
import { defineProps } from 'vue'
import { useCartStore } from '@/stores/useCartStore'
import { useFavoriteStore } from '@/stores/useFavoriteStore'
import { formatValue } from '@/utils/formatValue'
import heart from '../../assets/icons/heart.svg'
import heartFilled from '../../assets/icons/heart-filled.svg'
import BtnAdd from './CardBtn.vue'
const favoriteStore = useFavoriteStore()

const props = defineProps<{
  id: number
  nome: string
  categoria: string
  preco: number
  image: string
}>()
const { id, nome, categoria, preco, image } = props

const cartStore = useCartStore()

const isCartItem = computed(() =>
  cartStore.cart.some((item: { id: number }) => item.id === props.id),
)
const limitedName = computed(() =>
  props.nome.length > 20 ? props.nome.slice(0, 15) + '…' : props.nome,
)

const handleCartClick = () => {
  if (isCartItem.value) {
    cartStore.removeFromCart(props.id)
  } else {
    cartStore.addToCart({ id, nome, categoria, preco, image })
  }
}
</script>

<template>
  <div class="w-[150px] sm:w-[220px] rounded-lg shadow-lg">
    <div
      class="flex justify-center items-center size-[150px] sm:size-[220px] bg-gray rounded-t-lg p-2.5 relative"
    >
      <img class="size-full" :src="props.image" :alt="props.nome" />
      <button
        @click="favoriteStore.addToFavorites(props)"
        class="bg-white rounded-full p-2 absolute top-2 right-2"
        aria-label="Adicionar aos favoritos"
      >
        <img
          class="size-5"
          :src="favoriteStore.isFavorite(props.id) ? heartFilled : heart"
          alt="Icone coração"
        />
      </button>
    </div>
    <div class="flex flex-col items-center pt-4 sm:pt-7 pb-3.5 px-3 rounded-b-lg">
      <div class="flex flex-col gap-1 mb-2 sm:gap-3.5 w-full sm:mb-5">
        <h3 class="text-sm sm:text-lg font-semibold" :title="nome">{{ limitedName }}</h3>
        <h4 class="text-sm text-chateau-gray">{{ categoria }}</h4>
        <h5 class="text-base sm:text-lg font-semibold">{{ formatValue(preco) }}</h5>
      </div>
      <BtnAdd :cartItem="isCartItem" @click="handleCartClick">{{
        isCartItem ? 'Adicionado' : 'Adicionar'
      }}</BtnAdd>
    </div>
  </div>
</template>
