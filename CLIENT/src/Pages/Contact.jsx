import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="p-4 md:p-8 min-h-screen bg-[#E5E4E2] overflow-hidden"
    >
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-4xl font-semibold text-center text-[#2E4A3A] mb-4"
      >
        Contact Us
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-center font-normal mb-8 text-[#2E4A3A]"
      >
        We'd love to hear from you! Feel free to reach out through any of the channels below.
      </motion.p>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        whileHover={{ scale: 1.05 }}
        className="max-w-lg mx-auto"
      >
        <div className="bg-[#2E4A3A] shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl font-semibold text-white mb-4">Reach Us On</h2>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="mb-4"
          >
            <h3 className="text-lg font-bold text-white">Email</h3>
            <p className="text-[#E5E4E2]">bitesavor@gmail.com</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="mb-4"
          >
            <h3 className="text-lg font-bold text-white">Phone</h3>
            <p className="text-[#E5E4E2]">+123 456 7890</p>
          </motion.div>

          <motion.div className="mb-4">
            <h3 className="text-lg font-bold text-white">Social Media</h3>
            <div className="flex space-x-4">
              {['Instagram', 'Facebook', 'Twitter'].map((platform, index) => (
                <motion.a 
                  key={platform}
                  whileHover={{ scale: 1.1, color: '#1E90FF' }}
                  transition={{ duration: 0.3 }}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E5E4E2] hover:text-blue-700"
                >
                  {platform}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="mb-4"
          >
            <h3 className="text-lg font-bold text-white">Address</h3>
            <p className="text-[#E5E4E2]">123 Street, Mangalore</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;