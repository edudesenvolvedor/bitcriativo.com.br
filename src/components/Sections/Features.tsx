'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sections } from '@/components/Sections/index';
import { CheckCircle } from 'lucide-react';

const features = [
  {
    title: 'Suporte Especializado',
    description:
      'Tenha acesso a uma equipe de TI altamente qualificada para dar suporte ao seu negócio.',
  },
  {
    title: 'Desenvolvimento Personalizado',
    description: 'Criamos soluções sob medida para atender às necessidades da sua empresa.',
  },
  {
    title: 'Segurança Avançada',
    description: 'Proteja seus dados e sistemas com as melhores práticas de segurança digital.',
  },
  {
    title: 'Escalabilidade Garantida',
    description: 'Nossos serviços crescem junto com o seu negócio, sem complicações.',
  },
];

const Features = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 },
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
    <Sections id="recursos" ref={sectionRef} className={'text-center'}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-5xl md:text-6xl font-bold uppercase text-gray-900 leading-tight"
      >
        <span className="text-red-500">Nossas</span> Features
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
      >
        Conheça os benefícios exclusivos que oferecemos para a sua empresa crescer com tecnologia.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-12 mt-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.2 }}
            className="flex items-start text-start space-x-4"
          >
            <CheckCircle className="w-10 h-10 text-red-500 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-lg text-gray-600 mt-2">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Sections>
  );
};

export { Features };
