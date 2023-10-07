<template>
  <component :is="tag">
    <slot />
  </component>
</template>

<script setup lang="ts">
defineProps({
  tag: {
    type: String,
    default: 'h2',
    validator(h: string) {
      return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(h)
    }
  }
})
</script>

<style lang="css" scoped>
h2 {
  @apply font-serif;
  @apply text-4xl;
}

h3 {
  @apply text-2xl;
}
</style>
