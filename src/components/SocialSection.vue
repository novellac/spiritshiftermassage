<template>
  <section class="flex flex-col items-center px-8 py-16">
    <BaseHeading class="flex flex-col text-center">Instagram</BaseHeading>

    <BaseLink class="font-serif text-2xl" url="https://www.instagram.com/spiritshifter_massage/">
      @spiritshifter_massage
    </BaseLink>

    <ButtonLink is-brand class="mt-8" url="https://www.instagram.com/spiritshifter_massage/">
      Follow us
    </ButtonLink>

    <div class="max-w-prose h-[370px] md:h-[580px] w-full mt-10">
      <iframe
        title="Spirit Shifter Massage Instagram"
        width="100%"
        height="100%"
        src="https://www.instagram.com/spiritshifter_massage/embed"
        frameborder="0"
      ></iframe>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseHeading from './BaseHeading.vue'
import BaseLink from './BaseLink.vue'
import ButtonLink from './ButtonLink.vue'
</script>
