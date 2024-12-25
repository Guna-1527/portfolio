import { motion } from 'framer-motion';
import { useState } from 'react';

export default function TechCard({ name, icon: Icon, skills, description, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative p-6 border border-secondary/10 rounded-lg backdrop-blur-sm overflow-hidden group"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent" />

      {/* Icon */}
      <motion.div
        animate={{ scale: isHovered ? 1.1 : 1 }}
        className="text-secondary mb-4"
      >
        <Icon size={32} />
      </motion.div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-textPrimary mb-2">{name}</h3>
      <p className="text-textSecondary mb-4 text-sm">{description}</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <motion.span
            key={skill}
            whileHover={{ scale: 1.05 }}
            className="text-xs px-2 py-1 border border-secondary/20 rounded-full text-secondary"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}