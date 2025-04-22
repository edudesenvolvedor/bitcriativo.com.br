'use client';

import { FC, useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface ITechnologies {
  title: string;
  listUrlImage: string[];
}

interface IPortfolioData {
  id: number;
  title: string;
  description: string;
  paragraph: string[];
  technologies: ITechnologies[];
}

interface IPortfolioViewProps {
  id: number;
  textButton: string;
}

interface IHeaderProps {
  title: string;
  description: string;
  paragraph: string[];
}

interface ListOfTechnologiesProps {
  title?: string;
  listUrlImage?: string[];
}

interface CardIconProps {
  url: string;
  alt?: string;
}

interface IContentProps {
  id: number;
}

const CardIcon: FC<CardIconProps> = ({ url, alt = '' }) => (
  <Image draggable={false} src={url} width={60} height={60} alt={alt} />
);

const ListOfTechnologies: FC<ListOfTechnologiesProps> = ({ title, listUrlImage }) => (
  <>
    {title && <div className="text-2xl md:text-3xl font-bold uppercase">{title}</div>}
    <div className="flex flex-wrap gap-3 mt-4">
      {listUrlImage?.map((url, index) => <CardIcon key={index} url={url} />)}
    </div>
  </>
);

const ContentImage: FC = () => (
  <div className="w-full xl:w-[50%] max-h-[40vh] xl:max-h-[75vh] overflow-clip rounded-lg">
    <img
      className="w-full h-full object-cover"
      src="https://www.eapprojetos.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportfolio_2.af478c7d.png&w=3840&q=75"
      alt="Imagem do portfólio"
    />
  </div>
);

const Header: FC<IHeaderProps> = ({ title, description, paragraph }) => (
  <DialogHeader>
    <DialogTitle>
      <span className="text-4xl font-bold uppercase">{title}</span>
    </DialogTitle>
    <DialogDescription>{description}</DialogDescription>
    {paragraph?.map((value, index) => (
      <p key={index} className="text-lg font-semibold text-gray-900/70">
        {value}
      </p>
    ))}
  </DialogHeader>
);

const Footer: FC = () => (
  <DialogFooter className="sm:justify-start mt-8">
    <DialogClose asChild>
      <Button type="button" variant="secondary">
        Voltar
      </Button>
    </DialogClose>
  </DialogFooter>
);

const Content: FC<IContentProps> = ({ id }: IContentProps) => {
  const [data, setData] = useState<IPortfolioData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/portfolios/${id}`);
      setData(response.data);
      setError(null);
    } catch (error) {
      console.error('Erro ao buscar portfolios:', error);
      setError('Falha ao carregar os dados do portfólio');
      setData(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <DialogContent className="w-full xl:max-w-[70vw] max-h-[90vh] overflow-y-auto p-6">
      <div className="flex flex-col xl:flex-row gap-6 w-full">
        <ContentImage />
        {isLoading && <div>Carregando...</div>}
        {error && <div className="text-red-500">{error}</div>}
        {data && (
          <div className="flex flex-col space-y-4 flex-1 w-full">
            <Header title={data.title} paragraph={data.paragraph} description={data.description} />
            {data.technologies?.map((tech, index) => (
              <ListOfTechnologies key={index} title={tech.title} listUrlImage={tech.listUrlImage} />
            ))}
            <div className="mt-auto">
              <Footer />
            </div>
          </div>
        )}
      </div>
    </DialogContent>
  );
};

export const PortfolioView: FC<IPortfolioViewProps> = ({ textButton, id }: IPortfolioViewProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{textButton}</Button>
      </DialogTrigger>
      <Content id={id} />
    </Dialog>
  );
};
