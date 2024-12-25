import { motion } from 'framer-motion';

const projects = [
  {
    title: "Project One",
    description: "A web application built with React and Node.js that helps users track their daily tasks and goals.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    link: "#"
  },
  {
    title: "Project Two",
    description: "An e-commerce platform with real-time inventory management and payment processing.",
    tech: ["Next.js", "Stripe", "Tailwind CSS", "PostgreSQL"],
    link: "#"
  },
  {
    title: "Project Three",
    description: "A social media dashboard for content creators to manage their online presence.",
    tech: ["Vue.js", "Firebase", "TypeScript", "Sass"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <section className="min-h-screen px-6 md:px-24 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-textPrimary mb-12"
      >
        Some Things I've Built
      </motion.h2>
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="bg-primary/50 p-6 rounded-lg border border-secondary/20"
          >
            <h3 className="text-xl font-semibold text-secondary mb-2">
              {project.title}
            </h3>
            <p className="text-textSecondary mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-secondary text-sm px-2 py-1 bg-secondary/10 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="text-secondary hover:underline"
            >
              Learn more →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}