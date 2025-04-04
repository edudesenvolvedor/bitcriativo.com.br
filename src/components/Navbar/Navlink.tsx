import Link from 'next/link';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  href?: string;
  isActive?: boolean;
};

export const Navlink = ({ children, href, isActive }: Props) => {
  return (
    <li>
      <Link
        href={href || '/#'}
        className={`text-xl font-bold select-none ${isActive ? 'text-[#FB2C36]' : 'text-foreground hover:text-[#FB2C36]'}`}
      >
        {children}
      </Link>
    </li>
  );
};
