import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-24 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl"
      >
        <h2 className="text-3xl font-bold text-textPrimary mb-4">
          Get In Touch
        </h2>
        <p className="text-textSecondary mb-8">
          I'm currently looking for new opportunities. Whether you have a question
          or just want to say hi, I'll try my best to get back to you!
        </p>
        <motion.a
          href="mailto:hello@example.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block border border-secondary text-secondary px-8 py-4 rounded hover:bg-secondary/10"
        >
          Say Hello
        </motion.a>
      </motion.div>
    </section>
  );
}