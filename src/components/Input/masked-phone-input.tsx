'use client';

import { ChangeEvent, FC, InputHTMLAttributes } from 'react';

const maskPhone = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  return digits.replace(/^(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d{1,4})$/, '$1-$2');
};

type IProps = InputHTMLAttributes<HTMLInputElement>;

const MaskedPhoneInput: FC<IProps> = ({ onChange, ...props }: IProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value = maskPhone(e.target.value);
    if (onChange) onChange(e);
  };

  return <input {...props} onChange={handleChange} />;
};

export default MaskedPhoneInput;
