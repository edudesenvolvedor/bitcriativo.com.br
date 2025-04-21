import { Navbar } from '@/components/Navbar';
import { ReactNode } from 'react';
import { Footer } from '@/components/Section/Footer';

type Props = {
  children: ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
