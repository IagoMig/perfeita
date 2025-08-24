import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Maximize2 } from "lucide-react";

const videoTestimonials = [
  {
    id: 1,
    name: "Mariana Oliveira",
    role: "Cliente desde 2019",
    video: "https://www.youtube.com/embed/ScMzIvxBSi4", 
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "Cliente desde 2020",
    video: "https://www.youtube.com/embed/kJQP7kiw5Fk",
  },
  {
    id: 3,
    name: "Juliana Costa",
    role: "Cliente desde 2018",
    video: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#999c7f] mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Assista aos depoimentos em vídeo e veja resultados reais!
          </p>
        </motion.div>

        {/* Grid de vídeos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videoTestimonials.map((testimonial, index) => (
            <VideoCard
              key={testimonial.id}
              name={testimonial.name}
              role={testimonial.role}
              video={testimonial.video}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


const VideoCard = ({
  name,
  role,
  video,
  delay,
}: {
  name: string;
  role: string;
  video: string;
  delay: number;
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Play 
  const togglePlay = () => {
    if (!iframeRef.current) return;

    const message = isPlaying
      ? '{"event":"command","func":"pauseVideo","args":""}'
      : '{"event":"command","func":"playVideo","args":""}';

    iframeRef.current.contentWindow?.postMessage(message, "*");
    setIsPlaying(!isPlaying);
  };

  // Função para fullscreen
  const toggleFullScreen = () => {
    if (!containerRef.current) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      containerRef.current.requestFullscreen();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center"
    >
      <div
        ref={containerRef}
        className="relative w-full h-64 rounded-xl overflow-hidden group"
      >
        {/* Player do YouTube */}
        <iframe
          ref={iframeRef}
          src={`${video}?enablejsapi=1&rel=0&controls=0&modestbranding=1&iv_load_policy=3`}
          title={name}
          className="w-full h-full rounded-xl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        ></iframe>

        {/* Overlay com controles */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
          {/* Botão Play/Pause */}
          <button
            onClick={togglePlay}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-md p-3 rounded-full mr-3"
          >
            {isPlaying ? (
              <Pause size={28} className="text-white" />
            ) : (
              <Play size={28} className="text-white" />
            )}
          </button>

          {/* Botão Fullscreen */}
          <button
            onClick={toggleFullScreen}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-md p-3 rounded-full"
          >
            <Maximize2 size={28} className="text-white" />
          </button>
        </div>
      </div>

      {/* Nome e Função */}
      <h3 className="text-lg font-semibold text-gray-800 mt-4">{name}</h3>
      <p className="text-gray-500 text-sm">{role}</p>
    </motion.div>
  );
};
