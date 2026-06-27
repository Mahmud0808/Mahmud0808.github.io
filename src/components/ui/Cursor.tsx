'use client';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

type Props = {
  className?: string;
};

const INTERACTIVE = 'a, button, [role="button"], input, textarea, label, select, [data-cursor="hover"]';

const Cursor = ({ className = '' }: Props) => {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const ringX = useSpring(mouseX, { stiffness: 200, damping: 22, mass: 0.4 });
  const ringY = useSpring(mouseY, { stiffness: 200, damping: 22, mass: 0.4 });

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setIsHovering(!!t.closest(INTERACTIVE));
    };

    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
    };
  }, [mouseX, mouseY]);

  return (
    <div className={className}>
      {/* Ambient spotlight */}
      <motion.div
        className="fixed w-full h-[140%] z-10 pointer-events-none bg-torch"
        style={{
          left: mouseX,
          top: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Ring with spring lag */}
      <motion.div
        className="fixed rounded-full pointer-events-none z-[9999]"
        style={{
          left: ringX,
          top: ringY,
          translateX: '-50%',
          translateY: '-50%',
          border: '1.5px solid var(--color-accent)',
        }}
        animate={{
          width: isHovering ? 44 : isClicking ? 20 : 30,
          height: isHovering ? 44 : isClicking ? 20 : 30,
          backgroundColor: isHovering ? 'rgba(14, 165, 233, 0.12)' : 'rgba(14, 165, 233, 0)',
          opacity: isClicking ? 0.5 : 0.75,
        }}
        transition={{ type: 'spring', stiffness: 380, damping: 28 }}
      />

      {/* Precise dot */}
      <motion.div
        className="fixed rounded-full pointer-events-none z-[9999] bg-accent"
        style={{
          left: mouseX,
          top: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 0 : isClicking ? 10 : 5,
          height: isHovering ? 0 : isClicking ? 10 : 5,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
};

export default Cursor;
