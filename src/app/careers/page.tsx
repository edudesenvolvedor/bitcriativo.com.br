'use client';

import React, { useState } from 'react';
import Input from '@/components/Input';
import Button from '@/components/Button';

const jobListings = [
  { title: 'Desenvolvedor Full Stack', location: 'Remoto', type: 'Tempo Integral' },
  { title: 'Designer UI/UX', location: 'São Paulo, SP', type: 'Freelancer' },
  { title: 'Gerente de Projetos', location: 'Híbrido - Rio de Janeiro', type: 'Tempo Integral' },
];

const Careers: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    vaga: '',
    arquivo: null as File | null,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
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
    formDataToSend.append('vaga', formData.vaga);
    formDataToSend.append('arquivo', formData.arquivo as Blob);

    try {
      const response = await fetch('https://api.exemplo.com/candidaturas', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setSuccessMessage('Currículo enviado com sucesso! 🚀');
        setFormData({ nome: '', email: '', telefone: '', vaga: '', arquivo: null });
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
      <div className="max-w-4xl mx-auto">
        {/* Título */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Trabalhe Conosco</h1>

        {/* Vagas Disponíveis */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Vagas Abertas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobListings.map((job, index) => (
              <div key={index} className="border border-gray-300 p-4 rounded-lg bg-white shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                <p className="text-gray-600">
                  {job.location} • {job.type}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Formulário */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Envie seu Currículo</h2>
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

            <select
              name="vaga"
              value={formData.vaga}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              <option value="">Selecione a vaga</option>
              {jobListings.map((job, index) => (
                <option key={index} value={job.title}>
                  {job.title}
                </option>
              ))}
            </select>
            {errors.vaga && <p className="text-red-500 text-sm">{errors.vaga}</p>}

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
            {errors.arquivo && <p className="text-red-500 text-sm">{errors.arquivo}</p>}

            <Button type="submit" isLoading={isSubmitting} className="w-full">
              Enviar Currículo
            </Button>
          </form>

          {successMessage && <p className="text-green-600 mt-4">{successMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Careers;
