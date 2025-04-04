import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const inputVariants = cva(
  'bg-white w-full rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2',
  {
    variants: {
      variant: {
        default: 'border-gray-300 focus:ring-red-500',
        outline: 'border-gray-900 focus:ring-gray-900',
        error: 'border-red-500 focus:ring-red-500',
      },
      size: {
        sm: 'px-3 py-2 text-sm',
        md: 'px-4 py-3 text-base',
        lg: 'px-5 py-4 text-lg',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants> & {
    error?: boolean;
  };

const Input: React.FC<InputProps> = ({ variant, size, disabled, error, className, ...props }) => {
  return (
    <input
      className={`${inputVariants({ variant: error ? 'error' : variant, size, disabled })} ${className || ''}`}
      disabled={disabled}
      {...props}
    />
  );
};

export default Input;
