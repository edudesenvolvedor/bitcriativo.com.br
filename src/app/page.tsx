import { Hero } from '@/components/Sections/Hero';
import { About } from '@/components/Sections/About';
import { Features } from '@/components/Sections/Features';
import { Services } from '@/components/Sections/Services';
import { Testimonials } from '@/components/Sections/Testimonials';
import { Contact } from '@/components/Sections/contact';
import { MainLayout } from '@/layouts/MainLayout';
import { Portfolio } from '@/components/Sections/Portfolio';
import { Pricing } from '@/components/Sections/Pricing';

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
