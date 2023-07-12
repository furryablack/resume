<template>
  <div class="flex flex-col items-start justify-center h-10">
    <ul class="w-full list-none text-left justify-center text-2xl font-semibold text-wrap">
      <li class="inline">Aleksei</li>
      <li class="inline px-1">+</li>
      <li class="inline">Kosianov</li>
      <li class="inline px-1">+</li>
      <li class="inline">Fronted</li>
      <li class="inline px-1">+</li>
      <li class="inline">Developer</li>
      
      <li class="inline italic text-sm text-gray-500">
        <span class="float-right pt-2">{{ lastUpdatedAt }}</span>
      </li>
    </ul>

    <div class="font-semibold text-lg">Seniour + Middle</div>
  </div>
</template>

<script setup>
const lastUpdatedAt = window.lastUpdatedAt;
</script>

