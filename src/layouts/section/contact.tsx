import { Section } from '@/layouts/section';

import { FormContact } from '@/components/forms/contact';

const Contact = () => {
  return (
    <Section
      id="contato"
      title={
        <>
          Fale <span className="text-red-500">Conosco</span>
        </>
      }
      description={
        <p>
          Tem alguma dúvida ou quer saber mais sobre nossos serviços? Preencha o formulário abaixo e
          entraremos em contato!
        </p>
      }
      label={'Contato'}
      labelAlign={'bottomLeft'}
      className={'text-center'}
    >
      <FormContact />
    </Section>
  );
};

export { Contact };
