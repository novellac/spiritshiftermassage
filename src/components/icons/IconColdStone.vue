<template>

  <svg width="30" height="30" viewBox="0 0 30 30" 
    fill="currentColor"
    :class="fillColor"
   xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_74_616)">
      <path
        d="M0 0V15H15C15 11.0218 13.4196 7.20644 10.6066 4.3934C7.79356 1.58035 3.97825 0 0 0Z"
      />
      <path
        d="M0 30H15V15C11.0218 15 7.20644 16.5804 4.3934 19.3934C1.58035 22.2064 0 26.0218 0 30Z"
      />
      <path
        d="M30 30V15H15C15 18.9782 16.5804 22.7936 19.3934 25.6066C22.2064 28.4196 26.0218 30 30 30Z"
      />
      <path
        d="M30 0H15V15C18.9782 15 22.7936 13.4196 25.6066 10.6066C28.4196 7.79356 30 3.97825 30 0Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_74_616">
        <rect width="30" height="30" fill="currentColor" />
      </clipPath>
    </defs>
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
