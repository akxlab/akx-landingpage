import * as THREE from 'three'

import WebGL from '@/class/three/WebGL'
import WebGLSub from '@/class/three/WebGLSub'
import {

RenderPass
} from "three/examples/jsm/postprocessing/RenderPass";
import {FXAAShader} from "three/examples/jsm/shaders/FXAAShader";
import {ShaderPass} from "three/examples/jsm/postprocessing/ShaderPass";
import {EffectComposer} from "three/examples/jsm/postprocessing/EffectComposer";
import {CopyShader} from "three/examples/jsm/shaders/CopyShader";

class Renderer extends WebGLSub {
	instance: THREE.WebGLRenderer | null = null
	renderPass: any;


	constructor() {
		super()

		this.setInstance()
	//	this.setPost()
	}

	setInstance() {
		this.instance = new THREE.WebGLRenderer({
			canvas: WebGL.canvas,
			antialias: false
		})


		this.instance.physicallyCorrectLights = true
		this.instance.outputEncoding = THREE.sRGBEncoding
		this.instance.toneMapping = THREE.ACESFilmicToneMapping
		this.instance.toneMappingExposure = 1.5;
		this.instance.shadowMap.enabled = true;
		this.instance.shadowMap.type = THREE.PCFSoftShadowMap
		this.instance.setClearColor(0x111111, 1)
		this.instance.setSize(WebGL.sizes.width, WebGL.sizes.height)
		this.instance.setPixelRatio(WebGL.sizes.pixelRatio * 0.5)

	}

	onResize() {
		this.instance!.setSize(WebGL.sizes.width, WebGL.sizes.height)
		this.instance!.setPixelRatio(WebGL.sizes.pixelRatio)
	}

	onUpdate() {

		//@ts-ignore
		this.renderPass = new RenderPass(WebGL.scene, WebGL.camera.instance);
		this.renderPass.clearColor = new THREE.Color( 0, 0, 0 );
		this.renderPass.clearAlpha = 0;
		this.instance!.render(WebGL.scene, WebGL.camera.instance!);
		/*let fxaaPass = new ShaderPass( FXAAShader );
		const copyPass = new ShaderPass( CopyShader );
		// @ts-ignore
		let composer =  new EffectComposer( this.instance );
		composer.addPass( this.renderPass );
		composer.addPass( copyPass );
		const pixelRatio = this.instance!.getPixelRatio();

		// @ts-ignore
		fxaaPass.material.uniforms[ 'resolution' ].value.x = 2
		// @ts-ignore
		fxaaPass.material.uniforms[ 'resolution' ].value.y = 2
		// @ts-ignore
		const composer2 = new EffectComposer( this.instance );
		composer2.addPass( this.renderPass );
		composer2.addPass( fxaaPass );*/

	}

	setPost() {
		//@ts-ignore
		this.renderPass = new RenderPass(WebGL.scene, WebGL.camera.instance);
		this.renderPass.clearColor = new THREE.Color( 0, 0, 0 );
		this.renderPass.clearAlpha = 0;
		this.instance!.render(WebGL.scene, WebGL.camera.instance!);
		let fxaaPass = new ShaderPass( FXAAShader );
		const copyPass = new ShaderPass( CopyShader );
		// @ts-ignore
		let composer =  new EffectComposer( this.instance );
		composer.addPass( this.renderPass );
		composer.addPass( copyPass );
		const pixelRatio = this.instance!.getPixelRatio();

		// @ts-ignore
		fxaaPass.material.uniforms[ 'resolution' ].value.x = 1 ;
		// @ts-ignore
		fxaaPass.material.uniforms[ 'resolution' ].value.y = 1 ;
		// @ts-ignore
		const composer2 = new EffectComposer( this.instance );
		composer2.addPass( this.renderPass );
		composer2.addPass( fxaaPass );
	}

	destroy() {
		this.instance!.dispose()
	}
}

export default Renderer
