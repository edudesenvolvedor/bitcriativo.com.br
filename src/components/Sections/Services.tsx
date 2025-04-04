'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sections } from '@/components/Sections/index';
import { Code, ShieldCheck, Cloud, Users } from 'lucide-react';

const services = [
  {
    title: 'Desenvolvimento de Software',
    description:
      'Criamos soluções sob medida para sua empresa, desde aplicativos até sistemas completos.',
    icon: <Code className="w-12 h-12 text-red-500" />,
  },
  {
    title: 'Segurança da Informação',
    description: 'Protegemos seus dados e sistemas com as melhores práticas de segurança digital.',
    icon: <ShieldCheck className="w-12 h-12 text-red-500" />,
  },
  {
    title: 'Infraestrutura em Nuvem',
    description: 'Modernize sua empresa com soluções escaláveis e seguras em cloud computing.',
    icon: <Cloud className="w-12 h-12 text-red-500" />,
  },
  {
    title: 'Consultoria e Suporte',
    description:
      'Tenha acesso a especialistas em TI para orientar e manter sua empresa sempre inovadora.',
    icon: <Users className="w-12 h-12 text-red-500" />,
  },
];

const Services = () => {
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
    <Sections ref={sectionRef} className={'text-center'}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-5xl md:text-6xl font-bold uppercase text-gray-900 leading-tight"
      >
        <span className="text-red-500">Nossos</span> Serviços
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
      >
        Soluções tecnológicas sob medida para impulsionar sua empresa ao próximo nível.
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mt-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.2 }}
            className="flex flex-col items-center text-center p-6 bg-white shadow-xl rounded-lg transition-all hover:scale-105 duration-300"
          >
            <div>{service.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-900 mt-4">{service.title}</h3>
            <p className="text-lg text-gray-600 mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </Sections>
  );
};

export { Services };
