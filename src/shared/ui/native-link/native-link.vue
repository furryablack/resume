<template>
  <a 
    :href="href"
    class="text-cyan-700 cursor-pointer"
    target="_blank"
  >
    <slot />
  </a>
</template>

<script setup>
const props = defineProps({
  href: String,
});
</script>