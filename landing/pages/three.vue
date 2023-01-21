<script setup lang="ts">

</script>
<style lang="scss" scoped>
.canvasHolder
 {
  position: relative;
overflow:hidden;
  width: 50vw;
  height: 100vh;
  pointer-events: all;
  z-index: 1;
}
</style>

<template>
  <div ref="canvasHolder" class="canvasHolder">
    <ThreeCanvas  />
  </div>
</template>