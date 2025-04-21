import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/section/layouts/footer';
import { ReactNode } from 'react';

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
