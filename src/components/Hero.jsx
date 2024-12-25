import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen flex items-center px-6 md:px-24">
      <div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-secondary mb-4"
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-7xl font-bold text-textPrimary mb-4"
        >
          John Doe.
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-4xl md:text-7xl font-bold text-textSecondary mb-6"
        >
          I build things for the web.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-textSecondary max-w-lg mb-8"
        >
          I'm a software engineer specializing in building exceptional digital experiences.
          Currently, I'm focused on building accessible, human-centered products.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border border-secondary text-secondary px-6 py-3 rounded hover:bg-secondary/10"
        >
          Check out my work!
        </motion.button>
      </div>
    </section>
  );
}