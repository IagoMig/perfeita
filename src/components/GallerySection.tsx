import React, { useState, Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [{
  id: 1,
  src: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  alt: 'Interior da clínica',
  category: 'Ambiente'
}, {
  id: 2,
  src: 'https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  alt: 'Procedimento estético',
  category: 'Procedimentos'
}, {
  id: 3,
  src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  alt: 'Equipamentos modernos',
  category: 'Tecnologia'
}, {
  id: 4,
  src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  alt: 'Tratamento facial',
  category: 'Procedimentos'
}, {
  id: 5,
  src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  alt: 'Sala de espera',
  category: 'Ambiente'
}, {
  id: 6,
  src: 'https://images.unsplash.com/photo-1597225244660-1cd128c64284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  alt: 'Equipamento de laser',
  category: 'Tecnologia'
}];
// Componente: Seção_Galeria
// Autor: Iago Miguel
export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  // Função: Filtrar_Imagens
  const filteredImages = activeFilter ? galleryImages.filter(img => img.category === activeFilter) : galleryImages;
  // Função: Abrir_Modal
  const openModal = (imageId: number) => {
    setSelectedImage(imageId);
  };
  // Função: Fechar_Modal
  const closeModal = () => {
    setSelectedImage(null);
  };
  // Função: Navegar_Imagens
  const navigateImage = (direction: 'next' | 'prev') => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    setSelectedImage(filteredImages[newIndex].id);
  };
  return <section id="galeria" className="py-20 bg-white">
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
            Galeria
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça nossas instalações, equipamentos e procedimentos através das
            imagens.
          </p>
        </motion.div>

        {/* Filtros */}
        <div className="flex justify-center mb-8 space-x-4">
          <button className={`px-4 py-2 rounded-full transition-all ${activeFilter === null ? 'bg-[#999c7f] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`} onClick={() => setActiveFilter(null)}>
            Todos
          </button>
          <button className={`px-4 py-2 rounded-full transition-all ${activeFilter === 'Ambiente' ? 'bg-[#999c7f] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`} onClick={() => setActiveFilter('Ambiente')}>
            Ambiente
          </button>
          <button className={`px-4 py-2 rounded-full transition-all ${activeFilter === 'Procedimentos' ? 'bg-[#999c7f] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`} onClick={() => setActiveFilter('Procedimentos')}>
            Procedimentos
          </button>
          <button className={`px-4 py-2 rounded-full transition-all ${activeFilter === 'Tecnologia' ? 'bg-[#999c7f] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`} onClick={() => setActiveFilter('Tecnologia')}>
            Tecnologia
          </button>
        </div>

        {/* Grid de Imagens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredImages.map((image, index) => <motion.div key={image.id} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.4,
          delay: index * 0.1
        }} className="overflow-hidden rounded-lg shadow-md cursor-pointer group" onClick={() => openModal(image.id)}>
              <div className="relative h-64">
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                    Ver imagem
                  </span>
                </div>
                <div className="absolute bottom-2 left-2 bg-[#999c7f] text-white text-xs px-2 py-1 rounded">
                  {image.category}
                </div>
              </div>
            </motion.div>)}
        </div>

        {/* Modal para visualização de imagem */}
        <AnimatePresence>
          {selectedImage !== null && <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
              <button onClick={closeModal} className="absolute top-4 right-4 z-10 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all" aria-label="Fechar">
                <X size={24} />
              </button>
              <div className="flex justify-between items-center absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-10 px-4">
                <button onClick={() => navigateImage('prev')} className="text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all" aria-label="Imagem anterior">
                  <ChevronLeft size={24} />
                </button>
                <button onClick={() => navigateImage('next')} className="text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all" aria-label="Próxima imagem">
                  <ChevronRight size={24} />
                </button>
              </div>
              {selectedImage !== null && <div className="max-w-4xl max-h-[80vh]">
                  <img src={filteredImages.find(img => img.id === selectedImage)?.src} alt={filteredImages.find(img => img.id === selectedImage)?.alt} className="max-w-full max-h-[80vh] object-contain" />
                </div>}
            </motion.div>}
        </AnimatePresence>
      </div>
    </section>;
}