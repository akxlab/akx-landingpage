<script lang="ts" setup>
import {onMounted, useI18n} from "#imports";
import {useOrderStore} from "~/stores/order";

const order = useOrderStore();

onMounted(async () => {
  await order.initBlankOrder({});
})

const { t } = useI18n()
</script>

<template>

  <v-card max-width="1600"  style="margin:0 auto;" class="pl-4 pr-4 pb-4 mt-1" color="transparent">
    <v-row>
      <v-col cols="12"  >
        <v-divider class="mb-6"></v-divider>
        <h2 class="hero-h2 mb-1 mt-12">
          <strong>{{t('home.presale-title2')}}</strong>
          {{t('home.presale-title')}}

        </h2>

      </v-col>
      <v-col cols="12">


        <PaymentSimple />
      </v-col>
    </v-row>
  </v-card>
  <v-divider></v-divider>
</template>