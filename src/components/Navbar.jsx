import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const handleMobileNavClick = () => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#E9E9E9] text-[#222222] py-4 px-6 md:px-12 fixed w-full top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold font-['Montserrat'] tracking-tight"
        >
          <Link to="/" className="flex items-center">
            <span className="text-blue-400 font-semibold">Port</span>
            <span className="text-[#222222] font-light">folio</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex space-x-8 font-['Poppins'] text-sm tracking-wide"
        >
          {[
            { name: 'Home', path: '/' },
            { name: 'Projects', path: '/projects' },
            { name: 'About', path: '/about' },
            { name: 'Contact', path: '/contact' }
          ].map((item, index) => (
            <motion.div key={item.name}>
              <motion.div
                className="text-[#222222] hover:text-blue-400 transition-colors duration-300 uppercase text-xs font-medium tracking-widest cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <Link to={item.path}>{item.name}</Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-[#222222] block"
              ></motion.span>
              <motion.span 
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-[#222222] block"
              ></motion.span>
              <motion.span 
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-[#222222] block"
              ></motion.span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        className="md:hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
          display: isOpen ? 'block' : 'none'
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center space-y-4 py-4 font-['Poppins'] text-sm tracking-wide">
          {[
            { name: 'Home', path: '/' },
            { name: 'Projects', path: '/projects' },
            { name: 'About', path: '/about' },
            { name: 'Contact', path: '/contact' }
          ].map((item, index) => (
            <motion.div key={item.name}>
              <motion.div
                className="text-[#222222] hover:text-blue-400 transition-colors duration-300 uppercase text-xs font-medium tracking-widest cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                onClick={handleMobileNavClick}
              >
                <Link to={item.path}>{item.name}</Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
