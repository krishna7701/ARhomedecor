import React, { useEffect, useRef } from 'react';
import 'aframe';
import 'ar.js';
import * as THREE from 'three';

const ARDecorator = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      const scene = sceneRef.current;
      const camera = scene.camera;
      const position = new THREE.Vector3();
      position.setFromMatrixPosition(camera.matrixWorld);
      position.add(new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion));

      const newEntity = document.createElement('a-box');
      newEntity.setAttribute('position', position.x + ' ' + position.y + ' ' + position.z);
      newEntity.setAttribute('color', '#4CC3D9');
      newEntity.setAttribute('scale', '0.1 0.1 0.1');
      scene.appendChild(newEntity);
    };

    const scene = sceneRef.current;
    scene.addEventListener('click', handleClick);

    return () => {
      scene.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <a-scene
      ref={sceneRef}
      arjs='sourceType: webcam; debugUIEnabled: false;'
      renderer='logarithmicDepthBuffer: true;'
      vr-mode-ui='enabled: false'
      gesture-detector
      embedded
    >
      <a-camera gps-camera rotation-reader></a-camera>
      <a-entity cursor='fuse: false; rayOrigin: mouse;'></a-entity>
    </a-scene>
  );
};

export default ARDecorator;