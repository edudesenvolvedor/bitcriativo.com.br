import { ReactNode } from 'react';
import { FormErrorMessage } from '../form-error-message';
import { useForm, Controller, FieldErrors } from 'react-hook-form';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { QuoteRequest, QuoteRequestSchema } from '@/lib/schemas/quote-request-schema';
import { Input, MaskedPhoneInput } from '@/components/ui/input';
import { Button } from '../ui/button';
import { sendRequestQuote } from '@/lib/data/send-request-quote';

interface IProps {
  btnClose: ReactNode;
  handleCloseDialog?: () => void;
}

export const RequestQuote = ({ btnClose, handleCloseDialog }: IProps) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isLoading },
  } = useForm<QuoteRequest>({
    resolver: zodResolver(QuoteRequestSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: QuoteRequest) => {
    try {
      await sendRequestQuote(data.name, data.phoneNumber, data.email);

      toast.success('Solicitação enviada com sucesso!');
      handleCloseDialog?.();
      reset();
    } catch (e) {
      console.error(e);
      toast.error(
        'Não foi possível enviar sua solicitação. Por favor, tente novamente mais tarde.',
      );
    }
  };

  const onError = (errors: FieldErrors<QuoteRequest>) => {
    console.error('Erros de validação:', errors);
    toast.error('Por favor, corrija os erros no formulário antes de enviar.');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-4 mt-4">
      <label htmlFor="name" className="block text-lg text-gray-900 font-semibold mb-1">
        Nome
      </label>
      <Input
        id="name"
        {...register('name')}
        type="text"
        placeholder="Seu nome"
        className={errors.name ? 'border-red-500' : ''}
      />
      <FormErrorMessage message={errors.name?.message} />

      <label htmlFor="phoneNumber" className="block text-lg text-gray-900 font-semibold mb-1">
        Telefone
      </label>
      <Controller
        name="phoneNumber"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <MaskedPhoneInput
            id="phoneNumber"
            className={`w-full border px-4 py-2 rounded-xl ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="(99) 99999-9999"
            {...field}
          />
        )}
      />
      <FormErrorMessage message={errors.phoneNumber?.message} />

      <label htmlFor="email" className="block text-lg text-gray-900 font-semibold mb-1">
        Email
      </label>
      <Input
        id="email"
        {...register('email')}
        type="email"
        placeholder="Seu email"
        className={errors.email ? 'border-red-500' : ''}
      />
      <FormErrorMessage message={errors.email?.message} />

      <div className="mt-6 flex justify-end gap-2">
        {btnClose}

        <Button isLoading={isLoading} type="submit" className="font-semibold">
          Enviar
        </Button>
      </div>
    </form>
  );
};
