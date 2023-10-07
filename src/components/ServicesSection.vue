<template>
  <section class="flex flex-col items-center justify-center px-8 py-16 theme--brand">
    <BaseHeading class="mb-10 text-center lg:mb-20">Services</BaseHeading>

    <ul class="flex flex-col items-start justify-center gap-10 prose lg:gap-8 lg:flex-row lg:flex-nowrap">
      <ServiceItem class="lg:max-w-xs">
        <template #heading>Hot Stone Therapy</template>
        <template #icon><IconHotStone fill-color="fill-brand-white" /></template>
        <template #description>
          <p>
            Heated basalt stones are carefully placed on key energy points of your body, melting
            away tension, promoting circulation, and leaving you in a state of pure relaxation
          </p>
        </template>
      </ServiceItem>

      <ServiceItem class="lg:max-w-xs">
        <template #heading>Cold Stone Therapy</template>
        <template #icon><IconColdStone fill-color="fill-brand-white" /></template>
        <template #description>
          <p>
            Designed to invigorate your senses, chilled stones are applied to specific areas of your
            skin, leaving you revitalized and refreshed.
          </p>
        </template>
      </ServiceItem>

      <ServiceItem class="lg:max-w-xs">
        <template #heading>Sports Rehabilitation</template>
        <template #icon><IconSports fill-color="fill-brand-white" /></template>
        <template #description>
          <p>
            Our goal is to optimize your recovery, reduce pain, and enhance overall athletic
            performance, ensuring you can get back in the game stronger than ever.
          </p>
        </template>
      </ServiceItem>

      <ServiceItem class="lg:max-w-xs">
        <template #heading>Reiki</template>
        <template #icon><IconReiki fill-color="fill-brand-white" /></template>
        <template #description>
          <p>
            Experience the profound balancing effects of Reiki. Let the gentle, non-invasive touch
            of this service promote natural healing and leave you feeling rejuvenated and
            spiritually aligned.
          </p>
        </template>
      </ServiceItem>
    </ul>

    <ButtonLink class="mt-8" />
  </section>
</template>

<script setup lang="ts">
import BaseHeading from './BaseHeading.vue'
import ButtonLink from './ButtonLink.vue'
import ServiceItem from './ServiceItem.vue'

import IconHotStone from './icons/IconHotStone.vue'
import IconColdStone from './icons/IconColdStone.vue'
import IconSports from './icons/IconSports.vue'
import IconReiki from './icons/IconReiki.vue'
</script>
