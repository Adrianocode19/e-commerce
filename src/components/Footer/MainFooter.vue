<script setup lang="ts">
import DescriptionFooter from './DescriptionFooter.vue'
import FormFooter from './FormFooter.vue'
import LinksFooter from './LinksFooter.vue'
</script>

<template>
  <footer
    class="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-1 bg-ebony gap-2.5 p-3 sm:px-36 sm:pt-16 sm:justify-items-center sm:mt-[35px]"
  >
    <DescriptionFooter />
    <LinksFooter />
    <FormFooter />
    <div
      class="flex items-center justify-center sm:col-span-3 border-t border-oxford-blue pt-2.5 sm:pt-8 mt-2.5 text-chateau-gray text-sm w-full"
    >
      © 2024 MinhaLoja. Todos os direitos reservados.
    </div>
  </footer>
</template>
