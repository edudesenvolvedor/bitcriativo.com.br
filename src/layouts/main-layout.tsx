import { Navbar } from '@/components/navbar';
import { ReactNode } from 'react';
import { Footer } from '@/layouts/section/footer';

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
