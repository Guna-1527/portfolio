import { motion } from 'framer-motion';
import TechCard from './TechCard';
import { techCategories } from '../../data/techData';

export default function TechGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {techCategories.map((category, index) => (
        <TechCard key={category.name} {...category} index={index} />
      ))}
    </div>
  );
}