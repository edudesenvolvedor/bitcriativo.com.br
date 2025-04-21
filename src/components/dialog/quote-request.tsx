'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import Input from '@/components/Input';
import React, { FC, useState } from 'react';
import { useForm, Controller, FieldErrors } from 'react-hook-form';
import Button from '@/components/Button';
import MaskedPhoneInput from '@/components/Input/masked-phone-input';
import { api } from '@/lib/data/api';
import { generateEmailHtml } from '@/templates/email/quote-request';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { QuoteRequest, QuoteRequestSchema } from '@/lib/schemas/quote-request-schema';
import { FormErrorMessage } from '@/components/form-error-message';

interface IProps {
  textButton: string;
}

export const ButtonQuoteRequest: FC<IProps> = ({ textButton }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<QuoteRequest>({
    resolver: zodResolver(QuoteRequestSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: QuoteRequest) => {
    setIsLoading(true);
    let success = false;

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
        success = true;
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
    if (success) {
      setIsOpen(false);
    }
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      reset();
    }
    setIsOpen(open);
  };

  const onError = (errors: FieldErrors<QuoteRequest>) => {
    console.error('Erros de validação:', errors);
    toast.error('Por favor, corrija os erros no formulário antes de enviar.');
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
      <Dialog.Trigger asChild>
        <Button className="w-full mt-8 font-semibold">{textButton}</Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-50 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-xl focus:outline-none">
          <Dialog.Title className="text-lg font-bold text-gray-800">
            Solicitar Orçamento
          </Dialog.Title>
          <Dialog.Description className="mt-2 text-gray-600">
            Preencha seus dados para que nossa equipe entre em contato com você.
          </Dialog.Description>

          <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-4 mt-4">
            <label htmlFor="name" className="block text-lg text-gray-900 font-semibold mb-1">
              Nome
            </label>
            <Input
              id="name"
              {...register('name')}
              type="text"
              placeholder="Seu nome"
              className={errors.name ? 'border-red-500' : ''}
            />
            <FormErrorMessage message={errors.name?.message} />

            <label htmlFor="phoneNumber" className="block text-lg text-gray-900 font-semibold mb-1">
              Telefone
            </label>
            <Controller
              name="phoneNumber"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <MaskedPhoneInput
                  id="phoneNumber"
                  className={`w-full border px-4 py-2 rounded-xl ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="(99) 99999-9999"
                  {...field}
                />
              )}
            />
            <FormErrorMessage message={errors.phoneNumber?.message} />

            <label htmlFor="email" className="block text-lg text-gray-900 font-semibold mb-1">
              Email
            </label>
            <Input
              id="email"
              {...register('email')}
              type="email"
              placeholder="Seu email"
              className={errors.email ? 'border-red-500' : ''}
            />
            <FormErrorMessage message={errors.email?.message} />

            <div className="mt-6 flex justify-end gap-2">
              <Dialog.Close asChild>
                <Button type="button" className="font-semibold" variant="ghost">
                  Cancelar
                </Button>
              </Dialog.Close>

              <Button isLoading={isLoading} type="submit" className="font-semibold">
                Enviar
              </Button>
            </div>
          </form>

          <Dialog.Close asChild>
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 hover:cursor-pointer"
              aria-label="Fechar"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
