<template>
  <div class="flex flex-col items-start justify-center h-10">
    <ul class="w-full list-none text-left justify-center text-2xl font-semibold text-wrap">
      <li class="inline">Aleksei</li>
      <li class="inline px-1">+</li>
      <li class="inline">Kosianov</li>
      <li class="inline px-1">+</li>
      <li class="inline">Frontend</li>
      <li class="inline px-1">+</li>
      <li class="inline">Developer</li>
      
      <li class="inline italic text-sm text-gray-500">
        <span class="float-right pt-2">updated at: {{ lastUpdatedAt }}
          ::
          <UI.NativeLink 
            href="/resume/resume.pdf"
            download="Aleksei+K+Front-end+Developer.pdf"
          >
            download 
          </UI.NativeLink>
        </span>
      </li>
    </ul>

    <div class="font-semibold text-lg">Seniour + Middle</div>
  </div>
</template>

<script setup>
import { Shared } from '@shared';

const { UI } = Shared;
const lastUpdatedAt = window.lastUpdatedAt;
</script>

