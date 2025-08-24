import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import Logo2 from '../assets/logo2.png'; 

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
      
          <img src={Logo2} alt="Clínica Perfeita" className="h-10 md:h-12 object-contain" />
        </div>

        <nav className="hidden md:flex space-x-8">
          {[
            'Início',
            'Sobre',
            'Serviços',
            'Antes e Depois',
            'Galeria',
            'Depoimentos',
            'FAQ',
            'Contato',
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              className="text-gray-700 hover:text-[#999c7f] transition-colors relative group"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#999c7f] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-[#999c7f] focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
