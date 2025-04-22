'use client';

import { Link } from 'react-scroll';
import React, { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
}

export const Navlink: FC<IProps> = ({ children, onClick, href = '#' }: IProps) => {
  return (
    <li className={'text-foreground hover:text-[#FB2C36] hover:cursor-pointer'}>
      <Link
        activeClass={'text-[#FB2C36]'}
        to={href}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className={'text-xl font-bold select-none'}
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  );
};
