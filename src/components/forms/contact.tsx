'use client';

import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { Contact as ContactType, ContactSchema } from '@/lib/schemas/contact-schema';
import { Button } from '@/components/ui/button';
import { Input, MaskedPhoneInput } from '@/components/ui/input';
import { FormErrorMessage } from '@/components/form-error-message';
import { Textarea } from '../ui/textarea';
import { sendMessageContact } from '@/lib/data/send-message-contact';

export const FormContact = () => {
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

  const handleSubmitForm = async (data: ContactType) => {
    setIsLoading(true);

    try {
      await sendMessageContact(data.name, data.phoneNumber, data.email, data.message);

      toast.success('Solicitação enviada com sucesso!');
      reset();
    } catch (e) {
      console.error(e);
      toast.error(
        'Não foi possível enviar sua solicitação. Por favor, tente novamente mais tarde.',
      );
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className="max-w-2xl mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-lg text-gray-900 font-semibold mb-2">
          Nome
        </label>
        <Input
          {...register('name')}
          id="name"
          className={errors.name ? 'border-red-500' : ''}
          type="text"
          placeholder="Seu Nome"
        />
        <FormErrorMessage message={errors.name?.message} />
      </div>

      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-lg text-gray-900 font-semibold mb-2">
          Telefone
        </label>
        <Controller
          name="phoneNumber"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <MaskedPhoneInput
              id="phoneNumber"
              className={errors.phoneNumber ? 'border-red-500' : ''}
              placeholder="(99) 99999-9999"
              {...field}
            />
          )}
        />
        <FormErrorMessage message={errors.phoneNumber?.message} />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-lg text-gray-900 font-semibold mb-2">
          E-mail
        </label>
        <Input
          {...register('email')}
          id="email"
          className={errors.email ? 'border-red-500' : ''}
          type="email"
          placeholder="Seu E-mail"
        />
        <FormErrorMessage message={errors.email?.message} />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-lg text-gray-900 font-semibold mb-2">
          Mensagem
        </label>
        <Textarea
          {...register('message')}
          id="message"
          className={errors.message ? 'border-red-500' : ''}
          placeholder="Sua Mensagem"
          rows={6}
        />
        <FormErrorMessage message={errors.message?.message} />
      </div>

      <Button
        isLoading={isLoading}
        type="submit"
        variant="primary"
        className={'w-full uppercase'}
        size={'lg'}
      >
        Enviar Mensagem
      </Button>
    </form>
  );
};
