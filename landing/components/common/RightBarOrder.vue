<template>

    <v-navigation-drawer theme="dark" location="right" v-model="showBar" temporary  style="max-width:100%;width:100%;height:100vh;overflow:hidden" color="rgba(0,0,0,0.8)"   app>


          <v-container class="ml-auto mr-auto" style="max-width:1600px">
            <v-row justify="center">
              <v-col cols="12">
                <v-card style="margin-top:80px">
                  <v-card-text>
                   <slot />
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row></v-container>


    </v-navigation-drawer>

</template>
<script setup lang="ts">

import {onMounted, ref, watch} from "#imports";
import {useNuxtApp, useState} from "#app";
const app = useNuxtApp();



const showBar = useState('show_bar', () => false);

onMounted(async () => {

  app.$bus.$on('show_bar', (val: boolean) => {
    showBar.value = val;
  })


})

</script>