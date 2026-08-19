import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const handleHoverCheck = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = target.closest('button, a, input, textarea, [data-interactive="true"], select, .interactive-card');
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousemove', handleHoverCheck);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousemove', handleHoverCheck);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Hollow Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-cyan-400/80 pointer-events-none flex items-center justify-center"
        animate={{
          x: mousePosition.x - (isHovered ? 26 : 18),
          y: mousePosition.y - (isHovered ? 26 : 18),
          width: isHovered ? 52 : 36,
          height: isHovered ? 52 : 36,
          scale: isClicked ? 0.8 : 1,
          borderColor: isHovered ? '#00f0ff' : 'rgba(0, 240, 255, 0.65)',
          backgroundColor: isHovered ? 'rgba(0, 240, 255, 0.08)' : 'transparent',
          boxShadow: isHovered ? '0 0 20px rgba(0, 240, 255, 0.45)' : '0 0 10px rgba(0, 240, 255, 0.2)',
        }}
        transition={{
          type: 'spring',
          damping: 24,
          stiffness: 320,
          mass: 0.5,
        }}
      >
        {/* Sci-Fi Crosshair Marks */}
        {isHovered && (
          <>
            <div className="absolute top-0 w-[2px] h-[4px] bg-cyan-400" />
            <div className="absolute bottom-0 w-[2px] h-[4px] bg-cyan-400" />
            <div className="absolute left-0 h-[2px] w-[4px] bg-cyan-400" />
            <div className="absolute right-0 h-[2px] w-[4px] bg-cyan-400" />
          </>
        )}
      </motion.div>

      {/* Inner Central Laser Dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-cyan-400 pointer-events-none shadow-[0_0_8px_#00f0ff]"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          width: isHovered ? 6 : 6,
          height: isHovered ? 6 : 6,
          scale: isClicked ? 1.8 : 1,
          backgroundColor: isHovered ? '#00ff9d' : '#00f0ff',
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 700,
          mass: 0.1,
        }}
      />
    </div>
  );
}
