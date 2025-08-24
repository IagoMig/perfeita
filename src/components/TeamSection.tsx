import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail } from 'lucide-react';
const teamMembers = [{
  id: 1,
  name: 'Dra. Ana Silva',
  role: 'Diretora Clínica e Dermatologista',
  image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  bio: 'Especialista em dermatologia estética com mais de 15 anos de experiência. Formada pela USP com especializações no Brasil e exterior.',
  social: {
    instagram: '#',
    linkedin: '#',
    email: 'ana.silva@clinicaperfeita.com.br'
  }
}, {
  id: 2,
  name: 'Dr. Carlos Mendes',
  role: 'Cirurgião Plástico',
  image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
  bio: 'Especialista em cirurgia plástica facial com foco em procedimentos minimamente invasivos. Membro da Sociedade Brasileira de Cirurgia Plástica.',
  social: {
    instagram: '#',
    linkedin: '#',
    email: 'carlos.mendes@clinicaperfeita.com.br'
  }
}, {
  id: 3,
  name: 'Dra. Juliana Costa',
  role: 'Esteticista Facial',
  image: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80',
  bio: 'Especialista em procedimentos estéticos avançados e cuidados com a pele. Formada em Estética e Cosmética com pós-graduação em Dermatologia Estética.',
  social: {
    instagram: '#',
    linkedin: '#',
    email: 'juliana.costa@clinicaperfeita.com.br'
  }
}, {
  id: 4,
  name: 'Dr. Ricardo Oliveira',
  role: 'Especialista em Harmonização Facial',
  image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  bio: 'Referência em harmonização facial com abordagem natural e personalizada. Formado em Odontologia com especialização em Harmonização Orofacial.',
  social: {
    instagram: '#',
    linkedin: '#',
    email: 'ricardo.oliveira@clinicaperfeita.com.br'
  }
}];
export function TeamSection() {
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
            Nossa Equipe
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Conheça os profissionais dedicados a cuidar da sua beleza e
            bem-estar.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => <motion.div key={member.id} initial={{
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
        }} className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="h-72 overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#999c7f] mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{member.role}</p>
                <p className="text-gray-600 mb-5 text-sm">{member.bio}</p>
                <div className="flex space-x-3">
                  <a href={member.social.instagram} className="text-gray-500 hover:text-[#999c7f] transition-colors" aria-label={`Instagram de ${member.name}`}>
                    <Instagram size={18} />
                  </a>
                  <a href={member.social.linkedin} className="text-gray-500 hover:text-[#999c7f] transition-colors" aria-label={`LinkedIn de ${member.name}`}>
                    <Linkedin size={18} />
                  </a>
                  <a href={`mailto:${member.social.email}`} className="text-gray-500 hover:text-[#999c7f] transition-colors" aria-label={`Email de ${member.name}`}>
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}