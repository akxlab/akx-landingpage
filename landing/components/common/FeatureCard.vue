<script setup lang="ts">

const props = defineProps ({
  title: {
    type: String
  },
  content: {
    type: String
  },
  icon: {
    type: String
  },
  iconColor: {
    type: String
  },
  height: {
    type: String
  }
})

</script>

<template>
  <v-card variant="outlined" color="#b1b1b1" width="100%" height="auto" align="center" class="pa-8">
   <div style="height:150px;"><v-avatar variant="outlined" size="100" class="mt-8 mb-12" :color="props.iconColor">
      <v-icon size="50">{{props.icon}}</v-icon>
    </v-avatar></div>
    <v-card-title><h3 class="h3-feature sofia-pro-bold">{{props.title}}</h3></v-card-title>

    <v-card-text :style="`height:${height}px`">{{props.content}}</v-card-text>
  </v-card>
</template>

<style>

  .h3-feature {
    font-size:2rem;
  }

</style>