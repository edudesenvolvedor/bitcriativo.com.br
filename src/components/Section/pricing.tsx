import React from 'react';
import { Section } from '@/components/Section';
import PricingCard from '@/components/pricing-card';
import { getPlansData } from '@/libs/data/getPlansData';
import { cva, type VariantProps } from 'class-variance-authority';

interface IProps extends VariantProps<typeof styles> {
  plans: ReturnType<typeof getPlansData>;
}

const styles = cva('grid gap-6 mt-12', {
  variants: {
    columns: {
      one: 'sm:grid-cols-1',
      two: 'md:grid-cols-2',
      three: 'xl:grid-cols-3',
    },
    container: {
      base: 'md:max-w-5xl md:mx-auto',
      full: 'w-full',
    },
  },
  defaultVariants: {
    columns: 'three',
    container: 'base',
  },
});

const PricingGrid = ({ plans, columns, container }: IProps) => (
  <div className="container mx-auto text-center">
    <div className={styles({ columns, container })}>
      {plans.map((plan, index) => (
        <PricingCard key={index} {...plan} />
      ))}
    </div>
  </div>
);

export const Pricing = () => {
  const plans = getPlansData();

  return (
    <Section
      id="planos"
      className="bg-gray-100"
      title={
        <>
          <span className="text-red-500">Nossos</span> Planos
        </>
      }
      description={
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-gray-900">
            Encontre o Plano Perfeito Para Suas Necessidades
          </h3>
          <p className="text-gray-600 max-w-xl mx-auto">
            Preços acessíveis e planos flexíveis, feitos sob medida para o seu negócio.
          </p>
        </div>
      }
    >
      <PricingGrid plans={plans} />
    </Section>
  );
};
