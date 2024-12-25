import { motion } from 'framer-motion';
import { Link } from './Link';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/tech', label: 'Tech' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full px-6 md:px-24 py-4 bg-primary/90 backdrop-blur-sm z-50"
    >
      <div className="flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-secondary font-bold text-xl"
        >
          JD
        </motion.div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-secondary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <Link key={link.to} {...link} />
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-primary/95 py-4"
        >
          <div className="flex flex-col items-center gap-4">
            {links.map((link) => (
              <Link key={link.to} {...link} />
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}