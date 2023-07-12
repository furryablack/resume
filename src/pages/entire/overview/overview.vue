<template>
  <div class="h-full flex flex-col py-4 items-center overflow-y-auto">
    <div class="max-w-3xl flex flex-col">
      <UI.HeadLine class="mb-2" />
      <UI.ContactToMe class="mb-2" />
      <UI.SummaryInfo class="mb-2" />

      <UI.CareersList class="mb-1">
        <UI.CareerItem :career="lastCareer"  />
      </UI.CareersList>

      <UI.CareersList 
        class="mb-2" 
        :simple-view="true"
        :hideTitle="true"
      >
        <template 
          v-for="career in filteredCareers"
          :key="career.id"
        >
          <UI.CareerItem 
            :career="career" 
            :simple-view="true"
          />
        </template>
      </UI.CareersList>

      <UI.TechSkills />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { UI } from '@pages/entire/ui'; 
import { careers as careersStatic } from './careers';

const careers = ref(careersStatic.map((career, idx) => ({...career, id: +(`${(idx + 1)}${(idx + 2)}`) })))

const filteredCareers = computed(() => careers.value.splice(1));
const lastCareer = computed(() => careers.value[0]);
</script>