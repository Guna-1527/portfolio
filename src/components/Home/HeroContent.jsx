import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';

export default function HeroContent() {
  return (
    <div className="space-y-6 w-full md:w-auto px-4 md:px-0 text-center md:text-left">
      <motion.p {...fadeIn(0)} className="text-textSecondary">
        Hi, my name is
      </motion.p>
      <motion.h1 {...fadeIn(0.2)} className="text-3xl sm:text-4xl md:text-7xl font-bold text-textPrimary">
        Guna Prasanth.
      </motion.h1>
      <motion.h2 {...fadeIn(0.4)} className="text-2xl sm:text-3xl md:text-6xl font-bold text-textSecondary">
        I build things for the web.
      </motion.h2>
      <motion.p {...fadeIn(0.6)} className="text-textSecondary max-w-lg mx-auto md:mx-0">
        I'm a software engineer specializing in building exceptional digital experiences.
        Currently focused on creating accessible, human-centered applications.
      </motion.p>
    </div>
  );
}
