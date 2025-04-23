import { api } from './api';

const sendRequestQuote = async (name: string, phoneNumber: string, email: string) => {
  const response = await api.post('/quotes/requests', {
    name,
    phone_number: phoneNumber,
    email,
  });

  if (response.status !== 201) throw new Error('Internal Server Error');
};

export { sendRequestQuote };
