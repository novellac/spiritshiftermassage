<template>
  <header
    class="flex flex-col items-center pt-8 pb-4"
    style="
      background-image: url(/src/assets/images/chakaHands.png);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    "
  >
    <img
      class="sr-only"
      src="../assets/images/chakaHands.png"
      alt="A person with dreadlocks and a masculine, sweatered chest extends their arms; two large, calloused brown hands comfortingly welcome the viewer."
    />

    <LogoAndName />

    <h1 class="max-w-screen-md mx-8 text-3xl text-center lg:text-4xl mt-36 text-brand-white">
      I help my clients <span class="font-serif">get shifted</span> and find their
      <span class="font-serif">inner peace</span>
    </h1>
    <ButtonLink class="mt-4 lg:mt-8 lg:mb-8" />
  </header>
  <section class="flex flex-col items-center">
    <h2 class="sr-only">About</h2>
    <div class="px-8 pt-16 prose text-brand-primary">
      <p>
        Step into the world of holistic healing with Spirit Shifter Massage, a wellness haven
        founded by the skilled massage therapist Chaka Bloodsaw. Established in 2010, Spirit Shifter
        Massage has been a trusted source of relaxation, rejuvenation, and recovery for clients
        across Michigan and Montana. With active licensure in both states and a range of specialized
        certifications, Chaka is committed to delivering tailored healing experiences.
      </p>
      <p>
        Located in the heart of Detroit, Spirit Shifter offers massages at their serene studio, or
        they can bring their healing touch to your preferred location. Whether you're an individual
        seeking personal wellness or an organization promoting employee well-being, SpiritShifter is
        your partner on the journey to vitality and balance.
      </p>
      <p>Services are available 7 days a week 11am-9pm EST.</p>
    </div>
    <ButtonLink is-brand class="mt-8 mb-16">Get shifted</ButtonLink>
  </section>
</template>

<script setup lang="ts">
import ButtonLink from './ButtonLink.vue'
import LogoAndName from './LogoAndName.vue'
</script>
