'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/Section/index';
import imgAboutUs from '@/assets/images/img_4.png';
import Image from 'next/image';
import Link from 'next/link';

export const About = () => {
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
    <Section
      id="sobre-nos"
      ref={sectionRef}
      label={'Sobre nós'}
      labelAlign={'bottomRight'}
      className={'grid md:grid-cols-2 gap-8'}
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col"
      >
        <h2 className="text-5xl md:text-6xl font-bold uppercase text-gray-900 leading-tight">
          <span className="text-red-500">Sobre</span> Nós
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-md">
          Nossa missão é democratizar o acesso à tecnologia para pequenas empresas, oferecendo
          soluções sob medida com uma equipe de TI altamente especializada.
        </p>
        <p className="text-lg text-gray-600 mt-4 max-w-md">
          Com um modelo de assinatura acessível, garantimos que sua empresa tenha suporte
          tecnológico contínuo para crescer com inovação e segurança.
        </p>
        <div className="mt-6 flex">
          <Link
            className={
              'flex items-center justify-center font-medium rounded-lg transition-all duration-300 cursor-pointer bg-gray-900 text-white hover:bg-gray-700 py-3 px-6'
            }
            href={'/#contato'}
          >
            Fale Conosco
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        className="relative flex items-center justify-center"
      >
        <Image
          src={imgAboutUs}
          alt="Equipe de tecnologia"
          className="w-full h-auto object-cover shadow-2xl"
        />
      </motion.div>
    </Section>
  );
};
