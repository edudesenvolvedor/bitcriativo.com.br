import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import React, { FC, ReactNode, Ref } from 'react';

const labelClasses = cva(
  '2xl:absolute text-gray-300 font-bold uppercase opacity-50 select-none text-4xl md:text-6xl lg:text-8xl py-8 text-start',
  {
    variants: {
      labelAlign: {
        topLeft: 'top-4 left-4 md:top-8 md:left-8',
        bottomLeft: 'bottom-4 left-4 md:bottom-8 md:left-8',
        topRight: 'top-4 right-4 md:top-8 md:right-8 relative',
        bottomRight: 'bottom-4 right-4 md:bottom-8 md:right-8',
        default: 'bottom-4 left-4 md:bottom-8 md:left-8',
      },
    },
    defaultVariants: {
      labelAlign: 'default',
    },
  },
);

type Props = {
  children: ReactNode;
  className?: string;
  label?: string;
  ref?: Ref<HTMLElement> | undefined;
  id?: string;
  title?: string | ReactNode;
  description?: string | ReactNode;
} & VariantProps<typeof labelClasses>;

export const Section = ({ children, className, ref, id, title, description, label }: Props) => {
  return (
    <section
      ref={ref}
      id={id}
      className="relative min-h-screen items-center justify-center bg-gray-100 p-4 md:p-6 lg:p-8"
    >
      <div className="lg:max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold uppercase text-gray-900 leading-tight">
          {title}
        </h2>
        <div className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto pb-16">{description}</div>
        <div className={`max-w-6xl mx-auto w-full ${className || ''}`}>{children}</div>
      </div>
      {label && <Label labelAlign={'bottomLeft'}>{label}</Label>}
    </section>
  );
};

interface ILabelProps extends VariantProps<typeof labelClasses> {
  children: string;
}

const Label: FC<ILabelProps> = ({ children, labelAlign, ...props }: ILabelProps) => {
  return (
    <div className={labelClasses({ labelAlign })} {...props}>
      {children}
    </div>
  );
};
