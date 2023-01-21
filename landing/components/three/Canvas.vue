<template>
	<canvas id="canvas" ref="canvas" class=" top-0 left-0 left-1  w-full z-1"></canvas>
</template>

<script setup lang="ts">
import WebGL from '../../class/three/WebGL'
import {onMounted, ref} from "#imports";

const canvas: { value: HTMLCanvasElement | null } = ref(null)

onMounted(() => {
	WebGL.setup(canvas.value)
})
</script>
