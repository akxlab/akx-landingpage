<script lang="ts" setup>
</script>
<template>

  <v-app-bar  elevation="0" height="60" style="border-bottom:rgba(255,255,255,0.1) 1px solid;" class="horizontaTopbar app-bar-top" color="transparent" >
    <div >
      <div>
        <div class="d-flex" > <img src="~/assets/akx-logo-x.svg" width="80" height="50" @click="window.location.href = '/'" />
          <img src="~/assets/akx-logo-text.svg" class="pl-3 hidden-md-and-down" width="80" /></div>
      </div></div>
    <v-spacer></v-spacer>
    <CommonLangSwitcher />

    <v-app-bar-nav-icon ><v-icon>fa-light fa-circle-ellipsis</v-icon></v-app-bar-nav-icon>
  </v-app-bar>

</template>

<style>

  .app-bar-top {
    margin-top:0;
  }


</style>