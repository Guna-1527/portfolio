import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';
import Social from "../components/Social"

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-24 py-20">
      <motion.div
        {...fadeIn()}
        className="text-center max-w-2xl mb-12"
      >
        <h2 className="text-3xl font-bold text-textPrimary mb-4">
          Get In Touch
        </h2>
        <p className="text-textSecondary">
          I'm currently looking for new opportunities. Whether you have a question
          or just want to say hi, I'll try my best to get back to you!
        </p>
      </motion.div>
      <Social />
    </section>
  );
}