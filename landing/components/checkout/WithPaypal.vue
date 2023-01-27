<script setup lang="ts">
import {useNuxtApp, useState} from "#app";

const app = useNuxtApp();
const showModal = useState('show_paypal_modal', () => false);
//@ts-ignore





</script>

<template>

  <v-dialog persistent v-model="showModal" min-width="50%" max-width="50%" width="100%">
    <v-card theme="dark">
      <v-card-title>BUY AKX WITH PAYPAL OR DEBIT / CREDIT CARD</v-card-title>
      <v-divider class="mt-4"></v-divider>
      <v-card-text>

        <slot />

      </v-card-text>
    </v-card>
  </v-dialog>
</template>