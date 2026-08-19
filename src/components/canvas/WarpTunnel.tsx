import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface WarpTunnelProps {
  warpSpeed?: boolean;
  throttle?: number;
}

export function WarpTunnel({ warpSpeed = false, throttle = 1 }: WarpTunnelProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 1200;

  // Generate particle positions in a cylindrical / spatial volume
  const [positions, initialZ] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const zCoords = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const radius = 3 + Math.random() * 25;
      const theta = Math.random() * Math.PI * 2;
      const z = (Math.random() - 0.5) * 80;

      pos[i * 3] = Math.cos(theta) * radius;
      pos[i * 3 + 1] = Math.sin(theta) * radius;
      pos[i * 3 + 2] = z;
      zCoords[i] = z;
    }

    return [pos, zCoords];
  }, [count]);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;

    const positionAttribute = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const speed = (warpSpeed ? 85 : 12) * throttle;

    for (let i = 0; i < count; i++) {
      let z = positionAttribute.getZ(i);
      z += speed * delta;

      if (z > 40) {
        z = -40;
      }
      positionAttribute.setZ(i, z);
    }

    positionAttribute.needsUpdate = true;
    pointsRef.current.rotation.z += 0.002 * (warpSpeed ? 3 : 1);
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={warpSpeed ? 0.28 : 0.14}
        color={warpSpeed ? "#00f0ff" : "#8b5cf6"}
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
