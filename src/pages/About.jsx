import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

export default function About() {
  return (
    <section className="min-h-screen text-center px-6 md:px-24 py-20">
      <motion.h2
        {...fadeIn()}
        className="text-3xl text-center font-bold text-textPrimary mb-8"
      >
        About Me
      </motion.h2>
      <motion.div
        {...fadeIn(0.2)}
        className=""
      >
        <div className='flex items-center justify-center'>
          <img className='rounded-full w-1/5 h-1/5' src="https://5.imimg.com/data5/KQ/SW/HX/SELLER-83695523/male-model-portfolio-service-500x500.jpg" alt="" />
        </div>
        <div className="text-textSecondary md:mt-10 space-y-4">
          <p>
            I am Prasanth P, currently a trainee at UST. I hold a Bachelor of Engineering (B.E.) in Computer Science Engineering from VSB College of Engineering Technical Campus, Coimbatore. My academic background has equipped me with a solid understanding of programming, algorithms, and software engineering principles.

            
          </p>
          <p>
          As a trainee, I am excited to apply my knowledge in a practical setting and contribute to innovative projects. I am passionate about technology and am eager to continue learning and growing in the tech industry. I look forward to taking on new challenges and developing my skills further.
          </p>
        </div>
      </motion.div>
    </section>
  );
}