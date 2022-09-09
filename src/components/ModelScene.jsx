import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Avatar from './Avatar.jsx';

export default function ModelScene() {
  return (
    <Canvas 
        camera={{ position: [0, 4, 15], fov: 15 }}
      style={{
          backgroundColor: '#242424',
          width: 'fit-content',
          height: '300px',
    }}>

      <ambientLight intensity={1.25} />  
      <ambientLight intensity={0.1} />  
      <directionalLight intensity={1.4} />
      <Suspense fallback={null}>
        <Avatar />
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}
