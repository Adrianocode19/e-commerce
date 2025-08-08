<script setup lang="ts">
import BtnAdd from './BtnAdd.vue'
</script>

<template>
  <footer
    class="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-1 bg-ebony gap-2.5 p-3 sm:px-36 sm:pt-16 sm:justify-items-center sm:mt-[35px]"
  >
    <div class="flex flex-col items-center sm:items-start sm:text-start text-center">
      <h3 class="text-white text-lg font-semibold">MinhaLoja</h3>
      <p class="text-chateau-gray text-base">
        Sua loja online de confiança para encontrar os melhores produtos com os melhores preços.
        Qualidade e segurança em cada compra.
      </p>
    </div>
    <div class="flex flex-col text-center sm:text-start">
      <h3 class="text-white text-lg font-semibold">Links</h3>
      <ul>
        <li><a href="#" class="text-chateau-gray">Inicio</a></li>
        <li><a href="#" class="text-chateau-gray">Produtos</a></li>
        <li><a href="#" class="text-chateau-gray">Sobre Nós</a></li>
        <li><a href="#" class="text-chateau-gray">Política de Privacidade</a></li>
      </ul>
    </div>
    <div class="flex flex-col items-center">
      <h3 class="text-white text-lg font-semibold">Fale Conosco</h3>
      <form class="flex flex-col gap-1.5 sm:gap-4 mt-2.5" action="submit">
        <input
          class="py-2.5 px-4 bg-oxford-blue rounded-lg text-base text-chateau-gray outline-none border-[1px] border-river-bed"
          type="text"
          placeholder="Seu nome"
        />
        <input
          class="py-2.5 px-4 bg-oxford-blue rounded-lg text-base text-chateau-gray outline-none border-[1px] border-river-bed"
          type="email"
          placeholder="Seu e-mail"
        />
        <input
          class="py-2.5 px-4 bg-oxford-blue rounded-lg text-base text-chateau-gray outline-none border-[1px] border-river-bed"
          type="tel"
          placeholder="Seu telefone"
        />
        <input
          class="py-2.5 px-4 bg-oxford-blue rounded-lg text-base text-chateau-gray outline-none border-[1px] border-river-bed"
          type="date"
          placeholder="Sua data de nascimento"
        />
        <textarea
          class="py-2.5 px-4 bg-oxford-blue rounded-lg text-base text-chateau-gray outline-none border-[1px] border-river-bed min-h-40"
          placeholder="Sua mensagem"
        ></textarea>
        <BtnAdd>Enviar Mensagem</BtnAdd>
      </form>
    </div>
    <div
      class="flex items-center justify-center sm:col-span-3 border-t border-oxford-blue pt-2.5 sm:pt-8 mt-2.5 text-chateau-gray text-sm w-full"
    >
      © 2024 MinhaLoja. Todos os direitos reservados.
    </div>
  </footer>
</template>
