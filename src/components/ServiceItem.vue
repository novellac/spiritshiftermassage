<template>
  <component :is="tag">
    <div class="flex items-center gap-4 mb-3">
      <slot name="icon" />
      <BaseHeading tag="h3">
        <slot name="heading" />
      </BaseHeading>
    </div>

    <div class="max-w-prose">
      <slot name="description" />
    </div>
  </component>
</template>

<script setup lang="ts">
import BaseHeading from './BaseHeading.vue'

defineProps({
  tag: {
    type: String,
    default: 'li'
  }
})
</script>
