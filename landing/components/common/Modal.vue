<script setup>


import {useState} from "#app";

const showDialog = useState('show_dialog', () => false);
onMounted(async () => {

  const app = useNuxtApp();
  app.$bus.$on('open_dialog', () => {
    showDialog.value = true;
  });

  app.$bus.$on('close_dialog', () => {
    showDialog.value = false;
  })

})

function close() {
  showDialog.value = false;
}

</script>
<template>
  <v-dialog v-model="showDialog" :key="title" width="100%" min-width="360" max-width="800">

    <v-card class="pa-8">
      <v-card-title>
        {{title}}
      </v-card-title>
      <v-card-text>
          <slot />
      </v-card-text>
      <v-card-actions>
        <v-btn variant="elevated" prepend-icon="fa-duotone fa-circle-xmark" @click="showDialog = false" size="large" width="100%">close </v-btn>

      </v-card-actions>
    </v-card>

  </v-dialog>
</template>