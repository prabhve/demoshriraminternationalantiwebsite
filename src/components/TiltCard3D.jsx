import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const TiltCard3D = ({ 
  children, 
  className = '', 
  maxTilt = 12, 
  scale = 1.02, 
  showGlare = true 
}) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth physics springs
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-maxTilt, maxTilt]);

  // Glare position
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      animate={{
        scale: isHovered ? scale : 1,
      }}
      transition={{
        scale: { duration: 0.25, ease: 'easeOut' },
      }}
      className={`relative will-change-transform ${className}`}
    >
      {/* 3D Content Container */}
      <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }} className="h-full">
        {children}
      </div>

      {/* Dynamic Specular Glare Effect */}
      {showGlare && isHovered && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl overflow-hidden z-30"
          style={{
            background: `radial-gradient(circle 280px at ${glareX} ${glareY}, rgba(255, 255, 255, 0.15), transparent 75%)`,
          }}
        />
      )}
    </motion.div>
  );
};
