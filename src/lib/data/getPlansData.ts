export const getPlansData = () => {
  return [
    {
      name: 'Startup',
      description: 'Ideal para pequenas empresas que precisam de suporte básico.',
      price: 'R$ 499,00',
      features: [
        '15 horas de suporte técnico por mês',
        'Manutenção de até 2 sistemas ou plataformas',
        'Suporte via e-mail, chat e videoconferência (horário comercial)',
        'Atualização de segurança mensal',
        'Backup simples',
        '1h de consultoria mensal para análise de necessidades',
        'Implementação de melhorias mensais e correção de bugs',
        'Análises de performance básica',
        'Monitoramento de segurança básico',
        'Atualização de sistemas e plataformas conforme necessário',
      ],
    },
    {
      name: 'Profissional',
      description:
        'Para empresas em expansão que buscam melhorar a eficiência dos sistemas existentes.',
      price: 'R$ 799,00',
      features: [
        '30 horas de suporte técnico por mês',
        'Manutenção e melhorias contínuas de até 4 sistemas',
        'Suporte via e-mail, chat, e videoconferência (horário estendido)',
        'Desenvolvimento de novas funcionalidades ou melhorias personalizadas',
        'Análises e relatórios mensais de performance de sistemas',
        'Monitoramento avançado de segurança e resposta a incidentes',
        'Implementação de novos processos de automação de tarefas',
      ],
    },
    {
      name: 'Business',
      description: 'Para empresas com grande volume de dados e necessidades mais complexas.',
      price: '$ 1.099,00',
      features: [
        '50 horas de suporte técnico por mês',
        'Manutenção e melhorias contínuas de até 6 sistemas',
        'Suporte 24/7 via e-mail, chat e videoconferência',
        'Consultoria estratégica em TI e melhorias de processos',
        'Desenvolvimento de funcionalidades personalizadas conforme demanda',
        'Implementação de soluções de segurança avançadas e compliance',
        'Análise de dados e relatórios aprofundados sobre o desempenho do sistema',
        'Monitoramento constante de infraestruturas e servidores',
      ],
    },
  ];
};
