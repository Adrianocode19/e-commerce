<script setup lang="ts">
import { computed } from 'vue'
import { defineProps } from 'vue'
import { useCartStore } from '@/stores/useCartStore'
import { useFavoriteStore } from '@/stores/useFavoriteStore'
import { formatValue } from '@/utils/formatValue'
import heart from '../../assets/icons/heart.svg'
import heartFilled from '../../assets/icons/heart-filled.svg'
import BtnAdd from './CardBtn.vue'
import type { IProduct } from '@/types/IProduct'
const favoriteStore = useFavoriteStore()

const props = defineProps<IProduct>()
const { id, title, category, price, image } = props

const cartStore = useCartStore()

const isCartItem = computed(() =>
  cartStore.cart.some((item: { id: number }) => item.id === props.id),
)
const limitedName = computed(() => (title.length > 20 ? title.slice(0, 15) + '…' : title))

const handleCartClick = () => {
  if (isCartItem.value) {
    cartStore.removeFromCart(props.id)
  } else {
    cartStore.addToCart({ id, title, category, price, image })
  }
}
</script>

<template>
  <div class="w-[150px] sm:w-[220px] rounded-lg shadow-lg">
    <div
      class="flex justify-center items-center size-[150px] sm:size-[220px] bg-gray rounded-t-lg p-2.5 relative"
    >
      <img class="size-full" :src="props.image" :alt="props.title" />
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
        <h3 class="text-sm sm:text-lg font-semibold" :title="title">{{ limitedName }}</h3>
        <h4 class="text-sm text-chateau-gray">{{ category }}</h4>
        <h5 class="text-base sm:text-lg font-semibold">{{ formatValue(price) }}</h5>
      </div>
      <BtnAdd :cartItem="isCartItem" @click="handleCartClick">{{
        isCartItem ? 'Adicionado' : 'Adicionar'
      }}</BtnAdd>
    </div>
  </div>
</template>
