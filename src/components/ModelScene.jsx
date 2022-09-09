import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Avatar from './Avatar.jsx';

export default function ModelScene() {
  return (
    <Canvas 
      camera={{ position: [2, 0, 12.25], fov: 15 }}
      style={{
        backgroundColor: '#2f2f2f',
        width: '100vw',
        height: '100vh',
    }}>

      <ambientLight intensity={1.25} />  
      <ambientLight intensity={0.1} />  
      <directionalLight intensity={0.4} />
      <Suspense fallback={null}>
        <Avatar />
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}
