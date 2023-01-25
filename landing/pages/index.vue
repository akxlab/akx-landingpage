<script setup lang="ts">
import {useI18n} from "#imports";
import {useSwitchLocalePath} from "#i18n";
const { locale, locales, setLocale } = useI18n()
const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})



const { t } = useI18n()

</script>
<template>
  <v-container class="mt-12 pt-12" style="max-width:1600px;">

    <HomeHero />
    <HomePresale />
    <HomeSection1 />
    <HomeSection2 />
  </v-container>

</template>