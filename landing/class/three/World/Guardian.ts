import * as THREE from 'three'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

import WebGL from '../../../class/three/WebGL'
import WebGLSub from '../../../class/three/WebGLSub'

import { EntitiesName } from '~/constants/ENTITIES'

class Guardian extends WebGLSub {
	debugFolder: { [key: string]: any } | undefined
	resource: GLTF
	model!: THREE.Object3D
	animation!: { [key: string]: any }
	deltaTime = 0.1;

	constructor() {
		super()

		// Debug
		if (WebGL.debug.active) this.debugFolder = WebGL.debug.gui.addFolder('guardian')

		// Resource
		this.resource = WebGL.resources.itemsLoaded['guardianModel'] as GLTF

		this.setModel()
		this.setAnimation()
	}

	setModel() {
		this.model = this.resource.scene
		this.model.scale.set(0.8,0.75,0.7)
		this.model.position.setX(-1.7);
		this.model.position.setY(-2.8);
		this.model.name = EntitiesName.GUARDIAN
		this.model.receiveShadow = true;

		WebGL.scene.add(this.model)

		/*this.model.traverse((child) => {
			if (child instanceof THREE.Mesh) {
				child.castShadow = true
				// child.layers.set(EntitiesLayer[EntitiesName.FOX])
			}
		})*/
	}

	setAnimation() {
		this.animation = {}

		// Mixer
		this.animation.mixer = new THREE.AnimationMixer(this.model)

		// Actions
		this.animation.actions = {}

		this.animation.actions.idle = this.animation.mixer.clipAction(this.resource.animations[0])
		//this.animation.actions.walking = this.animation.mixer.clipAction(this.resource.animations[1])
		//this.animation.actions.running = this.animation.mixer.clipAction(this.resource.animations[2])

		this.animation.actions.current = this.animation.actions.idle
		this.animation.actions.current.play()

		// Play the action
		this.animation.play = (name: string) => {
			const newAction = this.animation.actions[name]
			const oldAction = this.animation.actions.current

			newAction.reset()
			newAction.play()
			newAction.crossFadeFrom(oldAction, 1)

			this.animation.actions.current = newAction
		}

	}

	debugParams() {
		return {
			animations: {
				playIdle: () => {
					this.animation.play('idle')
				},
				playWalking: () => {
					this.animation.play('walking')
				},
				playRunning: () => {
					this.animation.play('running')
				},
			},
		}
	}

	update(deltaTime: number) {
		this.animation.mixer.update(deltaTime * 0.0008)


		/*this.model.rotation.y += this.deltaTime;
		console.log(this.model.rotation.y);
		if(this.model.rotation.y > 0.4) {
			this.deltaTime = -0.001
		}
		if(this.model.rotation.y < -0.4) {
			this.deltaTime = 0.001
		}*/
	}
}

export default Guardian
