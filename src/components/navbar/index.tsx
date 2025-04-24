'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import imageBrand from '@/assets/images/logo.png';
import { cva } from 'class-variance-authority';
import { Navlink } from '@/components/navbar/navlink';
import { List } from '@phosphor-icons/react/dist/ssr';

export const navbarVariants = cva(
  'z-40 fixed top-0 left-0 w-full transition-all duration-300 p-4',
  {
    variants: {
      hasBackground: {
        true: 'bg-white shadow-lg',
        false: 'bg-transparent',
      },
    },
  },
);

export const menuVariants = cva(
  'absolute lg:static top-16 left-0 w-full lg:w-auto transition-all lg:flex lg:items-center space-x-8 p-4',
  {
    variants: {
      isMenuOpen: {
        true: 'block bg-white lg:bg-transparent',
        false: 'hidden bg-white lg:bg-transparent',
      },
    },
  },
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <NavbarContainer>
      <Brand />

      <div className={menuVariants({ isMenuOpen })}>
        <ListLinks toggleMenu={toggleMenu} />
        <Link href={'/#planos'}>
          <Button className="w-full" onClick={toggleMenu}>
            Quero um Orçamento
          </Button>
        </Link>
      </div>

      <button className="lg:hidden text-[#101828] focus:outline-none" onClick={toggleMenu}>
        <List size={24} />
      </button>
    </NavbarContainer>
  );
};

interface INavbarContainerProps {
  children: ReactNode;
}

const NavbarContainer = ({ children }: INavbarContainerProps) => {
  const [hasBackground, setHasBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasBackground(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={navbarVariants({ hasBackground })}>
      <div className="flex justify-between items-center max-w-7xl mx-auto">{children}</div>
    </nav>
  );
};

const Brand = () => {
  return (
    <Link href="/" className="text-[#101828] text-2xl flex space-x-2">
      <Image src={imageBrand} alt="logo" width={34} height={34} />
      <span>
        Bit <span className="text-[#FB2C36]">Criativo</span>
      </span>
    </Link>
  );
};

interface IListLinksProps {
  toggleMenu: () => void;
}

const ListLinks = ({ toggleMenu }: IListLinksProps) => {
  return (
    <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 p-4 lg:p-0 text-center *:py-2">
      <Navlink href="inicio" onClick={toggleMenu}>
        Início
      </Navlink>
      <Navlink href="sobre-nos" onClick={toggleMenu}>
        Sobre nós
      </Navlink>
      <Navlink href="servicos" onClick={toggleMenu}>
        Serviços
      </Navlink>
      <Navlink href="depoimentos" onClick={toggleMenu}>
        Depoimentos
      </Navlink>
      <Navlink href="planos" onClick={toggleMenu}>
        Preço
      </Navlink>
      <Navlink href="contato" onClick={toggleMenu}>
        Contato
      </Navlink>
    </ul>
  );
};

export { Navbar };
