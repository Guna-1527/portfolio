import { motion } from 'framer-motion';
import TechGrid from '../components/Tech/TechGrid';

export default function Tech() {
  return (
    <section className="min-h-screen px-6 md:px-24 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-textPrimary mb-4">
            Technologies & Skills
          </h1>
          <p className="text-textSecondary max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with to create
            exceptional digital experiences.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <TechGrid />
      </div>
    </section>
  );
}