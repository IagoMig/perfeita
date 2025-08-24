import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';
const blogPosts = [{
  id: 1,
  title: 'Os benefícios da harmonização facial',
  excerpt: 'Descubra como a harmonização facial pode realçar seus traços naturais e proporcionar um resultado harmônico e equilibrado.',
  image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  date: '10 Maio, 2023',
  author: 'Dra. Ana Silva',
  category: 'Tratamentos'
}, {
  id: 2,
  title: 'Cuidados pós-procedimento: o que você precisa saber',
  excerpt: 'Entenda a importância dos cuidados após os procedimentos estéticos e como maximizar os resultados dos seus tratamentos.',
  image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  date: '28 Abril, 2023',
  author: 'Dr. Carlos Mendes',
  category: 'Cuidados'
}, {
  id: 3,
  title: 'Tendências em estética para 2023',
  excerpt: 'Conheça as principais tendências em procedimentos estéticos para este ano e como elas podem beneficiar diferentes perfis de pacientes.',
  image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  date: '15 Março, 2023',
  author: 'Dra. Juliana Costa',
  category: 'Tendências'
}];
export function BlogSection() {
  return <section className="py-24 bg-gray-50">
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
            Blog e Novidades
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Fique por dentro das últimas novidades em estética e cuidados com a
            beleza.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => <motion.div key={post.id} initial={{
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
              <div className="h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <span className="inline-block px-3 py-1 bg-[#999c7f] bg-opacity-10 text-[#999c7f] text-xs font-medium rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a href="#" className="inline-flex items-center text-[#999c7f] font-medium hover:underline">
                  Ler mais <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </motion.div>)}
        </div>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.3
      }} className="mt-12 text-center">
          <a href="#" className="inline-flex items-center text-[#999c7f] font-medium text-lg hover:underline">
            Ver todos os artigos <ArrowRight size={18} className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>;
}