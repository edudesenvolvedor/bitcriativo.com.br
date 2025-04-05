'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/Section/index';

const portfolioProjects = [
  {
    title: 'Projeto A',
    description: 'Um sistema de gerenciamento de tarefas para pequenas equipes.',
    image: 'https://picsum.photos/600/400',
    link: '#',
  },
  {
    title: 'Projeto B',
    description: 'Plataforma de e-commerce personalizada com integração de pagamentos.',
    image: 'https://picsum.photos/600/400',
    link: '#',
  },
  {
    title: 'Projeto C',
    description: 'Aplicativo móvel para rastreamento de hábitos saudáveis.',
    image: 'https://picsum.photos/600/400',
    link: '#',
  },
  {
    title: 'Projeto D',
    description: 'Site institucional para uma organização sem fins lucrativos.',
    image: 'https://picsum.photos/600/400',
    link: '#',
  },
];

export function Portfolio() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Section id="portfolio" ref={sectionRef} label={'Portfólio'} className={'text-center'}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-5xl md:text-6xl font-bold uppercase text-gray-900 leading-tight"
      >
        <span className="text-red-500">Nossos</span> Portfólio
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto pb-16"
      >
        Explore alguns dos nossos projetos anteriores. Cada um desses casos de sucesso representa a
        nossa capacidade de transformar ideias em soluções reais e eficazes para nossos clientes.
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {portfolioProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.2 }}
            className="relative group p-4 bg-white shadow-lg border border-gray-300 rounded-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center p-4">
              <div className="text-white">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-lg mt-2">{project.description}</p>
                <a href={project.link} className="mt-4 inline-block text-sm text-white underline">
                  Ver mais
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
