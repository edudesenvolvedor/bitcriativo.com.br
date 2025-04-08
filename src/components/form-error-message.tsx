import { AlertCircle } from 'lucide-react';
import { FC } from 'react';

interface IProps {
  message: string | undefined;
}

export const FormErrorMessage: FC<IProps> = ({ message }: IProps) => {
  if (!message) return null;

  return (
    <div className="flex items-center gap-2 mt-1 text-red-600 text-sm font-medium">
      <AlertCircle className="h-4 w-4" />
      <span>{message}</span>
    </div>
  );
};
