import { Hero } from '@/components/section/Hero';
import { About } from '@/components/section/About';
import { Features } from '@/components/section/Features';
import { Contact } from '@/components/section/contact';
import { MainLayout } from '@/layouts/MainLayout';
import { Portfolio } from '@/components/section/Portfolio';
import { Pricing } from '@/components/section/pricing';
import { Testimonials } from '@/components/section/Testimonials';
import { Services } from '@/components/section/Services';

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
