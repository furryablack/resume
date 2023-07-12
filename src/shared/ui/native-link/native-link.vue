<template>
  <a 
    :href="href"
    class="text-cyan-700 cursor-pointer"
    target="_blank"
    :download="download"
  >
    <slot />
  </a>
</template>

<script setup>
const props = defineProps({
  href: String,

  download: {
    type: String,
    default: undefined,
  }
});
</script>