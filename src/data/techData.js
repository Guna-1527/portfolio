import { FaReact, FaServer, FaTools, FaPaintBrush, FaMobile, FaCloud } from 'react-icons/fa';

export const techCategories = [
  {
    name: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern web technologies.',
    skills: ['React', 'Tailwind CSS', 'Redux']
  },
  {
    name: 'Backend Development',
    icon: FaServer,
    description: 'Creating scalable server-side applications and APIs.',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST']
  },
  {
    name: 'DevOps & Tools',
    icon: FaTools,
    description: 'Utilizing modern development tools and practices.',
    skills: ['Git', 'Docker']
  },
  {
    name: 'UI/UX Design',
    icon: FaPaintBrush,
    description: 'Designing intuitive and beautiful user experiences.',
    skills: ['Figma', 'Adobe XD']
  },
  {
    name: 'Mobile Development',
    icon: FaMobile,
    description: 'Building cross-platform mobile applications.',
    skills: ['React Native']
  }
];