'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/Section/index';
import Link from 'next/link';

export const Hero = () => {
  return (
    <Section
      id="inicio"
      label={'Tecnologia'}
      className={'grid md:grid-cols-2 gap-8 mt-32 lg:mt-0 text-start'}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col justify-center"
      >
        <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold leading-tight text-gray-900 uppercase">
          Faça o Melhor <span className="text-red-500">Investimento</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-md">
          Sua empresa merece tecnologia de ponta. Acesse uma equipe de TI especializada e impulsione
          seu negócio com inovação.
        </p>
        <div className="mt-6 flex">
          <Link
            className={
              'flex items-center justify-center font-medium rounded-lg transition-all duration-300 cursor-pointer bg-gray-900 text-white hover:bg-gray-700 py-3 px-6 w-full md:w-auto'
            }
            href={'/#planos'}
          >
            Comece Agora
          </Link>
        </div>
      </motion.div>

      <div className="relative flex items-center justify-center">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          src="https://markeythemes.vercel.app/skywave/images/bg-img-3.png"
          alt="Tecnologia"
          className="w-full h-auto object-cover"
        />
        <motion.img
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
          src="https://markeythemes.vercel.app/skywave/images/user-msg.png"
          alt="Tecnologia"
          className="absolute h-auto object-cover"
        />
      </div>
    </Section>
  );
};
