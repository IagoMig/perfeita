import React, { useEffect, Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Itens: Menu_Móvel
const menuItems = ['Início', 'Sobre', 'Serviços', 'Antes e Depois', 'Galeria', 'Depoimentos', 'FAQ', 'Contato'];
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
// Componente: Menu_Móvel
// Autor: Iago Miguel
export function MobileMenu({
  isOpen,
  onClose
}: MobileMenuProps) {
  // Efeito: Controle_Overflow
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  return <AnimatePresence>
      {isOpen && <motion.div className="fixed inset-0 bg-white z-40 flex flex-col" initial={{
      x: '100%'
    }} animate={{
      x: 0
    }} exit={{
      x: '100%'
    }} transition={{
      type: 'tween',
      duration: 0.3
    }}>
          <div className="flex flex-col items-center justify-center h-full">
            {menuItems.map((item, index) => <motion.a key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="text-2xl font-medium py-3 text-gray-800 hover:text-[#999c7f] transition-colors" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.05
        }} onClick={onClose}>
                {item}
              </motion.a>)}
          </div>
        </motion.div>}
    </AnimatePresence>;
}