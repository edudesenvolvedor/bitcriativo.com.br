import { cva, VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import React from 'react';

const buttonVariants = cva(
  'flex items-center justify-center font-medium rounded-lg transition-all duration-300 cursor-pointer',
  {
    variants: {
      variant: {
        primary: 'bg-red-500 text-white hover:bg-red-600',
        secondary: 'bg-gray-900 text-white hover:bg-gray-700',
        success: 'bg-green-500 text-white hover:bg-green-600',
        error: 'bg-red-600 text-white hover:bg-red-700',
        outline: 'border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white',
        ghost: 'text-gray-900 hover:bg-gray-200',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    isLoading?: boolean;
  };

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  disabled,
  isLoading,
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={`${buttonVariants({ variant, size, disabled })} ${className || ''}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? <Loader2 className="animate-spin w-5 h-5 mr-2" /> : null}
      {children}
    </button>
  );
};

export default Button;
