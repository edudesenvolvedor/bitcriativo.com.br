'use client';

import * as React from 'react';
import { ChangeEvent, FC } from 'react';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

const inputVariants = cva(
  'w-full rounded-md border transition-all duration-300 focus:outline-none focus-visible:ring-[3px]',
  {
    variants: {
      variant: {
        default: 'border-gray-300 focus-visible:border-ring focus-visible:ring-ring/50',
        outline: 'border-gray-900 focus-visible:border-ring focus-visible:ring-gray-900/50',
        error:
          'border-red-500 focus-visible:border-ring focus-visible:ring-red-500/50 aria-invalid:border-destructive',
      },
      size: {
        sm: 'px-3 py-2 text-sm h-8',
        md: 'px-4 py-3 text-base h-9',
        lg: 'px-5 py-4 text-lg h-10',
      },
      isDisabled: {
        true: 'opacity-50 cursor-not-allowed pointer-events-none',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'default' | 'outline' | 'error';
  size?: 'sm' | 'md' | 'lg';
  isDisabled?: boolean;
  error?: boolean;
}

const Input: FC<InputProps> = ({
  className,
  type = 'text',
  variant = 'default',
  size = 'md',
  disabled,
  isDisabled,
  error,
  ...props
}) => {
  const variantToUse = error ? 'error' : variant;
  const isInputDisabled = disabled || isDisabled;

  return (
    <input
      type={type}
      data-slot="input"
      disabled={isInputDisabled}
      aria-invalid={error}
      className={cn(
        inputVariants({
          variant: variantToUse,
          size,
          isDisabled: isInputDisabled ? true : undefined,
        }),
        'bg-transparent min-w-0 shadow-xs outline-none',
        'file:inline-flex file:border-0 file:bg-transparent file:text-sm file:font-medium',
        'placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground',
        'dark:bg-input/30 file:text-foreground',
        className,
      )}
      {...props}
    />
  );
};

const maskPhone = (value: string): string => {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  return digits.replace(/^(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d{1,4})$/, '$1-$2');
};

const MaskedPhoneInput: FC<InputProps> = ({ onChange, ...props }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value = maskPhone(e.target.value);
    if (onChange) onChange(e);
  };

  return <Input {...props} onChange={handleChange} />;
};

export { Input, MaskedPhoneInput };
