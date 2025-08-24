import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Logo from '../assets/logo.png'; 

export function Hero() {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('sobre');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-[#f8f8f6] to-white overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#999c7f] opacity-5"></div>
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#999c7f] opacity-20"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#999c7f] opacity-15"
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', delay: 1 }}
        />
      </div>

      {/* Conteúdo central */}
      <div className="container mx-auto px-4 z-10 text-center">
      {/* Logo */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-40 h-40 mx-auto bg-white/80 rounded-full p-4 shadow-lg flex items-center justify-center">
          <img
            src={Logo}
            alt="Clínica Perfeita Logo"
            className="w-full h-full rounded-full object-contain"
          />
        </div>
      </motion.div>


        {/* Título e descrição */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-[#999c7f] mb-6">
            Clínica Perfeita
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Transformando sua beleza com os mais avançados tratamentos estéticos
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#999c7f] text-white py-4 px-10 rounded-full text-lg font-medium hover:shadow-lg transition-all"
          >
            Agende sua consulta
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll para próxima seção */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToNextSection}
      >
        <ChevronDown size={32} className="text-[#999c7f]" />
      </motion.div>
    </section>
  );
}
