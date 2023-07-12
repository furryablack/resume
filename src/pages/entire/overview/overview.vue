<template>
  <div class="h-full flex flex-col pb-4 pt-6 items-center overflow-y-auto">
    <div class="max-w-3xl flex flex-col">
      <UI.HeadLine />
      <UI.ContactToMe />
      <UI.SummaryInfo />

      <div class="flex flex-col items-center justify-center -mt-3">
        <span class="italic font-semibold">Noiseless version of this resume</span>
        
        <SharedUI.NativeLink href="https://furryablack.github.io/noiseless-resume/">
          https://furryablack.github.io/noiseless-resume/
        </SharedUI.NativeLink>
      </div>

      <UI.CareersList>
        <UI.CareerItem :career="lastCareer"  />
      </UI.CareersList>

      <UI.CareersList 
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
import { Shared } from '@shared'; 
import { UI } from '@pages/entire/ui'; 
import { careers as careersStatic } from './careers';

const { UI: SharedUI } = Shared;
const careers = ref(careersStatic.map((career, idx) => ({...career, id: +(`${(idx + 1)}${(idx + 2)}`) })))
const filteredCareers = computed(() => careers.value.splice(1));
const lastCareer = computed(() => careers.value[0]);
</script>