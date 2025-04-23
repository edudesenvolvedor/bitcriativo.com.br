'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import React, { FC, useState } from 'react';
import { Button } from '@/components/ui/button';

import { RequestQuote } from '../forms/request-quote';

interface IProps {
  textButton: string;
}

export const ButtonQuoteRequest: FC<IProps> = ({ textButton }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleCloseDialog = () => {
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

          <RequestQuote
            handleCloseDialog={handleCloseDialog}
            btnClose={
              <Dialog.Close asChild>
                <Button type="button" className="font-semibold" variant="outline">
                  Cancelar
                </Button>
              </Dialog.Close>
            }
          />

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
