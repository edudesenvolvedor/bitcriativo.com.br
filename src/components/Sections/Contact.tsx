'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Sections } from '@/components/Sections/index';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [hasAnimated, setHasAnimated] = useState(false); // Marca se a animação já foi disparada
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO Implement data sending logic
    console.log('Form Data Submitted:', formData);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true); // Dispara a animação apenas uma vez
        }
      },
      {
        threshold: 0.75, // Aciona quando 75% do componente estiver visível
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Limpeza do observer ao desmontar o componente
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <Sections
      id="contato"
      label={'Contato'}
      labelAlign={'bottomLeft'}
      className={'text-center'}
      ref={sectionRef}
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : -30 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-5xl md:text-6xl font-bold uppercase text-gray-900 leading-tight"
      >
        Fale <span className="text-red-500">Conosco</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : -30 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
      >
        Tem alguma dúvida ou quer saber mais sobre nossos serviços? Preencha o formulário abaixo e
        entraremos em contato!
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        className="mt-12 max-w-2xl mx-auto grid gap-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 30 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
      >
        <div>
          <label htmlFor="name" className="block text-lg text-gray-900 font-semibold mb-2">
            Nome
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu Nome"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-lg text-gray-900 font-semibold mb-2">
            E-mail
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Seu E-mail"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-lg text-gray-900 font-semibold mb-2">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-6 py-4 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-red-500 outline-none"
            placeholder="Sua Mensagem"
            rows={6}
            required
          />
        </div>

        <Button type="submit" variant="secondary">
          Enviar Mensagem
        </Button>
      </motion.form>
    </Sections>
  );
};

export { Contact };
