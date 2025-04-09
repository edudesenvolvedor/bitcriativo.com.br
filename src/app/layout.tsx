import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';
import { ReactNode } from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'BitCriativo | Soluções de TI e Desenvolvimento de Sistemas para Pequenas Empresas',
  description:
    'Faça o melhor investimento em tecnologia para sua empresa. A BitCriativo oferece soluções personalizadas em TI, desenvolvimento de sistemas e suporte técnico para pequenas e médias empresas.',
  keywords: [
    'Bitcriativo',
    'desenvolvimento de software',
    'soluções digitais',
    'tecnologia para empresas',
    'equipe de TI especializada',
    'sistemas sob demanda',
    'software personalizado',
    'desenvolvimento web',
    'serviços de TI',
    'consultoria em tecnologia',
    'inovação para pequenas empresas',
    'tecnologia sob demanda',
    'transformação digital',
    'soluções em TI',
    'automação empresarial',
    'startup de tecnologia',
    'desenvolvimento ágil',
    'sistemas personalizados',
    'software para pequenas empresas',
    'terceirização de TI',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
