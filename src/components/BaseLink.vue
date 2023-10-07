<template>
  <a
    :href="url"
    class="underline hover:decoration-wavy"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
defineProps({
  url: {
    type: String,
    required: true
  }
})
</script>