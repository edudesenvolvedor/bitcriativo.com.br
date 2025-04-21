import { Hero } from '@/components/section/Hero';
import { About } from '@/components/section/About';
import { Features } from '@/components/section/Features';
import { Services } from '@/components/section/Services';
import { Contact } from '@/components/section/contact';
import { MainLayout } from '@/layouts/MainLayout';
import { Portfolio } from '@/components/section/Portfolio';
import { Pricing } from '@/components/section/pricing';
import { Testimonials } from '@/components/section/testimonials';

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
