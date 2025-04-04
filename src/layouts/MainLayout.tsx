import { Navlink } from '@/components/Navbar/Navlink';
import { Navbar } from '@/components/Navbar';
import { ReactNode } from 'react';
import { Footer } from '@/components/Sections/Footer';

type Props = {
  children: ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar>
        <Navlink href="/" isActive>
          Início
        </Navlink>
        <Navlink href="/#sobre">Sobre nós</Navlink>
        <Navlink href="/#servicos">Serviços</Navlink>
        <Navlink href="/#depoimentos">Depoimentos</Navlink>
        <Navlink href="/#preco">Preço</Navlink>
        <Navlink href="/#contato">Contato</Navlink>
      </Navbar>
      {children}
      <Footer />
    </>
  );
};
