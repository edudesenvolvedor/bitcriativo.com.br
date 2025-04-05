import Button from '@/components/Button';
import { Check } from '@phosphor-icons/react/dist/ssr';

const plans = [
  {
    name: 'Startup',
    description: 'Ideal para pequenas empresas que precisam de suporte básico.',
    price: 'R$ 499,00',
    features: [
      '15 horas de suporte técnico por mês',
      'Manutenção de até 2 sistemas ou plataformas',
      'Suporte via e-mail, chat e videoconferência (horário comercial)',
      'Atualização de segurança mensal',
      'Backup simples',
      '1h de consultoria mensal para análise de necessidades',
      'Implementação de melhorias mensais e correção de bugs',
      'Análises de performance básica',
      'Monitoramento de segurança básico',
      'Atualização de sistemas e plataformas conforme necessário',
    ],
  },
  {
    name: 'Profissional',
    description:
      'Para empresas em expansão que buscam melhorar a eficiência dos sistemas existentes.',
    price: 'R$ 799,00',
    features: [
      '30 horas de suporte técnico por mês',
      'Manutenção e melhorias contínuas de até 4 sistemas',
      'Suporte via e-mail, chat, e videoconferência (horário estendido)',
      'Desenvolvimento de novas funcionalidades ou melhorias personalizadas',
      'Análises e relatórios mensais de performance de sistemas',
      'Monitoramento avançado de segurança e resposta a incidentes',
      'Implementação de novos processos de automação de tarefas',
    ],
  },
  {
    name: 'Business',
    description: 'Para empresas com grande volume de dados e necessidades mais complexas.',
    price: '$ 1.099,00',
    features: [
      '50 horas de suporte técnico por mês',
      'Manutenção e melhorias contínuas de até 6 sistemas',
      'Suporte 24/7 via e-mail, chat e videoconferência',
      'Consultoria estratégica em TI e melhorias de processos',
      'Desenvolvimento de funcionalidades personalizadas conforme demanda',
      'Implementação de soluções de segurança avançadas e compliance',
      'Análise de dados e relatórios aprofundados sobre o desempenho do sistema',
      'Monitoramento constante de infraestruturas e servidores',
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
      <Button className={'w-full mt-8 font-semibold '}>Solicitar um Orçamento</Button>
    </div>
    <div className="pt-6 pb-8 px-6">
      <h3
        className="text-sm font-bold text-slate-900 uppercase"
        style={{ fontSize: '1.2rem', fontWeight: '800' }}
      >
        Serviços Inclusos
      </h3>
      <ul className="mt-4 space-y-6">
        {features.map((feature: string, index: number) => (
          <li key={index} className="text-start flex gap-3">
            <span>
              <Check className={'text-xl text-green-500'} weight={'bold'} />
            </span>
            <span className="text-md">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export const Pricing = () => (
  <section id="planos" className="py-16 bg-gray-100">
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
