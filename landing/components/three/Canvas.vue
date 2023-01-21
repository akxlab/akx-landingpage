<template>
	<canvas id="canvas" ref="canvas"  ></canvas>
</template>

<script setup lang="ts">
import WebGL from '../../class/three/WebGL'
import {onMounted, ref} from "#imports";

const canvas: { value: HTMLCanvasElement | null } = ref(null)

onMounted(() => {
	WebGL.setup(canvas.value)
})
</script>
