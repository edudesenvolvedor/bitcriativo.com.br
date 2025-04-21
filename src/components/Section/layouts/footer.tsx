import React from 'react';
import Link from 'next/link';
import { FormSubscribeNewsletter } from '@/components/forms/subscribe-newsletter';

const Footer = () => {
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
          <SocialNetworks />
          <Contact />
          <Newsletter />
        </div>

        <div className="mt-12 text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bit Criativo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialNetworks = () => {
  return (
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
  );
};

const Contact = () => {
  return (
    <div>
      <h3 className="font-semibold mb-4 text-red-500">Contato</h3>
      <ul className="space-y-2">
        <li>Email: contato@bitcriativo.com.br</li>
        <li>Telefone: (91) 98556-1718</li>
      </ul>
    </div>
  );
};

const Newsletter = () => {
  return (
    <div>
      <h3 className="font-semibold mb-4 text-red-500">Assine nossa Newsletter</h3>
      <FormSubscribeNewsletter />
    </div>
  );
};

export { Footer };
