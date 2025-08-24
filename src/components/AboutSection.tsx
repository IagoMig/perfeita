import React from 'react';
import { motion } from 'framer-motion';
import Logo3 from '../assets/logo3.png';

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Texto */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#999c7f] mb-6">
              Sobre a Clínica Perfeita
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              A Clínica Perfeita é referência em tratamentos
              estéticos de alta performance. Nossa missão é proporcionar
              resultados excepcionais com segurança e conforto.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Contamos com uma equipe de profissionais altamente qualificados e
              tecnologias de ponta para oferecer o que há de melhor em
              procedimentos estéticos não invasivos e minimamente invasivos.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-[#999c7f] text-xl mb-2">
                  Profissionais Qualificados
                </h3>
                <p className="text-gray-600">
                  Equipe com especialização e constante atualização.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-[#999c7f] text-xl mb-2">
                  Tecnologia Avançada
                </h3>
                <p className="text-gray-600">
                  Equipamentos de última geração para resultados superiores.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Logo */}
          <motion.div
            className="lg:w-1/2 flex justify-center items-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={Logo3}
              alt="Clínica Perfeita Logo"
              className="max-w-xs lg:max-w-md w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
