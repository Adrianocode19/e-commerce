<script setup lang="ts">
import { useCartStore } from '@/stores/useCartStore'
import BtnAdd from './BtnAdd.vue'

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
    <section class="bg-white h-[500px] w-[620px] rounded-lg shadow-md">
      <div class="flex justify-between w-full pt-6 pb-3.5 px-3.5 border-b border-[#BBBBBB]">
        <h4 class="text-2xl font-bold">Meu Carrinho</h4>
        <button @click="cartStore.showModal" class="cursor-pointer">
          <img src="../assets/icons/close.svg" alt="Icone de fechar modal" />
        </button>
      </div>
      <div class="py-8 px-10 max-h-[310px] min-h-[310px] overflow-auto">
        <div
          v-for="item in cartStore.cart"
          :key="item.id"
          class="flex justify-between items-center pb-3.5 mb-3 border-b border-[#BBBBBB] last:border-0 last:mb-0 last:pb-0"
        >
          <div class="flex items-center gap-3.5">
            <div>
              <img class="size-16" :src="item.image" alt="" />
            </div>
            <div>
              <p class="text-base font-semibold">{{ item.nome }}</p>
              <p class="text-base font-semibold text-[#5B3EFD]">R$ {{ item.preco.toFixed(2) }}</p>
            </div>
          </div>
          <div class="flex items-center gap-[18px]">
            <button
              @click="item.quantidade > 1 ? item.quantidade-- : cartStore.removeFromCart(item.id)"
              class="flex items-center justify-center size-8 bg-[#D9D9D9] rounded-full text-base font-bold text-center"
            >
              <img class="size-4" src="../assets/icons/minus.svg" alt="" />
            </button>
            <span>{{ item.quantidade }}</span>
            <button
              @click="item.quantidade++"
              class="flex items-center justify-center size-8 bg-[#D9D9D9] rounded-full text-base font-bold text-center"
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
      <div class="flex flex-col gap-4 pt-4 pb-4 px-11 border-t border-[#BBBBBB]">
        <div class="flex justify-between items-center">
          <p class="text-[18px] font-semibold">Total:</p>
          <p class="text-2xl font-semibold text-[#5B3EFD]">
            R$ {{ cartStore.totalPrice.toFixed(2) }}
          </p>
        </div>
        <div class="w-full">
          <BtnAdd @click="FinishPurchase">Finalizar Compra</BtnAdd>
        </div>
      </div>
    </section>
  </dialog>
</template>
