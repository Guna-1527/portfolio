import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';

export default function ContactForm() {
  return (
    <motion.form
      {...fadeIn(0.2)}
      className="w-full max-w-lg"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 rounded bg-primary/50 border border-secondary/20 text-textPrimary"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 rounded bg-primary/50 border border-secondary/20 text-textPrimary"
        />
        <textarea
          placeholder="Message"
          rows="5"
          className="w-full p-2 rounded bg-primary/50 border border-secondary/20 text-textPrimary"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-2 px-4 bg-secondary/10 text-secondary border border-secondary rounded hover:bg-secondary/20"
        >
          Send Message
        </motion.button>
      </div>
    </motion.form>
  );
}