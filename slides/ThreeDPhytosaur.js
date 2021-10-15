// import { ExpoWebGLRenderingContext, GLView } from 'expo-gl';
// import { Renderer, TextureLoader } from 'expo-three';
// import * as React from 'react';
// import { LogBox } from 'react-native';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// import {
//   AmbientLight,
//   Fog,
//   GridHelper,
//   PerspectiveCamera,
//   PointLight,
//   Scene,
//   SpotLight,
// } from 'three';
// import { Asset } from 'expo-asset';
// import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

// export default function ThreeDPhytosaur() {
//   // let timeout: any;

//   // React.useEffect(() => {
//   //   return () => clearTimeout(timeout);
//   // }, []);

//   return (
//     <GLView
//       style={{ flex: 1 }}
//       onContextCreate={async (gl) => {
//         const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
//         const sceneColor = 0x6ad6f0;

//         const renderer = new Renderer({ gl });
//         renderer.setSize(width, height);
//         renderer.setClearColor(sceneColor);

//         const camera = new PerspectiveCamera(70, width / height, 0.01, 1000);
//         camera.position.set(2, 5, 5);

//         const scene = new Scene();
//         scene.fog = new Fog(sceneColor, 1, 10000);
//         scene.add(new GridHelper(10, 10));

//         const ambientLight = new AmbientLight(0x101010);
//         scene.add(ambientLight);

//         const pointLight = new PointLight(0xffffff, 2, 1000, 1);
//         pointLight.position.set(0, 200, 200);
//         scene.add(pointLight);

//         const spotLight = new SpotLight(0xffffff, 0.5);
//         spotLight.position.set(0, 500, 100);
//         spotLight.lookAt(scene.position);
//         scene.add(spotLight);

//         const asset = Asset.fromModule(model['phytosaur']);
//         await asset.downloadAsync();

//         // const materialAsset = Asset.fromModule(model['mtl']);
//         // await materialAsset.downloadAsync();

//         // await Asset.loadAsync([
//         //   model['R2D2_Diffuse.jpg'],
//         //   model['R2D2_Illumination.jpg'],
//         //   model['R2D2_Normal.jpg'],
//         //   model['R2D2_Reflection.jpg'],
//         //   model['R2D2_Specular.jpg'],
//         // ]);

//         const objectLoader = new OBJLoader();
//         // const materialLoader = new MTLLoader();

//         // materialLoader.setResourcePath('../assets/');
//         // const material = await materialLoader.loadAsync(materialAsset.uri);
//         // material.preload();
//         // objectLoader.setMaterials(material);

//         const object = await objectLoader.loadAsync(asset.uri);


//         object.scale.set(0.025, 0.025, 0.025);
//         scene.add(object);
//         camera.lookAt(object.position);

//         const render = () => {
//           timeout = requestAnimationFrame(render);
//           renderer.render(scene, camera);
//           gl.endFrameEXP();
//         };
//         render();
//       }}
//     />
//   );
// }

// const model = {
//   'phytosaur': require('../assets/phytosaur_without_mtl.obj'),
//   // 'mtl': require('../assets/ummz-tomistoma.mtl')
//   // 'r2-d2.obj': require('./assets/r2/r2-d2.obj'),
//   // 'r2-d2.mtl': require('./assets/r2/r2-d2.mtl'),
//   // 'R2D2_Diffuse.jpg': require('./assets/r2/R2D2_Diffuse.jpg'),
//   // 'R2D2_Illumination.jpg': require('./assets/r2/R2D2_Illumination.jpg'),
//   // 'R2D2_Normal.jpg': require('./assets/r2/R2D2_Normal.jpg'),
//   // 'R2D2_Reflection.jpg': require('./assets/r2/R2D2_Reflection.jpg'),
//   // 'R2D2_Specular.jpg': require('./assets/r2/R2D2_Specular.jpg'),
// };



// // import { ExpoWebGLRenderingContext, GLView } from 'expo-gl';
// // import { Asset } from 'expo-asset';
// // import {loadAsync} from 'expo-three'
// // import { Renderer, TextureLoader } from 'expo-three';
// // import * as React from 'react';
// // import {
// //   AmbientLight,
// //   BoxBufferGeometry,
// //   Fog,
// //   GridHelper,
// //   Mesh,
// //   MeshStandardMaterial,
// //   PerspectiveCamera,
// //   PointLight,
// //   Scene,
// //   SpotLight,
// // } from 'three';

// // export default function App() {
// //   let timeout;

// //   React.useEffect(() => {
// //     // Clear the animation loop when the component unmounts
// //     return () => clearTimeout(timeout);
// //   }, []);

// //   return (
// //     <GLView
// //       style={{ flex: 1 }}
// //       onContextCreate={async (gl) => {
// //         const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
// //         const sceneColor = 0x6ad6f0;

// //         // Create a WebGLRenderer without a DOM element
// //         const renderer = new Renderer({ gl });
// //         renderer.setSize(width, height);
// //         renderer.setClearColor(sceneColor);

// //         const camera = new PerspectiveCamera(70, width / height, 0.01, 1000);
// //         camera.position.set(2, 5, 5);

// //         const scene = new Scene();
// //         scene.fog = new Fog(sceneColor, 1, 10000);
// //         scene.add(new GridHelper(10, 10));

// //         const ambientLight = new AmbientLight(0x101010);
// //         scene.add(ambientLight);

// //         const pointLight = new PointLight(0xffffff, 2, 1000, 1);
// //         pointLight.position.set(0, 200, 200);
// //         scene.add(pointLight);

// //         const spotLight = new SpotLight(0xffffff, 0.5);
// //         spotLight.position.set(0, 500, 100);
// //         spotLight.lookAt(scene.position);
// //         scene.add(spotLight);
// //         const asset = Asset.fromModule(require('../assets/phytosaur_without_mtl.obj'));
// //         await asset.downloadAsync();
// //         const mesh = await loadAsync(asset);


// //         const cube = new IconMesh();
// //         scene.add(mesh);

// //         camera.lookAt(cube.position);

// //         function update() {
// //           cube.rotation.y += 0.05;
// //           cube.rotation.x += 0.025;
// //         }

// //         // Setup an animation loop
// //         const render = () => {
// //           timeout = requestAnimationFrame(render);
// //           update();
// //           renderer.render(scene, camera);
// //           gl.endFrameEXP();
// //         };
// //         render();
// //       }}
// //     />
// //   );
// // }

// // class IconMesh extends Mesh {
// //   constructor() {
// //     super(
// //       new BoxBufferGeometry(1.0, 1.0, 1.0),
// //       new MeshStandardMaterial({
// //         map: new TextureLoader().load(require('../assets/icon_test.png')),
// //         // color: 0xff0000
// //       })
// //     );
// //   }
// // }

// // import Expo from 'expo';
// // import React from 'react';
// // import { Renderer } from 'expo-three';
// // import { THREE } from 'expo-three';
// // import { Asset } from 'expo-asset';
// // import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// // import { ExpoWebGLRenderingContext, GLView } from 'expo-gl';
// // global.THREE = global.THREE || THREE;
// // import {
// //   AmbientLight,
// //   BoxBufferGeometry,
// //   Fog,
// //   GridHelper,
// //   Mesh,
// //   MeshStandardMaterial,
// //   PerspectiveCamera,
// //   PointLight,
// //   Scene,
// //   SpotLight,
// // } from 'three';

// // export default function ThreeDPhytosaur() {



// //   return (
// //     <GLView
// //       style={{ flex: 1 }}
// //       onContextCreate={async (gl) => {
// //         const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
// //         const sceneColor = 0x6ad6f0;

// //         // Create a WebGLRenderer without a DOM element
// //         const renderer = new Renderer({ gl });
// //         renderer.setSize(width, height);
// //         renderer.setClearColor(sceneColor);

// //         const camera = new PerspectiveCamera(70, width / height, 0.01, 1000);
// //         camera.position.set(2, 5, 5);

// //         const scene = new Scene();
// //         scene.fog = new Fog(sceneColor, 1, 10000);
// //         scene.add(new GridHelper(10, 10));

// //         const ambientLight = new AmbientLight(0x101010);
// //         scene.add(ambientLight);

// //         const pointLight = new PointLight(0xffffff, 2, 1000, 1);
// //         pointLight.position.set(0, 200, 200);
// //         scene.add(pointLight);

// //         const spotLight = new SpotLight(0xffffff, 0.5);
// //         spotLight.position.set(0, 500, 100);
// //         spotLight.lookAt(scene.position);
// //         scene.add(spotLight);

// //         const asset = Asset.fromModule(require('../assets/ummz-tomistoma.obj'));
// //         await asset.downloadAsync();
        
// //         const loader = new OBJLoader();
// //         loader.load(asset.localUri, group => {
// //           // Model loaded...
// //         });

  

// //       }}
// //     />
// //   );
// // }

// // // console.disableYellowBox = true;
// // export default class ThreeDPhytosaur extends React.Component {
// //   state = {
// //     loaded: false,
// //     cur_location: null,
// //     coords: [],
// //     got_route: false,
// //     obj_list: [],
// //   }

// //   //before mounting view, do these things
// //   UNSAFE_componentWillMount() {
// //     //
// //   }

// //   _onGLContextCreate = async (gl) => {
// //     console.debug("Got here");

// //     const width = gl.drawingBufferWidth;
// //     const height = gl.drawingBufferHeight;
// //     gl.createRenderbuffer = () => {};
// //     gl.bindRenderbuffer = () => {};
// //     gl.renderbufferStorage  = () => {};
// //     gl.framebufferRenderbuffer  = () => {};

// //     //ar init
// //     const arSession = await this._glView.startARSessionAsync();

// //     //three init
// //     const scene = new THREE.Scene();
// //     const camera = ExpoTHREE.createARCamera(arSession, width, height, 0.01, 1000);

// //     const renderer = ExpoTHREE.createRenderer({ gl });
// //     renderer.setSize(width, height);

// //     this.scene.background = ExpoTHREE.createARBackgroundTexture(arSession, renderer);
    
// //     /* Create obj texture here because await requires async parent, 
// //     might need to create other textures too
// //     */

// //     const chest = {
// //       'obj': require('../assets/ummz-tomistoma.obj'),
// //       'mtl': require('../assets/ummz-tomistoma.mtl'),
// //       // 'png': require('../assets/objects/low-poly-chest.png'),
// //     };

// //     /// Load chest!
// //     const assetProvider = (name) => {
// //       return chest[name];
// //     };
// //     const chestObj = await ExpoTHREE.loadAsync(
// //       [chest['obj'], chest['mtl']],
// //       null,
// //       assetProvider,
// //     );

// //     chestObj.material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );

// //     ExpoTHREE.utils.scaleLongestSideToSize(chestObj, 0.5);
// //     ExpoTHREE.utils.alignMesh(chestObj, { z: -1.0 });

// //     const animate = () => {
// //       requestAnimationFrame(animate);
     
// //       //collected all object, show final message
// //       scene.updateMatrix();
      
// //       scene.add(chestObj);
      
// //       renderer.render(scene, camera);
// //       gl.endFrameEXP();
// //     }
// //     animate();   
// //   }

// //   render() {
    
// //     return  (
// //       <Expo.GLView
// //         ref={(ref) => this._glView = ref}
// //         style={{ flex: 1 }}
// //         onContextCreate={this._onGLContextCreate}
// //       />
// //     );
// //   }

// // }