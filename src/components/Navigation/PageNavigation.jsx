import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

const routes = ['/', '/about', '/tech', '/contact'];
const routeNames = ['Home', 'About', 'Tech', 'Contact'];

export default function PageNavigation() {
  const location = useLocation();
  const currentIndex = routes.indexOf(location.pathname);
  
  const prevRoute = currentIndex > 0 ? routes[currentIndex - 1] : null;
  const nextRoute = currentIndex < routes.length - 1 ? routes[currentIndex + 1] : null;
  
  const prevName = prevRoute ? routeNames[currentIndex - 1] : null;
  const nextName = nextRoute ? routeNames[currentIndex + 1] : null;

  return (
    <div className="fixed bottom-8 left-0 right-0 flex justify-center gap-4 px-4">
      {prevRoute && (
        <NavigationButton
          to={prevRoute}
          direction="left"
          label={prevName}
        />
      )}
      {nextRoute && (
        <NavigationButton
          to={nextRoute}
          direction="right"
          label={nextName}
        />
      )}
    </div>
  );
}

function NavigationButton({ to, direction, label }) {
  const Icon = direction === 'left' ? HiArrowLeft : HiArrowRight;
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to={to}
        className="flex items-center gap-2 px-4 py-2 border border-secondary/20 rounded-full bg-primary/80 backdrop-blur-sm hover:border-secondary/50 transition-colors"
      >
        {direction === 'left' && <Icon className="text-secondary" size={20} />}
        <span className="text-secondary text-sm">{label}</span>
        {direction === 'right' && <Icon className="text-secondary" size={20} />}
      </Link>
    </motion.div>
  );
}