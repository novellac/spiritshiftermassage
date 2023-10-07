<template>
  <footer class="flex flex-col items-start px-8 py-8 theme--brand">
    <BaseHeading class="sr-only">Credits</BaseHeading>

    <LogoAndName />

    <p class="mt-4">Copyright 2023</p>
    <p>
      Abstract Patterns by Aiden Regalado
      <BaseLink url="https://thenounproject.com/browse/icons/term/abstract-pattern/">
        Noun Project
      </BaseLink>
      (CC BY 3.0)
    </p>
    <p>
      Ortica Linear font by
      <BaseLink url="https://www.collletttivo.it/">Collletttivo Type Foundry</BaseLink>.
    </p>
  </footer>
</template>

<script setup lang="ts">
import BaseHeading from './BaseHeading.vue'
import BaseLink from './BaseLink.vue'
import LogoAndName from './LogoAndName.vue'
</script>
