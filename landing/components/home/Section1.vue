<script setup lang="ts">
import {useI18n} from "#imports";




const { t } = useI18n()

</script>
<template>

  <v-card max-width="1400" class="ml-auto mr-auto pa-12" style="margin-top:80px;" color="transparent">
    <v-row>
      <v-col cols="12" >
        <h2 class="hero-h2">

          {{t('home.section1-title')}}
          <strong>{{t('home.section1-title2')}}</strong>
        </h2>

      </v-col>

  <v-col cols="12">
    {{t('home.cryptoquantumblurb')}}
  </v-col>

      <v-col cols="12" class="mt-8">
        <v-row>
          <v-col cols="12" lg="4">
            <CommonFeatureCard title="User Identity" :content="t('home.section1-id')" icon="fa-thin fa-user" iconColor="primary" height="170" />
          </v-col>
          <v-col cols="12" lg="4">
            <CommonFeatureCard title="Brands & Products" :content="t('home.section1-brand')" icon="fa-thin fa-chart-user" iconColor="#00DC82FF" height="170" />
          </v-col>
          <v-col cols="12" lg="4">
            <CommonFeatureCard title="Authenticity Proving" :content="t('home.section1-auth')" icon="fa-thin fa-stamp" iconColor="#00DC82FF"  />
          </v-col>
          <v-col cols="12" lg="4">
            <CommonFeatureCard title="Patents Ownership" :content="t('home.soon-txt')" icon="fa-thin fa-flask" iconColor="#00DC82FF" />
          </v-col>


          <v-col cols="12" lg="4">
            <CommonFeatureCard title="Copyright Protection" :content="t('home.soon-txt')" icon="fa-thin fa-copyright" iconColor="#00DC82FF" />
          </v-col>
          <v-col cols="12" lg="4">
            <CommonFeatureCard title="Offline & Retail" :content="t('home.soon-txt')" icon="fa-thin fa-store-lock" iconColor="#00DC82FF" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-btn variant="outlined" class="gradient-border-2 btn-border-gradient pl-3 pr-3 mt-8" size="x-large" width="100%" color="#05b187"><span class="line-clamp-1">{{ t('common.whitepaper_uri_txt') }}</span></v-btn>

          </v-col>
        </v-row>
      </v-col>


    </v-row>
  </v-card>

</template>
