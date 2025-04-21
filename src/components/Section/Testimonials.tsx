'use client';

import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/section/index';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Lucas Almeida',
    position: 'CEO da Tech Innovations',
    text: 'A equipe da startup nos proporcionou uma solução altamente personalizada, que transformou a forma como operamos. Agora, temos suporte contínuo e um sistema que realmente atende às nossas necessidades.',
    rating: 5,
  },
  {
    name: 'Carla Souza',
    position: 'Fundadora da Green Solutions',
    text: 'O trabalho da equipe foi incrível! A consultoria que recebemos ajudou a nossa empresa a escalar de maneira segura e eficiente. Não poderíamos estar mais felizes com o serviço prestado.',
    rating: 5,
  },
  {
    name: 'José Silva',
    position: 'Diretor de TI da Inovatech',
    text: 'A expertise técnica e o suporte contínuo nos deram a confiança de que estamos no caminho certo. A startup se tornou um parceiro essencial no crescimento da nossa empresa.',
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <Section
      id="depoimentos"
      className={'text-center'}
      description={
        <>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold uppercase text-gray-900 leading-tight"
          >
            O que nossos <span className="text-red-500">clientes</span> dizem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
          >
            Veja como a nossa equipe tem impactado positivamente as empresas de nossos clientes.
          </motion.p>
        </>
      }
      label={'depoimentos'}
      labelAlign={'bottomLeft'}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-8 bg-white shadow-lg rounded-lg text-left flex flex-col justify-evenly"
          >
            <CardTestimonial
              name={testimonial.name}
              text={testimonial.text}
              rating={testimonial.rating}
              position={testimonial.position}
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

interface ICardTestimonialProps {
  text: string;
  rating: number;
  name: string;
  position: string;
}

export const CardTestimonial: FC<ICardTestimonialProps> = ({
  text,
  rating,
  name,
  position,
}: ICardTestimonialProps) => {
  return (
    <>
      <p className="text-lg text-gray-600 italic">&quot;{text}&quot;</p>
      <div className="mt-4 flex items-center">
        <div className="flex text-yellow-500">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5" />
          ))}
        </div>
        <div className="ml-4">
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-gray-600">{position}</p>
        </div>
      </div>
    </>
  );
};

export { Testimonials };
