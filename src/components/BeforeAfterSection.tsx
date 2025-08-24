import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const labioAntes = new URL('../assets/labio_antes.jpg', import.meta.url).href;
const labiosDepois = new URL('../assets/labio_depois.jpg', import.meta.url).href;
const hofAntes = new URL('../assets/hof_antes.jpg', import.meta.url).href;
const hofDepois = new URL('../assets/hof_depois.jpg', import.meta.url).href;
const co2Antes = new URL('../assets/co2_antes.jpg', import.meta.url).href;
const co2Depois = new URL('../assets/co2_depois.jpg', import.meta.url).href;


interface BeforeAfterImage {
  id: number;
  title: string;
  before: string;
  after: string;
  description: string;
}

const beforeAfterData: BeforeAfterImage[] = [
  {
    id: 1,
    title: 'Preenchimento Labial',
    before: labioAntes,
    after: labiosDepois,
    description: 'Preenchimento labial para volume e contorno, proporcionando lábios mais harmoniosos.'
  },
  {
    id: 2,
    title: 'Harmonização Facial',
    before: hofAntes,
    after: hofDepois,
    description: 'Harmonização facial completa para equilibrar proporções e realçar a beleza natural.'
  },
  {
    id: 3,
    title: 'Laser CO2',
    before: co2Antes,
    after: co2Depois,
    description: 'Tratamento de laser CO2 fracionado para rejuvenescimento da pele e redução de cicatrizes.'
  }
];

export function BeforeAfterSection() {
  const [selectedImage, setSelectedImage] = useState<BeforeAfterImage | null>(null);
  const [showAfter, setShowAfter] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (image: BeforeAfterImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setShowAfter(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % beforeAfterData.length;
      setCurrentIndex(nextIndex);
      setSelectedImage(beforeAfterData[nextIndex]);
      setShowAfter(true);
    } else {
      const prevIndex = (currentIndex - 1 + beforeAfterData.length) % beforeAfterData.length;
      setCurrentIndex(prevIndex);
      setSelectedImage(beforeAfterData[prevIndex]);
      setShowAfter(true);
    }
  };

  return (
    <section id="antes-e-depois" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#999c7f] mb-4">
            Antes e Depois
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja os resultados transformadores dos nossos tratamentos estéticos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beforeAfterData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row relative">
                <div
                  className="w-full md:w-1/2 h-48 cursor-pointer relative"
                  onClick={() => openModal(item, index)}
                >
                  <img
                    src={item.before}
                    alt={`Antes - ${item.title}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                    Antes
                  </div>
                </div>
                <div
                  className="w-full md:w-1/2 h-48 cursor-pointer relative"
                  onClick={() => openModal(item, index)}
                >
                  <img
                    src={item.after}
                    alt={`Depois - ${item.title}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                    Depois
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#999c7f] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <button
                  onClick={() => openModal(item, index)}
                  className="mt-4 text-[#999c7f] font-medium hover:underline flex items-center"
                >
                  Ver em tela cheia
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-4xl">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all"
                aria-label="Fechar"
              >
                <X size={24} />
              </button>
              <div className="flex justify-between items-center absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-10 px-4">
                <button
                  onClick={() => navigateImage('prev')}
                  className="text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={() => navigateImage('next')}
                  className="text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <img
                  src={showAfter ? selectedImage.after : selectedImage.before}
                  alt={showAfter ? 'Depois' : 'Antes'}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                  <button
                    onClick={() => setShowAfter(false)}
                    className={`px-4 py-2 rounded-full ${
                      !showAfter ? 'bg-[#999c7f] text-white' : 'bg-white text-gray-800'
                    } transition-all`}
                  >
                    Antes
                  </button>
                  <button
                    onClick={() => setShowAfter(true)}
                    className={`px-4 py-2 rounded-full ${
                      showAfter ? 'bg-[#999c7f] text-white' : 'bg-white text-gray-800'
                    } transition-all`}
                  >
                    Depois
                  </button>
                </div>
                <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full">
                  {selectedImage.title}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
