'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Newsletter, newsletterSchema } from '@/lib/schemas/newsletter-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { toast } from 'sonner';
import Input from '@/components/input';
import { Button } from '@/components/ui/button';

export const FormSubscribeNewsletter: FC = () => {
  const { register, handleSubmit, reset } = useForm<Newsletter>({
    resolver: zodResolver(newsletterSchema),
  });

  const handleSubmitSubscribeNewsletter = async (data: Newsletter): Promise<void> => {
    try {
      const request = await axios.post('http://localhost:3000/api/v1/newsletter', {
        email: data.email,
      });

      if (request.status === 200) {
        toast.success('Inscrito com sucesso!');
      }
    } catch (err) {
      toast.error('Ops...por favor, tenta mais tarde!');
      console.error(err);
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitSubscribeNewsletter)}>
      <Input {...register('email')} type="email" placeholder="Seu email" className={'text-black'} />
      <Button variant={'primary'} className="mt-4 w-full">
        Inscrever
      </Button>
    </form>
  );
};
