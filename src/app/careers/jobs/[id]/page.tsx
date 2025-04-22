'use client';

import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const job = {
  title: 'Desenvolvedor Full Stack',
  location: 'Remoto',
  type: 'Tempo Integral',
  description: `
    Estamos em busca de um Desenvolvedor Full Stack para integrar nosso time. 
    Você trabalhará em projetos inovadores, desenvolvendo tanto o frontend quanto o backend de nossas aplicações.
    
    **Requisitos:**
    - Experiência com React e Node.js
    - Conhecimento em bancos de dados relacionais e NoSQL
    - Familiaridade com TypeScript
  `,
};

export default function JobDetails() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    arquivo: null as File | null,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({ ...prev, arquivo: e.target.files![0] }));
      setErrors((prev) => ({ ...prev, arquivo: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key as keyof typeof formData]) {
        newErrors[key] = 'Campo obrigatório';
      }
    });

    if (!formData.arquivo) {
      newErrors.arquivo = 'Envie seu currículo';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    const formDataToSend = new FormData();
    formDataToSend.append('nome', formData.nome);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('telefone', formData.telefone);
    formDataToSend.append('arquivo', formData.arquivo as Blob);

    try {
      const response = await fetch('https://api.exemplo.com/candidaturas', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setSuccessMessage('Candidatura enviada com sucesso! 🚀');
        setTimeout(() => setIsOpen(false), 2000);
      } else {
        setSuccessMessage('Erro ao enviar. Tente novamente.');
      }
    } catch (error) {
      setSuccessMessage('Falha na conexão. Verifique sua internet.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{job.title}</h1>
        <p className="text-gray-600">
          {job.location} • {job.type}
        </p>
        <div className="border-t border-gray-300 my-4"></div>
        <p className="text-gray-800 whitespace-pre-line">{job.description}</p>

        <Button onClick={() => setIsOpen(true)} className="mt-6 w-full">
          Se Inscrever
        </Button>
      </div>

      {/* Modal de Inscrição */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg">
            <Dialog.Title className="text-xl font-bold text-gray-900">
              Inscrição na Vaga
            </Dialog.Title>
            <Dialog.Description className="text-gray-600 mb-4">
              Preencha os dados para se candidatar
            </Dialog.Description>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="nome"
                placeholder="Nome completo"
                value={formData.nome}
                onChange={handleChange}
                error={!!errors.nome}
              />
              {errors.nome && <p className="text-red-500 text-sm">{errors.nome}</p>}

              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

              <Input
                name="telefone"
                placeholder="Telefone"
                value={formData.telefone}
                onChange={handleChange}
                error={!!errors.telefone}
              />
              {errors.telefone && <p className="text-red-500 text-sm">{errors.telefone}</p>}

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
              {errors.arquivo && <p className="text-red-500 text-sm">{errors.arquivo}</p>}

              <Button type="submit" isLoading={isSubmitting} className="w-full">
                Enviar Candidatura
              </Button>
            </form>

            {successMessage && <p className="text-green-600 mt-4">{successMessage}</p>}

            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 text-gray-600 underline text-sm"
            >
              Fechar
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
