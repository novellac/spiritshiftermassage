<template>
  <svg width="31" height="30" viewBox="0 0 31 30" fill="currentColor" :class="fillColor" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.1066 10.6066C8.29356 13.4196 4.47825 15 0.5 15V0H15.5C15.5 3.97825 13.9196 7.79356 11.1066 10.6066ZM30.5 15V0H15.5C15.5 3.97825 17.0804 7.79356 19.8934 10.6066C22.7064 13.4196 26.5218 15 30.5 15ZM15.5 30C15.5 26.0218 13.9196 22.2064 11.1066 19.3934C8.29356 16.5804 4.47825 15 0.5 15V30H15.5ZM15.5 30H30.5V15C26.5218 15 22.7064 16.5804 19.8934 19.3934C17.0804 22.2064 15.5 26.0218 15.5 30Z"
    />
  </svg>
</template>

<script setup lang="ts">
  defineProps({
    fillColor: {
      type: String,
      default: 'fill-brand-primary'
    }
  })
</script>
