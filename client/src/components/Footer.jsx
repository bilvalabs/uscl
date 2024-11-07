import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail,
  ChevronRight,
  MapPin,
  Phone,
  Send
} from "lucide-react";
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-300 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-20%,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]"></div>

      <div className="relative">
        {/* Newsletter Section */}
        <div className="border-b border-gray-800">
          <div className="container mx-auto px-6 py-12">
            <div className="relative max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  Stay Updated
                </h3>
                <p className="text-gray-400">
                  Subscribe to our newsletter for the latest updates and exclusive offers
                </p>
                <form onSubmit={handleSubscribe} className="mt-6 flex max-w-md mx-auto">
                  <div className="relative flex-grow">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-white/5 border border-gray-800 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-r-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center"
                  >
                    <Send size={18} className="mr-2" />
                    Subscribe
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white">BilvaLabs</h3>
              <p className="text-gray-400 leading-relaxed">
                Empowering the future through innovative technology solutions and exceptional service since 2020.
              </p>
              <div className="flex space-x-4 pt-4">
                <motion.a href="https://www.facebook.com/profile.php?id=61567854182486" whileHover={{ scale: 1.1, rotate: 5 }} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  <Facebook size={20} />
                </motion.a>
                <motion.a href="https://x.com/uscl_tech" whileHover={{ scale: 1.1, rotate: 5 }} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  <Twitter size={20} />
                </motion.a>
                <motion.a href="https://www.instagram.com/uscl.tech/" whileHover={{ scale: 1.1, rotate: 5 }} className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
                  <Instagram size={20} />
                </motion.a>
                <motion.a href="https://www.linkedin.com/in/bilva-uscl-725694337/" whileHover={{ scale: 1.1, rotate: 5 }} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  "About Us",
                  "Services",
                  "Projects",
                  "Blog",
                  "Careers",
                  "Contact"
                ].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="group flex items-center text-gray-400 hover:text-white transition-colors duration-200">
                      <ChevronRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin size={20} className="text-blue-400 mt-1" />
                  <span className="text-gray-400">
                    Second Floor, BHUVANA TOWERS,<br />
                    Sarojini Devi Rd, Secunderabad, Telangana 500003.
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone size={20} className="text-blue-400" />
                  <span className="text-gray-400">8801886108</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail size={20} className="text-blue-400" />
                  <span className="text-gray-400">info@uscl.tech</span>
                </li>
              </ul>
            </motion.div>

            {/* Latest Updates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">Latest Updates</h4>
              <div className="space-y-4">
                <div className="group cursor-pointer">
                  <h5 className="text-white group-hover:text-blue-400 transition-colors duration-200">
                    Launching Courses Soon
                  </h5>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                &copy; 2024 BilvaLabs. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link to="/terms-of-service" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link to="/cookie-policy" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
