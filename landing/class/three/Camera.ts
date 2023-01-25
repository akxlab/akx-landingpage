import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import WebGL from '@/class/three/WebGL'
import WebGLSub from '@/class/three/WebGLSub'

import { EntitiesLayer } from '@/constants/ENTITIES'

class Camera extends WebGLSub {
	instance: THREE.PerspectiveCamera | null = null
	controls: OrbitControls | null = null

	constructor() {
		super()

		this.setInstance()
		this.setControls()
	}

	setInstance() {
		this.instance = new THREE.PerspectiveCamera(30, WebGL.sizes.width / WebGL.sizes.height, 0.5, 1000)
		this.instance.position.set(1, 2.5, 8)
		WebGL.scene.add(this.instance)
	}

	enableLayers(layerId: EntitiesLayer) {
		this.instance.layers.enable(layerId)
	}

	setControls() {
		this.controls = new OrbitControls(this.instance!, WebGL.canvas)
		this.controls.enableDamping = false;
		this.controls.enabled = false;
	}

	onResize() {
		this.instance!.aspect = WebGL.sizes.width * WebGL.sizes.height;
		this.instance!.updateProjectionMatrix()
	}

	onUpdate() {
		this.controls!.update()
	}

	destroy() {
		this.controls!.dispose()
	}
}

export default Camera
