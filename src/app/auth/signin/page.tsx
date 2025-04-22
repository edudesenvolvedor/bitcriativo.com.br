'use client';

import React, { useState } from 'react';
import Input from '@/components/Input';
import Button from '@/components/button';

export default function SignIn() {
  //const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState<{ email?: string; password?: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof error = {};
    if (!formData.email.includes('@')) newErrors.email = 'Email inválido';
    if (formData.password.length < 6) newErrors.password = 'Senha deve ter pelo menos 6 caracteres';

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      console.log('Usuário logado:', formData);
      setIsLoading(false);
      //navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-6">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900">Entrar</h2>
        <p className="text-gray-600 text-center mb-6">Acesse sua conta para continuar</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <Input
              type="email"
              name="email"
              placeholder="Digite seu email"
              value={formData.email}
              onChange={handleChange}
              error={!!error.email}
            />
            {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Senha</label>
            <Input
              type="password"
              name="password"
              placeholder="Digite sua senha"
              value={formData.password}
              onChange={handleChange}
              error={!!error.password}
            />
            {error.password && <p className="text-red-500 text-sm mt-1">{error.password}</p>}
          </div>

          <Button type="submit" isLoading={isLoading} className="w-full">
            Entrar
          </Button>
        </form>

        <p className="text-gray-600 text-sm text-center mt-4 hidden">
          Não tem uma conta?{' '}
          <a href="/signup" className="text-red-500 hover:underline">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
}
