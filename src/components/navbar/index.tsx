'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import imageBrand from '@/assets/images/logo.png';
import { cva } from 'class-variance-authority';
import { Navlink } from '@/components/navbar/navlink';

export const navbarVariants = cva('z-40 fixed top-0 left-0 w-full transition-all duration-300', {
  variants: {
    hasBackground: {
      true: 'bg-white shadow-lg',
      false: 'bg-transparent',
    },
  },
});

export const menuVariants = cva(
  'absolute lg:static top-16 left-0 w-full lg:w-auto transition-all lg:flex lg:items-center space-x-8 px-4 py-4',
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
  const [hasBackground, setHasBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasBackground(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className={navbarVariants({ hasBackground })}>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="text-[#101828] text-2xl flex space-x-2">
          <Image src={imageBrand} alt="logo" width={34} height={34} />
          <span>
            Bit <span className="text-[#FB2C36]">Criativo</span>
          </span>
        </Link>

        <div className={menuVariants({ isMenuOpen })}>
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

          <Link href={'/#planos'}>
            <Button className="w-full" onClick={toggleMenu}>
              Quero um Orçamento
            </Button>
          </Link>
        </div>

        <button className="lg:hidden text-[#101828] focus:outline-none" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export { Navbar };
