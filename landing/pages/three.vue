<script setup lang="ts">

</script>
<style lang="scss" scoped>
.canvasHolder
 {
  position: relative;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  pointer-events: all;
  z-index: 1;
}
</style>

<template>
  <div ref="canvasHolder" class="canvasHolder">
    <ThreeCanvas style="position:absolute;top:0;left:10%;margin:0 auto;width:100%;" />
  </div>
</template>