<script setup lang="ts">

const {
  cookiesEnabled,
  cookiesEnabledIds,
  isConsentGiven,
  isModalActive,
  moduleOptions
} = useCookieControl()
</script>

<template>
  <CookieControl locale="en" />
</template>