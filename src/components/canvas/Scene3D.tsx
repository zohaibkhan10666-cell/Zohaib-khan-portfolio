import { Suspense, memo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { SpaceshipModel } from './SpaceshipModel';
import { WarpTunnel } from './WarpTunnel';

interface Scene3DProps {
  warpSpeed?: boolean;
  throttle?: number;
}

export const Scene3D = memo(function Scene3D({ warpSpeed = false, throttle = 1 }: Scene3DProps) {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          {/* Ambient Cosmic Lights */}
          <ambientLight intensity={0.4} color="#0b1a30" />
          
          {/* Key Light (Cyan) */}
          <directionalLight
            position={[5, 5, 5]}
            intensity={2}
            color="#00f0ff"
          />

          {/* Rim Light (Violet) */}
          <directionalLight
            position={[-5, -5, -2]}
            intensity={1.8}
            color="#8b5cf6"
          />

          {/* Top Soft White Fill */}
          <directionalLight
            position={[0, 8, 2]}
            intensity={1}
            color="#ffffff"
          />

          {/* Background Stars */}
          <Stars
            radius={60}
            depth={50}
            count={3000}
            factor={3.5}
            saturation={0.8}
            fade
            speed={warpSpeed ? 3 : 0.6}
          />

          {/* Dynamic Hyperloop Warp Tunnel */}
          <WarpTunnel warpSpeed={warpSpeed} throttle={throttle} />

          {/* Interactive Spaceship Model */}
          <SpaceshipModel warpSpeed={warpSpeed} throttle={throttle} />
        </Suspense>
      </Canvas>
    </div>
  );
});
