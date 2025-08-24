import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
const faqs = [{
  id: 1,
  question: 'Quais são os principais tratamentos oferecidos?',
  answer: 'Oferecemos uma ampla gama de tratamentos estéticos, incluindo harmonização facial, preenchimento labial, botox, laser CO2 fracionado, peeling químico e microagulhamento, entre outros.'
}, {
  id: 2,
  question: 'Os procedimentos são dolorosos?',
  answer: 'A maioria dos nossos procedimentos causa desconforto mínimo. Utilizamos técnicas e produtos anestésicos para garantir o máximo conforto durante os tratamentos.'
}, {
  id: 3,
  question: 'Quanto tempo duram os resultados?',
  answer: 'A duração dos resultados varia conforme o procedimento e características individuais. Procedimentos como botox duram de 4 a 6 meses, enquanto preenchimentos podem durar de 6 a 18 meses.'
}, {
  id: 4,
  question: 'É necessário fazer manutenção dos tratamentos?',
  answer: 'Sim, a maioria dos tratamentos estéticos requer manutenção periódica para manter os resultados. Durante a consulta, nossos profissionais informarão sobre o cronograma recomendado para cada caso.'
}, {
  id: 5,
  question: 'Como agendar uma consulta?',
  answer: 'Você pode agendar uma consulta através do nosso site, por telefone ou WhatsApp. Oferecemos também a opção de avaliação inicial online para sua comodidade.'
}, {
  id: 6,
  question: 'Os procedimentos têm recuperação?',
  answer: 'O tempo de recuperação varia conforme o procedimento. Alguns tratamentos não exigem tempo de recuperação, enquanto outros podem necessitar de alguns dias. Todas as informações sobre recuperação são fornecidas durante a consulta.'
}];
export function FAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };
  return <section className="py-24 bg-white">
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
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Encontre respostas para as dúvidas mais comuns sobre nossos
            tratamentos e procedimentos.
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => <motion.div key={faq.id} initial={{
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
        }} className="mb-4">
              <button onClick={() => toggleItem(faq.id)} className={`w-full text-left p-6 rounded-xl flex justify-between items-center transition-all ${openItem === faq.id ? 'bg-[#999c7f] text-white shadow-md' : 'bg-gray-50 text-gray-800 hover:bg-gray-100'}`}>
                <span className="font-medium text-lg">{faq.question}</span>
                {openItem === faq.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <AnimatePresence>
                {openItem === faq.id && <motion.div initial={{
              height: 0,
              opacity: 0
            }} animate={{
              height: 'auto',
              opacity: 1
            }} exit={{
              height: 0,
              opacity: 0
            }} transition={{
              duration: 0.3
            }} className="overflow-hidden">
                    <div className="p-6 bg-white border border-gray-100 rounded-b-xl shadow-sm">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>}
              </AnimatePresence>
            </motion.div>)}
        </div>
      </div>
    </section>;
}