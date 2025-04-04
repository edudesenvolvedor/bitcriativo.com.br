'use client';

import { motion } from 'framer-motion';
import { Sections } from '@/components/Sections/index';
import Button from '@/components/Button';

export const Hero = () => {
  return (
    <Sections label={'Tecnologia'} className={'grid md:grid-cols-2 gap-8 mt-32 lg:mt-0'}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col justify-center"
      >
        <h1 className="text-6xl md:text-7xl font-bold leading-tight text-gray-900 uppercase">
          Faça o Melhor <span className="text-red-500">Investimento</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-md">
          Sua empresa merece tecnologia de ponta. Acesse uma equipe de TI especializada e impulsione
          seu negócio com inovação.
        </p>
        <div className="mt-6">
          <Button variant={'secondary'}>Comece Agora</Button>
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
    </Sections>
  );
};
