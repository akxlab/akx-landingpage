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
  <v-container fluid>

  <!--<v-container class="ma-auto mt-6 pt-6" style="max-width:1900px; width:100%">-->

    <HomeHero />
    <HomePresale />
    <HomeSection1 />
    <HomeSection2 />
  </v-container>
  <!--</v-container>-->
  <CommonCookiebar />

</template>