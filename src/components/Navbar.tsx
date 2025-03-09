import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TowerControl as GameController } from 'lucide-react';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <GameController className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold text-white">Portfolio</span>
          </Link>
          
          <div className="flex space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-gray-300 hover:text-white transition-colors duration-200"
  >
    <motion.span
      whileHover={{ y: -2 }}
      className="relative inline-block"
    >
      {children}
      <motion.span
        className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.span>
  </Link>
);

export default Navbar;