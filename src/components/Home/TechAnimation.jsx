import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';

export default function TechAnimation() {
  const technologies = [
    { Icon: FaReact, color: '#61DAFB', delay: 0 },
    { Icon: SiTypescript, color: '#3178C6', delay: 0.2 },
    { Icon: FaNodeJs, color: '#339933', delay: 0.4 },
    { Icon: SiTailwindcss, color: '#06B6D4', delay: 0.6 },
    { Icon: FaPython, color: '#3776AB', delay: 0.8 },
    { Icon: FaDatabase, color: '#336791', delay: 1 }
  ];

  return (
    <div className="relative h-full flex items-center justify-center">
      {technologies.map(({ Icon, color, delay }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotate: [0, 360],
            y: [0, -20, 0]
          }}
          transition={{
            delay,
            duration: 2,
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          style={{
            position: 'absolute',
            transform: `rotate(${index * (360 / technologies.length)}deg) translateY(-100px)`
          }}
        >
          <Icon size={40} color={color} />
        </motion.div>
      ))}
    </div>
  );
}