<script setup lang="ts">
import {useI18n} from "#imports";




const { t } = useI18n()

</script>
<template>

  <v-card max-width="1400" class="ml-auto mr-auto pa-12" style="margin-top:80px;" color="transparent">
    <v-row>
      <v-col cols="12" >
        <h2 class="hero-h2">

          {{t('home.section2-title')}}
          <strong>{{t('home.section2-title2')}}</strong>
        </h2>

      </v-col>

  <v-col cols="12">
    {{t('home.cryptoquantumblurb')}}
  </v-col>

      <v-col cols="12" class="mt-8">
        <v-row>
          <v-col cols="12" lg="4">
            <CommonFeatureCard title="Blockchains" :content="t('home.section1-id')" icon="fa-brands fa-ethereum" iconColor="primary" height="170" />
          </v-col>
          <v-col cols="12" lg="4">
            <CommonFeatureCard title="Programming" :content="t('home.section1-brand')" icon="fa-thin fa-code-simple" iconColor="#00DC82FF" height="170" />
          </v-col>
          <v-col cols="12" lg="4">
            <CommonFeatureCard title="Smart Contracts" :content="t('home.section1-auth')" icon="fa-thin fa-file-contract" iconColor="#00DC82FF"  />
          </v-col>
          <v-col cols="12" lg="4">
            <CommonFeatureCard title="Cloud" :content="t('home.soon-txt')" icon="fa-brands fa-aws" iconColor="#00DC82FF" />
          </v-col>


          <v-col cols="12" lg="4">
            <CommonFeatureCard title="Algorithms" :content="t('home.soon-txt')" icon="fa-thin fa-function" iconColor="#00DC82FF" />
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
<style>

.line-clamp-1 {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  overflow: hidden;
  font-size: 1.5rem;
}
.gradient-border-2 {
  border: 2px solid transparent;
}

.btn-border-gradient {
  background: linear-gradient(90deg,#18181b,#18181b),linear-gradient(to bottom right,#00dc82,#36e4da,#16a79e);
  background-clip: padding-box,border-box;
  background-origin: padding-box,border-box;
}

.hero-h2 {
  font-size:3rem;
  line-height: 1rem;
}

.hero-h2 strong {
  color: #00DC82FF;
}

.hero-text {
  font-size:1.2rem;
  line-height:2rem;
}

.atom-gradient{

  height:400px;
  width:100%;

  text-align:center;
  margin-right:-180px;

  -webkit-mask-image: radial-gradient(ellipse 60% 90% at 28% 78%, rgb(94, 167, 227) 20%, transparent 90%);
  /*  mask-image: radial-gradient(ellipse 90% 80% at 48% 78%, black 40%, transparent 50%);
    right:-50px;*/

}

</style>