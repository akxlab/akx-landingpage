<script setup lang="ts">
import {useI18n} from "#imports";




const { t } = useI18n()

</script>
<template>

  <v-card max-width="1900" width="100%" class="ml-auto mr-auto pa-12" style="margin-top:80px;" color="transparent">
    <v-row>
      <v-col cols="12" lg="5">
        <h1 class="hero-h1">

          {{t('home.heroh1-2')}}<br />
          {{t('home.heroh1-3')}}
        </h1>
        <p class="hero-text mt-6">
         {{t('home.cryptoquantumblurb')}}
                 </p>
      </v-col>
      <v-col cols="12" lg="7" align="right" class="atom-gradient">

       <!-- <v-icon size="400" color="#05b187" >fa-duotone fa-atom-simple</v-icon>-->
           <div ref="canvasHolder" class="canvasHolder">

             <ThreeCanvas />

           </div>

      </v-col>
      <v-col cols="12">
        <v-btn variant="outlined" class="gradient-border-2 btn-border-gradient pl-3 pr-3 mt-8" size="x-large" width="100%" color="#05b187"><span class="line-clamp-1">Get Notified when presale is available</span></v-btn>

      </v-col>
    </v-row>
  </v-card>

</template>
<style>
.canvasHolder, .canvas {
  position: relative;
  margin-top:0;
  margin-left:0;
display:block;
  width:100%;
  height: 100%;
  overflow:hidden;
  pointer-events: all;
  z-index: 1;
}

#canvas {
  width:100% !important;
  height:100% !important;
  display:block;
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
    background: linear-gradient(90deg,#18181b,#18181b),linear-gradient(to bottom right,#00dc82,#36e4da,#16a79e);
    background-clip: padding-box,border-box;
    background-origin: padding-box,border-box;
  }

  .hero-h1 {
    font-size:4.3rem;
    line-height: 4.6rem;
  }

  p.hero-text {
    font-size:1.5rem;
    line-height:2rem;
  }

  .atom-gradient{


display:block;
    overflow:hidden;

   /* -webkit-mask-image: radial-gradient(ellipse 60% 90% at 28% 78%, rgb(94, 167, 227) 20%, transparent 70%);*/
  /*mask-image: radial-gradient(ellipse 90% 80% at 48% 78%, black 40%, transparent 50%);
*/

  }

</style>