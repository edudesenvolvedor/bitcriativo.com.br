import { api } from './api';

async function subscribeNewsletter(email: string): Promise<void> {
  const response = await api.post('/newsletter', {
    email,
  });

  if (response.status !== 201) throw new Error('Error Subscriber');
}

export { subscribeNewsletter };
