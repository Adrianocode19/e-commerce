<template>
  <button
    @click="$emit('click')"
    class="flex text-center justify-center w-full font-semibold text-white px-14 py-2.5 rounded-lg hover:bg-purple-600 transition-colors"
    :class="{
      'bg-green-600': cartItem,
      'bg-purple': !cartItem,
    }"
    type="button"
  >
    <slot />
  </button>
</template>
<script setup lang="ts">
defineProps<{
  cartItem: boolean
}>()
defineEmits<{
  click: []
}>()
</script>
