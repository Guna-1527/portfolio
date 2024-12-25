import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl opacity-20"
          animate={{
            x: ['0%', '100%', '0%'],
            y: ['0%', '100%', '0%'],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 5,
          }}
          style={{
            width: `${300 + i * 100}px`,
            height: `${300 + i * 100}px`,
            left: `${-150 + i * 30}px`,
            top: `${-150 + i * 50}px`,
            background: `radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)`,
          }}
        />
      ))}

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
}