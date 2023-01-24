import * as THREE from 'three'

import WebGL from '@/class/three/WebGL'
import WebGLSub from '@/class/three/WebGLSub'


class Environment extends WebGLSub {
	debugFolder!: { [key: string]: any }
	sunLight!: THREE.DirectionalLight
	environmentMap: { [key: string]: any } = {}

	constructor() {
		super()

		// Debug
		if (WebGL.debug.active) this.debugFolder = WebGL.debug.addFolder('environment')

		this.setSunLight()
		this.setEnvironmentMap()

	}

	setSunLight() {
		this.sunLight = new THREE.DirectionalLight('#ffffff', 15)
		this.sunLight.castShadow = true
		this.sunLight.shadow.camera.far = -5
		this.sunLight.shadow.mapSize.set(512,512)
		this.sunLight.shadow.normalBias = 0.05
		this.sunLight.position.set(13.5, 5, 5.25)
		WebGL.scene.add(this.sunLight)


	}

	setEnvironmentMap() {
		this.environmentMap.intensity = 0.5
		this.environmentMap.texture = WebGL.resources.itemsLoaded['environmentMapTexture']
		this.environmentMap.texture.encoding = THREE.sRGBEncoding

		WebGL.scene.environment = this.environmentMap.texture

		this.environmentMap.updateMaterials = () => {
			WebGL.scene.traverse((child) => {
				if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
					child.material.envMap = this.environmentMap.texture
					child.material.envMapIntensity = this.environmentMap.intensity
					child.material.needsUpdate = true
				}
			})
		}
		this.environmentMap.updateMaterials()


	}
}

export default Environment
