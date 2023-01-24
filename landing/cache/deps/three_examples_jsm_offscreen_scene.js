import {
  CanvasTexture,
  Color,
  Fog,
  Group,
  IcosahedronGeometry,
  ImageBitmapLoader,
  Mesh,
  MeshMatcapMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from "./chunk-O66LVNQA.js";
import "./chunk-HRVARA6P.js";

// node_modules/three/examples/jsm/offscreen/scene.js
var camera;
var scene;
var renderer;
var group;
function init(canvas, width, height, pixelRatio, path) {
  camera = new PerspectiveCamera(40, width / height, 1, 1e3);
  camera.position.z = 200;
  scene = new Scene();
  scene.fog = new Fog(4473958, 100, 400);
  scene.background = new Color(4473958);
  group = new Group();
  scene.add(group);
  var loader = new ImageBitmapLoader().setPath(path);
  loader.setOptions({ imageOrientation: "flipY" });
  loader.load("textures/matcaps/matcap-porcelain-white.jpg", function(imageBitmap) {
    var texture = new CanvasTexture(imageBitmap);
    var geometry = new IcosahedronGeometry(5, 8);
    var materials = [
      new MeshMatcapMaterial({ color: 11150559, matcap: texture }),
      new MeshMatcapMaterial({ color: 6315408, matcap: texture }),
      new MeshMatcapMaterial({ color: 14699071, matcap: texture }),
      new MeshMatcapMaterial({ color: 14877782, matcap: texture })
    ];
    for (var i = 0; i < 100; i++) {
      var material = materials[i % materials.length];
      var mesh = new Mesh(geometry, material);
      mesh.position.x = random() * 200 - 100;
      mesh.position.y = random() * 200 - 100;
      mesh.position.z = random() * 200 - 100;
      mesh.scale.setScalar(random() + 1);
      group.add(mesh);
    }
    renderer = new WebGLRenderer({ antialias: true, canvas });
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(width, height, false);
    animate();
  });
}
function animate() {
  group.rotation.y = -Date.now() / 4e3;
  renderer.render(scene, camera);
  if (self.requestAnimationFrame) {
    self.requestAnimationFrame(animate);
  } else {
  }
}
var seed = 1;
function random() {
  var x = Math.sin(seed++) * 1e4;
  return x - Math.floor(x);
}
var scene_default = init;
export {
  scene_default as default
};
//# sourceMappingURL=three_examples_jsm_offscreen_scene.js.map
