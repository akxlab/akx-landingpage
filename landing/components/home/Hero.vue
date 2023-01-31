<script setup lang="ts">
import {useI18n} from "#imports";




const { t } = useI18n()

</script>
<template>

  <v-card max-width="1600" width="100%" class="ml-auto mr-auto pa-8" style="margin-top:80px;" color="transparent">
    <v-row>
      <v-col cols="12" lg="6">
        <h1 class="hero-h1 mt-12">

          {{t('home.heroh1-2')}}<br />
          {{t('home.heroh1-3')}}
        </h1>
        <p class="hero-text mt-8 pr-12 pl-6">
         {{t('home.cryptoquantumblurb')}}
                 </p>
      </v-col>
      <v-col cols="12" lg="6" align="right" class="atom-gradient">

       <!-- <v-icon size="400" color="#05b187" >fa-duotone fa-atom-simple</v-icon>-->
           <div ref="canvasHolder" class="canvasHolder" style="max-width:100%;  min-height:400px;min-width:400px;width:100%;height:100%;">



      </div>

      </v-col>

    </v-row>
  </v-card>

</template>
<style>

@media (max-width:400px) {
  .canvasHolder, .atom-gradient {
    display:none;
  }


  .hero-h2 {
    font-size:2rem;
    line-height: 3rem;
  }

  .hero-h2 strong {
    color: #00DC82FF;
  }

}

@media (min-width:1600px) {

  .hero-h2 {
    font-size:3rem;

  }

  .hero-h2 strong {
    color: #00DC82FF;
  }


  .canvasHolder, .canvas {
    position: relative;
    margin-top: 0;
    margin-left: 0;
    display: block;

    overflow: visible;
    pointer-events: all;
    z-index: 1;
    text-align: center;
  }

  #canvas {
    width: 100% !important;
    height: 100% !important;
    display: block;
  }


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
    background: linear-gradient(90deg, #18181b, #18181b), linear-gradient(to bottom right, #00dc82, #36e4da, #16a79e);
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
  }

  .hero-h1 {
    font-size: 4.3rem;
    line-height: 4.6rem;
  }

  p.hero-text {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .atom-gradient {


    display: block;
    overflow: hidden;

    -webkit-mask-image: radial-gradient(ellipse 60% 90% at 28% 78%, rgb(94, 167, 227) 60%, transparent 90%);
    mask-image: radial-gradient(ellipse 90% 80% at 48% 78%, black 40%, transparent 50%);


  }
}

</style>