'use client';

import { ChangeEvent, FC } from 'react';
import Input, { CustomInputTypes } from '@/components/input/index';

const maskPhone = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  return digits.replace(/^(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d{1,4})$/, '$1-$2');
};

const MaskedPhoneInput: FC<CustomInputTypes> = ({ onChange, ...props }: CustomInputTypes) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value = maskPhone(e.target.value);
    if (onChange) onChange(e);
  };

  return <Input {...props} onChange={handleChange} />;
};

export default MaskedPhoneInput;
