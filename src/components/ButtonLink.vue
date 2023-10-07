<template>
  <a
    :href="url"
    :class="
      isBrand ? 'border-brand-primary text-brand-primary' : 'border-brand-white text-brand-white'
    "
    class="inline-block py-2 font-serif border px-14"
  >
    <slot>Book now</slot>
  </a>
</template>

<script setup lang="ts">
defineProps({
  url: {
    type: String,
    default: 'https://calendly.com/spiritshifter'
  },
  isBrand: {
    type: Boolean,
    default: false
  }
})
</script>
