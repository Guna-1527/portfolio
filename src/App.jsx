import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navigation/Navbar';
import PageNavigation from './components/Navigation/PageNavigation';
import AnimatedBackground from './components/Background/AnimatedBackground';
import Home from './pages/Home';
import About from './pages/About';
import Tech from './pages/Tech';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen text-textPrimary">
        <AnimatedBackground />
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.div>
        <PageNavigation />
      </div>
    </BrowserRouter>
  );
}