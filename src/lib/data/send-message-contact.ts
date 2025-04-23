import { api } from './api';

async function sendMessageContact(
  name: string,
  phoneNumber: string,
  email: string,
  message: string,
): Promise<void> {
  const response = await api.post('/contact', {
    name,
    phoneNumber,
    email,
    subject: `Solicitação de Contato | ${name}`,
    message,
  });

  if (response.status !== 201) throw new Error('Internal Server Error');
}

export { sendMessageContact };
