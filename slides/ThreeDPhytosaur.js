import Expo from 'expo';
import React from 'react';

const THREE = require('three'); // Supported builtin module
global.THREE = THREE;
import ExpoTHREE from 'expo-three'; // 2.0.2

import "three"; // Supported builtin module

// console.disableYellowBox = true;
export default class ThreeDPhytosaur extends React.Component {
  state = {
    loaded: false,
    cur_location: null,
    coords: [],
    got_route: false,
    obj_list: [],
  }

  //before mounting view, do these things
  UNSAFE_componentWillMount() {
    //
  }

  _onGLContextCreate = async (gl) => {
    console.debug("Got here");

    const width = gl.drawingBufferWidth;
    const height = gl.drawingBufferHeight;
    gl.createRenderbuffer = () => {};
    gl.bindRenderbuffer = () => {};
    gl.renderbufferStorage  = () => {};
    gl.framebufferRenderbuffer  = () => {};

    //ar init
    const arSession = await this._glView.startARSessionAsync();

    //three init
    const scene = new THREE.Scene();
    const camera = ExpoTHREE.createARCamera(arSession, width, height, 0.01, 1000);

    const renderer = ExpoTHREE.createRenderer({ gl });
    renderer.setSize(width, height);

    scene.background = ExpoTHREE.createARBackgroundTexture(arSession, renderer);
    
    /* Create obj texture here because await requires async parent, 
    might need to create other textures too
    */

    const chest = {
      'low-poly-chest.obj': require('../assets/ummz-tomistoma.obj'), // ERROR. The Expo team has been notified.
      'low-poly-chest.mtl': require('../assets/ummz-tomistoma.mtl'), // ERROR. The Expo team has been notified.
    //   'low-poly-chest.png': require('assets/low-poly-chest.png'), // ERROR. The Expo team has been notified.
    };

    /// Load chest!
    const assetProvider = (name) => {
      return chest[name];
    };

    const chestObj = await ExpoTHREE.loadAsync(
      [chest['low-poly-chest.obj'], chest['low-poly-chest.mtl']],
      null,
      assetProvider,
    );

    chestObj.material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );

    ExpoTHREE.utils.scaleLongestSideToSize(chestObj, 0.5);
    ExpoTHREE.utils.alignMesh(chestObj, { z: -1.0 });

    const animate = () => {
      requestAnimationFrame(animate);
     
      //collected all object, show final message
      scene.updateMatrix();
      
      scene.add(chestObj);
      
      renderer.render(scene, camera);
      gl.endFrameEXP();
    }
    animate();   
  }

  render() {
    
    return  (
      <Expo.GLView
        ref={(ref) => this._glView = ref}
        style={{ flex: 1 }}
        onContextCreate={this._onGLContextCreate}
      />
    );
  }

}