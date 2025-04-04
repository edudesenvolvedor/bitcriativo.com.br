import Button from '@/components/Button';

const plans = [
  {
    name: 'Startup',
    description: 'Ideal para pequenas empresas que precisam de suporte básico.',
    price: 'R$ 499,00',
    features: [
      '1 landing page included',
      '1,000 visits/mo',
      'Access to all UI blocks',
      '50 conversion actions included',
      '5% payment commission',
      'Real-time analytics',
    ],
  },
  {
    name: 'Profissional',
    description:
      'Para empresas em expansão que buscam melhorar a eficiência dos sistemas existentes.',
    price: 'R$ 799,00',
    features: [
      'All Free features',
      '5 landing pages included',
      '50,000 visits/mo',
      '1,000 conversion actions included',
      '1% payment commission',
      '1% payment commission',
      '1% payment commission',
      '1% payment commission',
    ],
  },
  {
    name: 'Business',
    description: 'Para empresas com grande volume de dados e necessidades mais complexas.',
    price: '$ 1.099,00',
    features: [
      'All Standard features',
      '20 landing pages included',
      '200,000 visits/mo',
      '5,000 conversion actions included',
      'No payment commission',
      'No payment commission',
      'No payment commission',
      'No payment commission',
      'No payment commission',
      'No payment commission',
      'No payment commission',
    ],
  },
];

interface IProps {
  name: string;
  description: string;
  price: string;
  features: string[];
}

const PricingCard = ({ name, description, price, features }: IProps) => (
  <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200 bg-white">
    <div className="p-6">
      <h2 className="text-xl font-bold text-slate-900">{name}</h2>
      <p className="mt-2 text-base text-slate-700">{description}</p>
      <p className="mt-8">
        <span className="text-4xl font-bold text-slate-900 tracking-tighter">{price}</span>
        <span className="text-base font-medium text-slate-500">/mês</span>
      </p>
      <Button className={'w-full mt-8 font-semibold '}>Join as a {name}</Button>
    </div>
    <div className="pt-6 pb-8 px-6">
      <h3
        className="text-sm font-bold text-slate-900 uppercase"
        style={{ fontSize: '1.2rem', fontWeight: '800' }}
      >
        Serviços Inclusos
      </h3>
      <ul className="mt-4 space-y-3">
        {features.map((feature: string, index: number) => (
          <li key={index} className="flex space-x-3">
            <svg
              className="h-5 w-5 text-green-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12l5 5l10 -10" />
            </svg>
            <span className="text-base text-slate-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export const Pricing = () => (
  <section className="py-16 bg-gray-100" id="pricing">
    <div className="container mx-auto text-center">
      <div>
        <h3 className="text-2xl font-semibold text-gray-900">
          Encontre o Plano Perfeito Para Suas Necessidades
        </h3>
        <p className="text-gray-600 max-w-xl mx-auto">
          Preços acessíveis e planos flexíveis, feitos sob medida para o seu negócio.
        </p>
      </div>
      <div className="sm:flex sm:flex-col sm:align-center">
        <div className="mt-12 space-y-3 sm:mt-16 sm:grid sm:grid-cols-3 sm:gap-6 md:max-w-5xl md:mx-auto xl:grid-cols-3 xl:space-y-0 items-start">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  </section>
);
