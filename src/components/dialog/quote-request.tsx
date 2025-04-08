'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import Input from '@/components/Input';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '@/components/Button';

interface IProps {
  textButton: string;
}

interface IFormData {
  name: string;
  phoneNumber: string;
  email: string;
}

export const ButtonQuoteRequest: FC<IProps> = ({ textButton }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { register, handleSubmit } = useForm<IFormData>();

  const handleSubmitForm = (data: IFormData) => {
    console.log('Formulário enviado:', data);
    setIsOpen(false);
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
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

          <form onSubmit={handleSubmit(handleSubmitForm)} className="space-y-4 mt-4">
            <label htmlFor="name" className="block text-lg text-gray-900 font-semibold mb-1">
              Nome
            </label>
            <Input id="name" {...register('name')} type="text" placeholder="Seu nome" />

            <label htmlFor="phoneNumber" className="block text-lg text-gray-900 font-semibold mb-1">
              Telefone
            </label>
            <Input
              id="phoneNumber"
              {...register('phoneNumber')}
              type="text"
              placeholder="Seu telefone"
            />

            <label htmlFor="email" className="block text-lg text-gray-900 font-semibold mb-1">
              Email
            </label>
            <Input id="email" {...register('email')} type="email" placeholder="Seu email" />

            <div className="mt-6 flex justify-end gap-2">
              <Dialog.Close asChild>
                <Button type="submit" className="font-semibold" variant="ghost">
                  Cancelar
                </Button>
              </Dialog.Close>

              <Button type="submit" className="font-semibold">
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
