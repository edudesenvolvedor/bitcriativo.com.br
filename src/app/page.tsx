import { Hero } from '@/components/section/hero';
import { About } from '@/components/section/about';
import { Features } from '@/components/section/features';
import { Contact } from '@/components/section/contact';
import { MainLayout } from '@/layouts/MainLayout';
import { Portfolio } from '@/components/section/portfolio';
import { Pricing } from '@/components/section/pricing';
import { Testimonials } from '@/components/section/testimonials';
import { Services } from '@/components/section/services';

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
