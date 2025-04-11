'use client';

import React from 'react';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Newsletter, newsletterSchema } from '@/libs/schemas/newsletter-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { toast } from 'sonner';

const Footer = () => {
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
    <footer className="bg-gray-900 text-white py-12 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-3xl font-bold uppercase">Bit Criativo</h2>
          <p className="text-lg text-gray-400 mt-4">
            Transformando a tecnologia para pequenas empresas.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 text-lg">
          <div>
            <h3 className="font-semibold mb-4 text-red-500">Siga-nos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://www.linkedin.com" className="hover:text-red-500">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com" className="hover:text-red-500">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="https://www.twitter.com" className="hover:text-red-500">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com" className="hover:text-red-500">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-red-500">Contato</h3>
            <ul className="space-y-2">
              <li>E-Mail: contato@bitcriativo.com.br</li>
              <li>Telefone: (91) 98556-1718</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-red-500">Assine nossa Newsletter</h3>
            <form onSubmit={handleSubmit(handleSubmitSubscribeNewsletter)}>
              <Input
                {...register('email')}
                type="email"
                placeholder="Seu email"
                className={'text-black'}
              />
              <Button variant={'primary'} className="mt-4 w-full">
                Inscrever
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bit Criativo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
