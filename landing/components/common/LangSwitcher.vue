<script setup lang="ts">
import {computed, onMounted, useI18n} from "#imports";
import {useSwitchLocalePath} from "#i18n";
import {useState} from "#app";

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const lang = useState('lang_active', () => 'en');
const availableLocales = computed(() => {
  // @ts-ignore
  return (locales.value).filter(i => i.code !== locale.value)
})

const dataCodes = [];
const dataValues = [];

const lang_selector = useState('lang_selector', () => '')

onMounted(async () => {
  for(let i = 0; i < availableLocales.value.length; i++) {
    dataCodes.push(availableLocales.value[i].code);
    dataValues.push(availableLocales.value[i].values);
  }
})

</script>
<template>

  <div>
    <v-menu anchor="bottom end" origin="auto" max-width="800" ref="lang_selector">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" color="white" prepend-icon="fa-solid fa-language">Language: <strong style="color:#03c9d7;text-transform:uppercase;" class="sofia-pro-bold">{{locale}}</strong></v-btn>
      </template>

      <v-list class="pa-5" elevation="10" rounded="lg">


        <v-list-item

            class="my-2 pa-3"
            v-for="locale in availableLocales" :key="locale.code"
            :title="locale.code"
            :to="switchLocalePath(locale.code)"

        />
      </v-list>

    </v-menu>
  </div>

</template>