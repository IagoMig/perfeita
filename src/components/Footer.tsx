import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#999c7f] to-[#8a8e6f] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-5">Clínica Perfeita</h3>
            <p className="mb-6 text-gray-100 leading-relaxed">
              Transformando sua beleza com os mais avançados tratamentos estéticos. Agende sua consulta hoje mesmo.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/clinicaperfeita/?hl=pt" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors">
                <Instagram className="h-6 w-6 hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors">
                <svg className="h-6 w-6 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-5">Contato</h3>
            <ul className="space-y-4 text-gray-100">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 flex-shrink-0" />
                <span>
                  Av. Visconde de Guarapuava, 2764<br/>
                  Conjunto 1006 - Curitiba, PR
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 flex-shrink-0" />
                <span>+55 41 3206-0016</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 flex-shrink-0" />
                <span>perfeita.clinica.estetica@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-5">Horário de Funcionamento</h3>
            <ul className="space-y-4 text-gray-100">
              <li className="flex items-center">
                <Clock className="mr-3 h-5 w-5 flex-shrink-0" />
                <div>
                  <p>Segunda a Sexta</p>
                  <p>08:00 - 19:00</p>
                </div>
              </li>
              <li className="flex items-center">
                <Clock className="mr-3 h-5 w-5 flex-shrink-0" />
                <div>
                  <p>Sábado</p>
                  <p>08:00 - 14:00</p>
                </div>
              </li>
              <li className="flex items-center">
                <Clock className="mr-3 h-5 w-5 flex-shrink-0" />
                <div>
                  <p>Domingo</p>
                  <p>Fechado</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-5">Newsletter</h3>
            <p className="mb-4 text-gray-100 leading-relaxed">
              Inscreva-se para receber novidades e promoções exclusivas.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Seu email"
                className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white shadow-inner"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white text-[#999c7f] font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-md"
                type="submit"
              >
                Inscrever-se
              </motion.button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-10 border-t border-white/20 text-center text-gray-100">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Clínica Perfeita. Todos os direitos reservados. | Desenvolvido por Iago Miguel
          </p>
        </div>
      </div>
    </footer>
  );
}
