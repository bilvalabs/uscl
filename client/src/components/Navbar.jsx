// src/components/Navbar.jsx (Updated)
import React, { useState, useEffect } from "react";
import { 
  FaBars, 
  FaTimes, 
  FaCode,
  FaSignInAlt
} from "react-icons/fa";
import { 
  HiOutlineAcademicCap,
  HiOutlineUserGroup,
  HiOutlineBookOpen 
} from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { 
      path: "/about", 
      icon: HiOutlineUserGroup, 
      label: "About",
      description: "Learn about our mission" 
    },
    { 
      path: "/courses", 
      icon: HiOutlineAcademicCap, 
      label: "Courses",
      description: "Explore our programs" 
    },
    { 
      path: "/resources", 
      icon: HiOutlineBookOpen, 
      label: "Resources",
      description: "Learning materials" 
    },
    { 
      path: "/login", 
      icon: FaSignInAlt, 
      label: "Login",
      description: "Access your account" 
    },
  ];

  const menuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    },
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-gray-900/95 backdrop-blur-lg border-b border-gray-800"
          : "bg-gradient-to-b from-gray-900/90 to-transparent dark:from-gray-900/90 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <Link 
              to="/" 
              className="flex items-center space-x-3 group"
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <FaCode className="text-white text-3xl" />
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                USCL
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map(({ path, icon: Icon, label, description }) => {
              const isActive = location.pathname === path;
              
              return (
                <Link
                  key={path}
                  to={path}
                  className={`relative group flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 
                    ${isActive 
                      ? "text-white bg-blue-600/20" 
                      : "text-gray-300 hover:text-white hover:bg-blue-600/10"
                    }`}
                >
                  <Icon className={`text-xl ${isActive ? "text-blue-400" : "group-hover:text-blue-400"}`} />
                  <span>{label}</span>
                  
                  {/* Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute hidden group-hover:block bottom-full left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-xs rounded-md whitespace-nowrap mb-2"
                  >
                    {description}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 border-4 border-transparent border-t-gray-900"></div>
                  </motion.div>

                  {isActive && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                      animate
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 transition-colors"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden overflow-hidden"
          >
            <div className="bg-gray-900/95 backdrop-blur-lg border-t border-gray-800">
              <div className="px-4 py-4 space-y-2">
                {navLinks.map(({ path, icon: Icon, label, description }) => {
                  const isActive = location.pathname === path;
                  
                  return (
                    <motion.div
                      key={path}
                      variants={itemVariants}
                    >
                      <Link
                        to={path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center space-x-3 w-full p-3 rounded-lg transition-all duration-300 
                          ${isActive 
                            ? "bg-blue-600/20 text-white" 
                            : "text-gray-300 hover:bg-blue-600/10 hover:text-white"
                          }`}
                      >
                        <Icon className={`text-xl ${isActive ? "text-blue-400" : ""}`} />
                        <div className="flex flex-col">
                          <span className="font-medium">{label}</span>
                          <span className="text-xs text-gray-500">{description}</span>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
