import { FC } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Check } from '@phosphor-icons/react/dist/ssr';
import { ButtonQuoteRequest } from '@/components/dialog/quote-request';

const styles = cva('border rounded-lg shadow-sm divide-y bg-white', {
  variants: {
    variant: {
      light: 'border-slate-200 divide-slate-200 text-slate-900 bg-white',
      dark: 'border-gray-700 divide-gray-700 text-white bg-gray-900',
    },
  },
  defaultVariants: {
    variant: 'light',
  },
});

interface IProps extends VariantProps<typeof styles> {
  name: string;
  description: string;
  price: string;
  features: string[];
  buttonText?: string;
}

const PricingCard: FC<IProps> = ({
  name,
  description,
  price,
  features,
  buttonText = 'Solicitar um Orçamento',
  variant,
}) => (
  <div className={styles({ variant })}>
    <div className="p-6">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="mt-2 text-base">{description}</p>
      <p className="mt-8">
        <span className="text-4xl font-bold tracking-tighter">{price}</span>
        <span className="text-base font-medium text-slate-500">/mês</span>
      </p>
      <ButtonQuoteRequest textButton={buttonText} />
    </div>
    <div className="pt-6 pb-8 px-6">
      <h3 className="text-sm font-extrabold uppercase text-[1.2rem]">Serviços Inclusos</h3>
      <ul className="mt-4 space-y-6">
        {features.map((feature: string, index: number) => (
          <li key={index} className="flex items-start gap-3 text-start">
            <span>
              <Check className="text-xl text-green-500" weight="bold" />
            </span>
            <span className="text-md">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default PricingCard;
