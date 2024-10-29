import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { 
  FaEnvelope, 
  FaLock, 
  FaPhone, 
  FaUser, 
  FaGithub, 
  FaGoogle,
  FaLinkedin, 
  FaTwitter,
  FaArrowRight 
} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import authUrl from '../api/authURL';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const { name, email, phone, password } = formData;

    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    if (!phone) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(phone)) newErrors.phone = 'Phone number must be 10 digits';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {
        const response = await axios.post(`${authUrl}/register`, formData);
        console.log('Registration successful:', response.data);
        navigate('/login');
      } catch (error) {
        console.error('Registration error:', error.response?.data?.msg || error.message);
        setApiError(error.response?.data?.msg || 'Registration failed. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const InputField = ({ icon: Icon, ...props }) => (
    <div className="relative group">
      <Icon className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 text-sm md:text-lg group-hover:text-blue-400 transition-colors duration-300" />
      <input
        {...props}
        className="w-full px-4 py-2.5 md:py-3 pl-10 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all duration-300 placeholder-gray-400 text-sm md:text-base hover:bg-white/10"
      />
    </div>
  );

  return (
    <div className="min-h-screen relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-blue-900 to-black">
      {/* Animated background elements - Adjusted for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] -top-24 md:-top-48 -left-24 md:-left-48 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] -top-24 md:-top-48 -right-24 md:-right-48 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] bottom-24 md:bottom-48 left-24 md:left-48 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="relative min-h-screen flex flex-col justify-center items-center px-4 py-8 md:p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Header - Enhanced for mobile */}
          <div className="text-center mb-6 md:mb-8">
            <div className="inline-block mb-4">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75"></div>
                <div className="relative px-4 md:px-6 py-2 md:py-3 bg-black rounded-lg leading-none">
                  <span className="text-blue-200 text-xs md:text-sm font-medium">Join USCL Community</span>
                </div>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient mb-2">
              Create Account
            </h1>
            <p className="text-gray-400 text-sm md:text-base">Start your journey with us today</p>
          </div>

          {/* Main Card - Improved padding for mobile */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl border border-white/10 p-6 md:p-8"
          >
            {/* Social Signup - Enhanced for mobile */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6">
              <button className="flex items-center justify-center px-3 md:px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-all duration-300 text-sm md:text-base">
                <FaGoogle className="mr-2 text-sm md:text-base" />
                Google
              </button>
              <button className="flex items-center justify-center px-3 md:px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-all duration-300 text-sm md:text-base">
                <FaGithub className="mr-2 text-sm md:text-base" />
                GitHub
              </button>
            </div>

            <div className="relative my-5 md:my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-xs md:text-sm">
                <span className="px-2 bg-transparent text-gray-400">or continue with</span>
              </div>
            </div>

            {/* Signup Form - Enhanced spacing and animations */}
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <div className="space-y-2">
                <InputField
                  icon={FaUser}
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs md:text-sm text-red-400"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>

              <div className="space-y-2">
                <InputField
                  icon={FaEnvelope}
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs md:text-sm text-red-400"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>

              <div className="space-y-2">
                <InputField
                  icon={FaPhone}
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs md:text-sm text-red-400"
                  >
                    {errors.phone}
                  </motion.p>
                )}
              </div>

              <div className="space-y-2">
                <InputField
                  icon={FaLock}
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs md:text-sm text-red-400"
                  >
                    {errors.password}
                  </motion.p>
                )}
              </div>

              {apiError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs md:text-sm"
                >
                  {apiError}
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isLoading}
                className={`w-full py-2.5 md:py-3 px-4 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 text-sm md:text-base ${
                  isLoading ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                <span>Create Account</span>
                {isLoading ? (
                  <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <FaArrowRight className="ml-2 text-sm md:text-base" />
                )}
              </motion.button>

              <div className="text-center pt-2">
                <Link 
                  to="/login"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm md:text-base"
                >
                  Already have an account? <span className="text-blue-400 hover:text-blue-300 hover:underline">Sign in</span>
                </Link>
              </div>
            </form>
          </motion.div>

          {/* Footer - Adjusted for mobile */}
          <motion.footer 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 md:mt-8 text-center"
          >
            <p className="text-gray-400 mb-3 md:mb-4 text-sm">Connect with us</p>
            <div className="flex justify-center space-x-4 md:space-x-6">
              {[
                { icon: FaGithub, href: '#', color: 'hover:text-purple-400' },
                { icon: FaLinkedin, href: '#', color: 'hover:text-blue-400' },
                { icon: FaTwitter, href: '#', color: 'hover:text-blue-400' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className={`text-gray-400 ${social.color} transition-colors duration-300`}
                >
                  <social.icon className="text-lg md:text-xl" />
                </motion.a>
              ))}
            </div>
            <p className="mt-6 md:mt-8 text-gray-500 text-xs md:text-sm">
              &copy; 2024 USCL. All rights reserved.
            </p>
          </motion.footer>
        </motion.div>
      </div>
    </div>
  );
};

export default SignupPage;