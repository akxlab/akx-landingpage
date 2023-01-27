<template>
  <NuxtLayout>
    <NuxtLoadingIndicator></NuxtLoadingIndicator>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import {useHead} from "#app";

useHead({
  titleTemplate: '%s - AKX ECOSYSTEM',
  title: 'Future-proof identity & assets security',
  meta: [{
    charset: 'utf-8'
  }, {
    name:"viewport",
    content: "width=device-width, initial-scale=1"
  }]
})
</script>