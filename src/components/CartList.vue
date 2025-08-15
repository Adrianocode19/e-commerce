<script setup lang="ts">
import { useCartStore } from '@/stores/useCartStore'
import BtnAdd from './Card/MainBtn.vue'
import { formatValue } from '@/utils/formatValue'

const cartStore = useCartStore()

const FinishPurchase = () => {
  alert('Compra finalizada com sucesso!')
}
</script>

<template>
  <dialog
    v-if="cartStore.modal"
    class="flex justify-center items-center h-screen w-screen bg-[rgba(0,0,0,0.5)] fixed top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4"
  >
    <section class="bg-white h-[400px] w-11/12 sm:h-[500px] sm:w-[620px] rounded-lg shadow-md">
      <div
        class="flex justify-between w-full pt-4 pb-2 px-3 sm:pt-6 sm:pb-3.5 sm:px-3.5 border-b border-[#BBBBBB]"
      >
        <h4 class="sm:text-2xl font-bold">Meu Carrinho</h4>
        <button @click="cartStore.showModal" class="cursor-pointer">
          <img src="../assets/icons/close.svg" alt="Icone de fechar modal" />
        </button>
      </div>
      <div
        class="py-4 px-5 min-h-[250px] max-h-[250px] sm:py-8 sm:px-10 sm:max-h-[310px] sm:min-h-[310px] overflow-auto"
      >
        <div v-if="cartStore.cart.length > 0">
          <div
            v-for="item in cartStore.cart"
            :key="item.id"
            class="flex justify-between items-center pb-3.5 mb-3 border-b border-[#BBBBBB] last:border-0 last:mb-0 last:pb-0"
          >
            <div class="flex items-center gap-2.5 sm:gap-3.5">
              <div>
                <img class="size-10 sm:size-16" :src="item.image" :alt="item.nome" />
              </div>
              <div>
                <p class="text-sm sm:text-base font-semibold">{{ item.nome }}</p>
                <p class="text-sm sm:text-base font-semibold text-[#5B3EFD]">
                  {{ formatValue(item.preco) }}
                </p>
              </div>
            </div>
            <div class="flex items-center gap-3.5 sm:gap-[18px]">
              <button
                @click="item.quantidade > 1 ? item.quantidade-- : cartStore.removeFromCart(item.id)"
                class="flex items-center justify-center size-6 sm:size-8 bg-[#D9D9D9] rounded-full text-base font-bold text-center"
              >
                <img class="size-4" src="../assets/icons/minus.svg" alt="" />
              </button>
              <span>{{ item.quantidade }}</span>
              <button
                @click="item.quantidade++"
                class="flex items-center justify-center size-6 sm:size-8 bg-[#D9D9D9] rounded-full text-base font-bold text-center"
              >
                <img
                  class="size-4"
                  src="../assets/icons/plus.svg"
                  alt="Icone de aumentar quantidade"
                />
              </button>
            </div>
          </div>
        </div>
        <div v-else class="flex flex-col justify-center items-center">
          <p class="text-gray-500">Nenhum produto no carrinho :/</p>
        </div>
      </div>
      <div
        v-if="cartStore.cart.length > 0"
        class="flex flex-col gap-2.5 py-2 px-6 sm:py-4 sm:px-11 border-t border-[#BBBBBB]"
      >
        <div class="flex justify-between items-center">
          <p class="text-base sm:text-[18px] font-semibold">Total:</p>
          <p class="text-lg sm:text-2xl font-semibold text-[#5B3EFD]">
            {{ formatValue(cartStore.totalPrice) }}
          </p>
        </div>
        <div class="w-full">
          <BtnAdd @click="FinishPurchase">Finalizar Compra</BtnAdd>
        </div>
      </div>
    </section>
  </dialog>
</template>
