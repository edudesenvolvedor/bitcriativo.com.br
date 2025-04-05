import { Hero } from '@/components/Section/Hero';
import { About } from '@/components/Section/About';
import { Features } from '@/components/Section/Features';
import { Services } from '@/components/Section/Services';
import { Testimonials } from '@/components/Section/Testimonials';
import { Contact } from '@/components/Section/contact';
import { MainLayout } from '@/layouts/MainLayout';
import { Portfolio } from '@/components/Section/Portfolio';
import { Pricing } from '@/components/Section/pricing';

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
