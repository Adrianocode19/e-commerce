<script setup lang="ts">
import FooterLayout from '@/Layout/FooterLayout.vue'
import DescriptionFooter from './DescriptionFooter.vue'
import FormFooter from './FormFooter.vue'
import LinksFooter from './LinksFooter.vue'
</script>

<template>
  <FooterLayout>
    <DescriptionFooter />
    <LinksFooter />
    <FormFooter />
    <div
      class="flex items-center justify-center sm:col-span-3 border-t border-oxford-blue pt-2.5 sm:pt-8 mt-2.5 text-chateau-gray text-sm w-full"
    >
      © 2024 MinhaLoja. Todos os direitos reservados.
    </div>
  </FooterLayout>
</template>
