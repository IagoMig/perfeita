import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Maximize2, Minimize2 } from 'lucide-react';

export function VideoSection() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const togglePlay = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const message = isPlaying ? 'pauseVideo' : 'playVideo';
    iframe.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func: message, args: [] }),
      '*'
    );
    setIsPlaying(!isPlaying);
  };

  const toggleFullscreen = () => {
    const container = iframeRef.current?.parentElement;
    if (!container) return;

    if (!isFullscreen) {
      if (container.requestFullscreen) container.requestFullscreen();
      else if ((container as any).webkitRequestFullscreen)
        (container as any).webkitRequestFullscreen();
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <section id="video" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#999c7f] mb-4">
            Conheça Nossa Clínica
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Assista ao nosso vídeo de apresentação e conheça mais sobre a Clínica Perfeita.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl relative"
        >
          <div className="relative aspect-video bg-black">
            <iframe
              ref={iframeRef}
              className="w-full h-full"
              src="https://www.youtube.com/embed/SEU_VIDEO_ID?enablejsapi=1&rel=0&modestbranding=1"
              title="Clínica Perfeita"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>

            {/* Botões customizados */}
            <div className="absolute inset-0 flex items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={togglePlay}
                className="w-16 h-16 bg-[#999c7f] rounded-full flex items-center justify-center shadow-lg"
              >
                <Play size={32} className="text-white ml-1" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleFullscreen}
                className="w-16 h-16 bg-[#999c7f] rounded-full flex items-center justify-center shadow-lg"
              >
                {isFullscreen ? (
                  <Minimize2 size={28} className="text-white" />
                ) : (
                  <Maximize2 size={28} className="text-white" />
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
