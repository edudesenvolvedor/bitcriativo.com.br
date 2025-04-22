import { MainLayout } from '@/layouts/main-layout';
import { About } from '@/layouts/section/about';
import { Features } from '@/layouts/section/features';
import { Hero } from '@/layouts/section/hero';
import { Portfolio } from '@/layouts/section/portfolio';
import { Pricing } from '@/layouts/section/pricing';
import { Services } from '@/layouts/section/services';
import { Testimonials } from '@/layouts/section/testimonials';
import { Contact } from 'lucide-react';

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Features />
      <Portfolio />
      <Services />
      <Testimonials />
      <Pricing />
      <Contact />
    </MainLayout>
  );
}
