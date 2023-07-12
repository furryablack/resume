<template>
  <div class="flex flex-col mb-4">
    <div v-if="!hideTitle">
      <h3 class="text-xl text-left font-semibold mb-1">[Experience]</h3>
    </div>

    <div 
      class="grid grid-rows-auto items-start gap-y-1 gap-x-4"
      :class="{ 'grid-cols-2': simpleView, 'grid-cols-1': !simpleView }"  
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  simpleView: Boolean,
  hideTitle: Boolean,
});
</script>