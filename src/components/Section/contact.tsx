'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Section } from '@/components/section/index';
import Input from '@/components/Input';
import Button from '@/components/button';
import { motion } from 'framer-motion';
import { Controller, FieldErrors, useForm } from 'react-hook-form';
import { Contact as ContactType, ContactSchema } from '@/lib/schemas/contact-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import MaskedPhoneInput from '@/components/Input/masked-phone-input';
import { Textarea } from '@headlessui/react';
import { FormErrorMessage } from '@/components/form-error-message';
import { QuoteRequest } from '@/lib/schemas/quote-request-schema';
import { toast } from 'sonner';
import { api } from '@/lib/data/api';
import { generateEmailHtml } from '@/templates/email/quote-request';

const Contact = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactType>({
    resolver: zodResolver(ContactSchema),
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleSubmitForm = async (data: QuoteRequest) => {
    setIsLoading(true);

    for (let x = 0; x < 3; x++) {
      try {
        const statusCheck = await api.get('/status');

        if (statusCheck.status !== 200) {
          console.log('API status check failed, attempt:', x + 1);
          continue;
        }

        await api.post('/contact/email/send', {
          firstName: data.name,
          lastName: 'doe',
          phoneNumber: data.phoneNumber,
          email: data.email,
          subject: `Solicitação de Orçamento | ${data.name}`,
          message: generateEmailHtml(data),
        });

        toast.success('Solicitação enviada com sucesso!');
        reset();
        break;
      } catch (e) {
        console.error('Erro na tentativa', x + 1, e);
        if (x === 2) {
          toast.error(
            'Não foi possível enviar sua solicitação. Por favor, tente novamente mais tarde.',
          );
        }
      }
    }

    setIsLoading(false);
  };

  const onError = (errors: FieldErrors<QuoteRequest>) => {
    console.error('Erros de validação:', errors);
    toast.error('Por favor, corrija os erros no formulário antes de enviar.');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.75,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <Section
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
        onSubmit={handleSubmit(handleSubmitForm, onError)}
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
            {...register('name')}
            className={errors.name ? 'border-red-500' : ''}
            type="text"
            placeholder="Seu Nome"
          />
          <FormErrorMessage message={errors.name?.message} />
        </div>

        <div>
          <label htmlFor="name" className="block text-lg text-gray-900 font-semibold mb-2">
            Telefone
          </label>
          <Controller
            name="phoneNumber"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <MaskedPhoneInput
                id="phoneNumber"
                className={`w-full border px-4 py-2 ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="(99) 99999-9999"
                {...field}
              />
            )}
          />
          <FormErrorMessage message={errors.phoneNumber?.message} />
        </div>

        <div>
          <label htmlFor="email" className="block text-lg text-gray-900 font-semibold mb-2">
            E-mail
          </label>
          <Input
            {...register('email')}
            className={errors.name ? 'border-red-500' : ''}
            type="email"
            placeholder="Seu E-mail"
          />
          <FormErrorMessage message={errors.email?.message} />
        </div>

        <div>
          <label htmlFor="message" className="block text-lg text-gray-900 font-semibold mb-2">
            Mensagem
          </label>
          <Textarea
            {...register('message')}
            className={`w-full px-6 py-4 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-red-500 outline-none ${errors.name ? 'border-red-500' : ''}`}
            placeholder="Sua Mensagem"
            rows={6}
          />
          <FormErrorMessage message={errors.message?.message} />
        </div>

        <Button isLoading={isLoading} type="submit" variant="secondary">
          Enviar Mensagem
        </Button>
      </motion.form>
    </Section>
  );
};

export { Contact };
