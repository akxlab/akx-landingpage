<script setup lang="ts">

</script>
<style lang="scss" scoped>
.canvasHolder,
.canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: all;
  z-index: 1;
}
</style>

<template>
  <div ref="canvasHolder" class="canvasHolder">
    <ThreeCanvas />
  </div>
</template>