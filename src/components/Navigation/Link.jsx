import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export function Link({ to, label }) {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <motion.span
          whileHover={{ y: -2 }}
          className={`${
            isActive ? 'text-secondary' : 'text-textSecondary'
          } hover:text-secondary transition-colors`}
        >
          {label}
        </motion.span>
      )}
    </NavLink>
  );
}