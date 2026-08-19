import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SpaceshipProps {
  warpSpeed?: boolean;
  throttle?: number;
}

export function SpaceshipModel({ warpSpeed = false, throttle = 1 }: SpaceshipProps) {
  const shipGroup = useRef<THREE.Group>(null);
  const thrusterLeft = useRef<THREE.Mesh>(null);
  const thrusterRight = useRef<THREE.Mesh>(null);
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const plasmaBeam = useRef<THREE.Mesh>(null);

  // Mouse coordinate interpolation
  useFrame((state) => {
    if (!shipGroup.current) return;

    const t = state.clock.getElapsedTime();
    const targetX = (state.mouse.x * 2.2);
    const targetY = (state.mouse.y * 1.5);

    // Smooth lerp positioning and tilt
    shipGroup.current.position.x = THREE.MathUtils.lerp(shipGroup.current.position.x, targetX, 0.05);
    shipGroup.current.position.y = THREE.MathUtils.lerp(shipGroup.current.position.y, targetY + Math.sin(t * 1.5) * 0.15, 0.05);
    
    // Pitch & Roll based on mouse motion
    const rollTarget = -state.mouse.x * 0.75;
    const pitchTarget = state.mouse.y * 0.45;
    const yawTarget = state.mouse.x * 0.35;

    shipGroup.current.rotation.z = THREE.MathUtils.lerp(shipGroup.current.rotation.z, rollTarget, 0.06);
    shipGroup.current.rotation.x = THREE.MathUtils.lerp(shipGroup.current.rotation.x, pitchTarget + Math.sin(t * 2) * 0.05, 0.06);
    shipGroup.current.rotation.y = THREE.MathUtils.lerp(shipGroup.current.rotation.y, yawTarget, 0.06);

    // Rotate hyperdrive core rings
    if (ring1.current) {
      ring1.current.rotation.z += 0.03 * (warpSpeed ? 3.5 : 1);
      ring1.current.rotation.x += 0.02 * (warpSpeed ? 3.5 : 1);
    }
    if (ring2.current) {
      ring2.current.rotation.z -= 0.025 * (warpSpeed ? 3.5 : 1);
      ring2.current.rotation.y += 0.03 * (warpSpeed ? 3.5 : 1);
    }

    // Thruster pulse scaling
    const pulse = Math.sin(t * 15) * 0.2 + (warpSpeed ? 2.2 : 1) * throttle;
    if (thrusterLeft.current && thrusterRight.current) {
      thrusterLeft.current.scale.set(1, 1, 1 + pulse * 0.8);
      thrusterRight.current.scale.set(1, 1, 1 + pulse * 0.8);
    }

    if (plasmaBeam.current) {
      plasmaBeam.current.scale.set(1 + Math.sin(t * 20) * 0.3, 1, (warpSpeed ? 4.5 : 1.8) * throttle);
    }
  });

  return (
    <group ref={shipGroup} position={[0, 0, 0]} scale={[0.85, 0.85, 0.85]}>
      {/* Central Hull / Fuselage */}
      <mesh position={[0, 0, 0]}>
        <coneGeometry args={[0.7, 3.2, 7]} />
        <meshStandardMaterial
          color="#0d1527"
          roughness={0.2}
          metalness={0.9}
          wireframe={false}
        />
      </mesh>

      {/* Cockpit Canopy Glass */}
      <mesh position={[0, 0.25, 0.3]} rotation={[-Math.PI / 8, 0, 0]}>
        <capsuleGeometry args={[0.22, 0.9, 8, 16]} />
        <meshPhysicalMaterial
          color="#00f0ff"
          transmission={0.85}
          opacity={1}
          transparent
          roughness={0.1}
          ior={1.5}
          emissive="#00f0ff"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Cockpit Interior Glow Node */}
      <pointLight position={[0, 0.3, 0.4]} color="#00f0ff" intensity={1.5} distance={2} />

      {/* Left Wing (Swept Forward Cyber Wing) */}
      <group position={[-0.8, -0.4, -0.2]} rotation={[0, 0, -0.2]}>
        <mesh position={[-0.6, 0, 0]}>
          <boxGeometry args={[1.5, 0.08, 1.4]} />
          <meshStandardMaterial
            color="#080e1e"
            metalness={0.95}
            roughness={0.15}
          />
        </mesh>
        {/* Wing Neon Accent Stripe */}
        <mesh position={[-0.6, 0.05, 0.3]}>
          <boxGeometry args={[1.3, 0.02, 0.06]} />
          <meshBasicMaterial color="#00f0ff" />
        </mesh>
        {/* Wing Tip Blaster */}
        <mesh position={[-1.35, 0, 0.4]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 0.8, 8]} />
          <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={0.8} />
        </mesh>
      </group>

      {/* Right Wing */}
      <group position={[0.8, -0.4, -0.2]} rotation={[0, 0, 0.2]}>
        <mesh position={[0.6, 0, 0]}>
          <boxGeometry args={[1.5, 0.08, 1.4]} />
          <meshStandardMaterial
            color="#080e1e"
            metalness={0.95}
            roughness={0.15}
          />
        </mesh>
        {/* Wing Neon Accent Stripe */}
        <mesh position={[0.6, 0.05, 0.3]}>
          <boxGeometry args={[1.3, 0.02, 0.06]} />
          <meshBasicMaterial color="#00f0ff" />
        </mesh>
        {/* Wing Tip Blaster */}
        <mesh position={[1.35, 0, 0.4]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 0.8, 8]} />
          <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={0.8} />
        </mesh>
      </group>

      {/* Vertical Tail Stabilizers (Dual Cyber Fins) */}
      <group position={[-0.4, 0.35, -0.8]} rotation={[0, 0, 0.3]}>
        <mesh>
          <boxGeometry args={[0.06, 0.9, 0.8]} />
          <meshStandardMaterial color="#0a1224" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.4, 0]}>
          <boxGeometry args={[0.07, 0.04, 0.7]} />
          <meshBasicMaterial color="#8b5cf6" />
        </mesh>
      </group>

      <group position={[0.4, 0.35, -0.8]} rotation={[0, 0, -0.3]}>
        <mesh>
          <boxGeometry args={[0.06, 0.9, 0.8]} />
          <meshStandardMaterial color="#0a1224" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.4, 0]}>
          <boxGeometry args={[0.07, 0.04, 0.7]} />
          <meshBasicMaterial color="#8b5cf6" />
        </mesh>
      </group>

      {/* Hyperdrive Gyroscopic Energy Rings */}
      <mesh ref={ring1} position={[0, -0.2, -0.5]}>
        <torusGeometry args={[0.85, 0.025, 12, 36]} />
        <meshBasicMaterial color="#00f0ff" wireframe />
      </mesh>
      <mesh ref={ring2} position={[0, -0.2, -0.5]} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[0.95, 0.02, 12, 36]} />
        <meshBasicMaterial color="#8b5cf6" />
      </mesh>

      {/* Twin Ionic Thrusters Housing */}
      <mesh position={[-0.35, -0.15, -1.3]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.18, 0.22, 0.7, 16]} />
        <meshStandardMaterial color="#070c18" metalness={0.9} roughness={0.2} />
      </mesh>

      <mesh position={[0.35, -0.15, -1.3]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.18, 0.22, 0.7, 16]} />
        <meshStandardMaterial color="#070c18" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Thruster Plasma Flame (Left) */}
      <mesh ref={thrusterLeft} position={[-0.35, -0.15, -1.8]} rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.16, 1.2, 16]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.85} />
      </mesh>

      {/* Thruster Plasma Flame (Right) */}
      <mesh ref={thrusterRight} position={[0.35, -0.15, -1.8]} rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.16, 1.2, 16]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.85} />
      </mesh>

      {/* Central Warp Plume / Hyperloop Beam */}
      <mesh ref={plasmaBeam} position={[0, -0.15, -2.4]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.35, 2.5, 12]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.4} />
      </mesh>

      {/* Thruster Core Point Light */}
      <pointLight position={[0, -0.15, -1.6]} color="#00f0ff" intensity={4} distance={6} />
      <pointLight position={[0, -0.15, -2.0]} color="#8b5cf6" intensity={3} distance={7} />
    </group>
  );
}
