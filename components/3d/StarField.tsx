'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Stars() {
  const ref = useRef<THREE.Points>(null);
  
  // 生成隨機星星位置
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 5000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, []);

  // 星星緩慢旋轉
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.02;
      ref.current.rotation.y += delta * 0.03;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={2}
        color="#ffffff"
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
}

export default function StarField() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        style={{ background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)' }}
      >
        <Stars />
      </Canvas>
    </div>
  );
}
