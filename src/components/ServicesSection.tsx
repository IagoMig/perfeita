import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
// Dados: Serviços
const services = [{
  id: 1,
  title: 'Laser CO2 Fracionado',
  description: 'Tratamento avançado para rejuvenescimento da pele, redução de cicatrizes e rugas.',
  image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
}, {
  id: 2,
  title: 'Preenchimento Labial',
  description: 'Aumento de volume e definição dos lábios com ácido hialurônico de alta qualidade.',
  image: 'https://images.unsplash.com/photo-1588543385566-413e13a1d77e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
}, {
  id: 3,
  title: 'Harmonização Facial',
  description: 'Conjunto de procedimentos para equilibrar e harmonizar as proporções do rosto.',
  image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
}, {
  id: 4,
  title: 'Botox',
  description: 'Aplicação de toxina botulínica para suavização de rugas e linhas de expressão.',
  image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
}, {
  id: 5,
  title: 'Peeling Químico',
  description: 'Renovação celular para melhorar a textura e aparência da pele.',
  image: 'https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
}, {
  id: 6,
  title: 'Microagulhamento',
  description: 'Estimulação do colágeno para tratamento de cicatrizes, estrias e rejuvenescimento.',
  image: 'https://images.unsplash.com/photo-1597225244660-1cd128c64284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
}];
// Componente: Seção_Serviços
// Autor: Iago Miguel
export function ServicesSection() {
  return <section id="serviços" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#999c7f] mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Oferecemos uma ampla gama de tratamentos estéticos para realçar sua
            beleza natural e proporcionar resultados duradouros.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <motion.div key={service.id} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="h-52 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#999c7f] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <motion.a href="#" whileHover={{
              x: 5
            }} className="inline-flex items-center text-[#999c7f] font-medium">
                  Saiba mais <ArrowRight size={16} className="ml-1" />
                </motion.a>
              </div>
            </motion.div>)}
        </div>

      </div>
    </section>;
}