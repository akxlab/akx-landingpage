<script lang="ts" setup>
import {useLocaleHead, useSwitchLocalePath} from "#i18n";
import {computed, useI18n} from "#imports";

const { t } = useI18n()
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
});


</script>
<template>
  <v-app theme="dark">
    <CommonAppBar />

    <slot  />

  </v-app>
</template>