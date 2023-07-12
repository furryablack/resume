<template>
  <div class="flex flex-col mb-1">
    <div class="flex flex-col mb-1">
      <div class="font-semibold text-lg underline">{{ career.spec }}</div>

      <div class="flex text-sm" :class="{'justify-between': !simpleView, 'flex-col': simpleView }">
        <div class="font-bold">{{ company }}</div>
        
        <div 
          class="italic items-center flex"
          :class="{ 'text-xs font-semibold': simpleView }"
        >
          {{ timeSpanWithLocation }}
        </div>
      </div>
    </div>

    <ul v-if="!simpleView">
      <li
        class="tracking-tight leading-4" 
        v-for="summary in career.summaries"
      > 
        <span class="block first-letter:font-semibold first-letter:text-lg first-letter:tracking-wider">{{ summary }}</span>
      </li>
    </ul>

    <div 
      v-else 
      class="text-sm first-letter:tracking-wider -mt-2 first-letter:text-lg first-letter:underline"
    >
      {{ simpleCareerSummary }}
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  career: Object,
  simpleView: Boolean,
});

const company = computed(() => `${props.career.companyName} (${props.career.companySpec})`);
const timeSpanWithLocation = computed(() => props.simpleView ? props.career.timeSpan : `${props.career.timeSpan} (${props.career.location})`);
const simpleCareerSummary = computed(() => props.career.summaries[0]);
</script>