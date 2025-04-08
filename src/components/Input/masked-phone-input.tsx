'use client';

import { ChangeEvent, FC, InputHTMLAttributes } from 'react';

const maskPhone = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d{1,4})$/, '$1-$2')
    .slice(0, 15);
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
