<template>
  <button
    @click="$emit('click')"
    class="w-full font-semibold text-white bg-purple sm:px-14 py-2.5 rounded-lg hover:bg-purple-600 transition-colors"
    type="button"
  >
    <slot />
  </button>
</template>
<script setup lang="ts">
defineEmits<{
  click: []
}>()
</script>
