<script lang="ts" setup>
import {useI18n} from "#imports";




const { t } = useI18n()
</script>

<template>
  <v-card max-width="1600"  style="padding-top:30px;margin:0 auto;" class="pa-12" color="transparent">
    <v-row>
      <v-col cols="12" class="pa-5" >
        <h2 class="hero-h2 mb-8">

          {{t('home.presale-title')}}
          <strong>{{t('home.presale-title2')}}</strong>
        </h2>

      </v-col>
      <v-col cols="12">


        <PaymentSimple />
      </v-col>
    </v-row>
  </v-card>
  <v-divider></v-divider>
</template>