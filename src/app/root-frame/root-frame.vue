<template>
  <UI.PageFrame>
    <router-view />
  </UI.PageFrame>
</template>

<script setup>
import { Shared } from '@shared';

const { UI } = Shared;
</script>

<style lang="less">
@import "@shared/ui/setup-tailwind.less";
</style>
