<template>
	<canvas id="canvas" ref="canvas" class="fixed top-0 left-0 h-full w-full z-0"></canvas>
</template>

<script setup lang="ts">
import WebGL from '../../class/three/WebGL'
import {onMounted, ref} from "#imports";

const canvas: { value: HTMLCanvasElement | null } = ref(null)

onMounted(() => {
	WebGL.setup(canvas.value)
})
</script>
