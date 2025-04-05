import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import React, { ReactNode, Ref } from 'react';

const labelClasses = cva(
  'absolute text-gray-300 font-bold uppercase opacity-50 select-none text-4xl md:text-6xl lg:text-8xl',
  {
    variants: {
      labelAlign: {
        top: 'top-4 left-1/2 -translate-x-1/2 text-center',
        bottom: 'bottom-4 left-1/2 -translate-x-1/2 text-center',
        left: 'max-md:top-4 max-md:left-1/2 max-md:-translate-x-1/2 max-md:text-center md:left-4 md:top-1/2 md:-translate-y-1/2',
        right:
          'max-md:bottom-4 max-md:left-1/2 max-md:-translate-x-1/2 max-md:text-center md:right-4 md:top-1/2 md:-translate-y-1/2',
        topLeft: 'top-4 left-4 md:top-8 md:left-8',
        bottomLeft: 'bottom-4 left-4 md:bottom-8 md:left-8',
        topRight: 'top-4 right-4 md:top-8 md:right-8',
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

export const Section = ({
  children,
  label,
  labelAlign,
  className,
  ref,
  id,
  title,
  description,
  ...props
}: Props) => {
  return (
    <section
      ref={ref}
      id={id}
      className="relative min-h-screen items-center justify-center bg-gray-100 p-4 md:p-6 lg:p-8"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold uppercase text-gray-900 leading-tight">
          {title}
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto pb-16">{description}</p>
        <div className={`max-w-6xl mx-auto w-full ${className || ''}`}>{children}</div>

        {label && (
          <div className={labelClasses({ labelAlign })} {...props}>
            {label}
          </div>
        )}
      </div>
    </section>
  );
};
