import React, { lazy } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
export function ContactSection() {
  return <section id="contato" className="py-20">
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
      }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#999c7f] mb-4">
            Entre em Contato
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos à disposição para tirar suas dúvidas e agendar sua consulta.
            Entre em contato conosco.
          </p>
        </motion.div>
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div className="lg:w-1/2" initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <form className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Nome
                  </label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#999c7f]" placeholder="Seu nome" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#999c7f]" placeholder="Seu email" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Telefone
                </label>
                <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#999c7f]" placeholder="(00) 00000-0000" />
              </div>
              <div className="mb-6">
                <label htmlFor="service" className="block text-gray-700 mb-2">
                  Serviço de Interesse
                </label>
                <select id="service" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#999c7f]">
                  <option value="">Selecione um serviço</option>
                  <option value="laser">Laser CO2 Fracionado</option>
                  <option value="preenchimento">Preenchimento Labial</option>
                  <option value="harmonizacao">Harmonização Facial</option>
                  <option value="botox">Botox</option>
                  <option value="peeling">Peeling Químico</option>
                  <option value="microagulhamento">Microagulhamento</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#999c7f]" placeholder="Como podemos ajudar?"></textarea>
              </div>
              <motion.button whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} className="w-full bg-[#999c7f] text-white py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors" type="submit">
                Enviar Mensagem
              </motion.button>
            </form>
          </motion.div>
          <motion.div className="lg:w-1/2" initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }}>
            <div className="bg-gray-50 p-8 rounded-lg h-full">
              <h3 className="text-2xl font-semibold text-[#999c7f] mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-[#999c7f] mr-4 h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Endereço</h4>
                    <p className="text-gray-600">
                      Av. Visconde de Guarapuava, 2764
                      <br />
                      Conjunto 1006 - Curitiba, PR
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="text-[#999c7f] mr-4 h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Telefone</h4>
                    <p className="text-gray-600">+55 41 3206-0016</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-[#999c7f] mr-4 h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">
                      perfeita.clinica.estetica@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="text-[#999c7f] mr-4 h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">
                      Horário de Funcionamento
                    </h4>
                    <p className="text-gray-600">
                      Segunda a Sexta: 08:00 - 19:00
                      <br />
                      Sábado: 08:00 - 14:00
                      <br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-medium text-gray-800 mb-4">Localização</h4>
                <div className="bg-gray-200 rounded-lg h-64 overflow-hidden">
                
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.0523117096717!2d-49.27323642529928!3d-25.439999877559675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce46d28f282b1%3A0x6f90e5dbde4b5a0e!2sAv.%20Visc.%20de%20Guarapuava%2C%202764%20-%20Centro%2C%20Curitiba%20-%20PR%2C%2080010-100!5e0!3m2!1spt-BR!2sbr!4v1703170293696!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{
                  border: 0
                }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização da Clínica Perfeita" className="rounded-lg"></iframe>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}