import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="container mx-auto mt-6 max-w-4xl px-6 md:px-8 bg-[#2E4A3A] rounded-lg shadow-2xl text-center py-10 relative overflow-hidden"
    >
      <motion.h1 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-extrabold text-[#E5E4E2] mb-6 drop-shadow-lg"
      >
        About Us
      </motion.h1>
      
      <section className="mb-8">
        <p className="text-lg text-[#E5E4E2] leading-relaxed">
          Welcome to <span className="text-yellow-300 font-semibold">Bite Savor</span>, where we are passionate about bringing delicious and high-quality food to your table.
          Our mission is to provide a delightful dining experience with a variety of carefully crafted dishes made from fresh ingredients.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-[#E5E4E2] rounded-lg shadow-md text-left transition-all duration-300 hover:shadow-xl"
        >
          <h2 className="text-2xl font-semibold text-[#0b5345] mb-3">Our Story</h2>
          <p className="text-[#0b5345]">
            Bite Savor started with a simple idea – to make quality food easily accessible to everyone.
            From humble beginnings, we have grown into a team dedicated to culinary excellence, serving a wide range of cuisines to suit every taste.
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-[#E5E4E2] rounded-lg shadow-md text-left transition-all duration-300 hover:shadow-xl"
        >
          <h2 className="text-2xl font-semibold text-[#0b5345] mb-3">Our Values</h2>
          <p className="text-[#0b5345]">
            We believe in quality, transparency, and customer satisfaction. We source ingredients responsibly,
            ensuring that every meal we serve meets our high standards. Our team is committed to providing exceptional service with every dish.
          </p>
        </motion.div>
      </section>

      <motion.section 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10"
      >
        <h2 className="text-2xl font-semibold text-[#E5E4E2] mb-3">Get in Touch</h2>
        <p className="text-[#E5E4E2] mb-4">
          Have any questions or feedback? Feel free to reach out to us.<br />
          We love hearing from our customers and are always happy to help!
        </p>
        <Link to="/contact">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-[#E5E4E2] text-[#0b5345] font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md 
            hover:bg-[#0b5345] hover:text-[#E5E4E2] hover:shadow-lg"
          >
            Contact Us
          </motion.button>
        </Link>
      </motion.section>

      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-4 right-4 text-[#E5E4E2] text-sm opacity-70"
      >
        <p>Crafted with 💛 by Bite Savor</p>
      </motion.div>
    </motion.div>
  );
};

export default About;
