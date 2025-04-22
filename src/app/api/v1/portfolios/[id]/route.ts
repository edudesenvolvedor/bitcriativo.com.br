import { NextRequest, NextResponse } from 'next/server';

interface ITechnology {
  title: string;
  listUrlImage: string[];
}

interface IPortfolioData {
  id: number;
  title: string;
  description: string;
  paragraph: string[];
  technologies: ITechnology[];
}

export async function GET(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const portfolioId = Number(id);

  if (isNaN(portfolioId)) {
    return NextResponse.json({ message: 'ID inválido.' }, { status: 400 });
  }

  const portfolioData: Record<number, IPortfolioData> = {
    1: {
      id: 1,
      title: 'Portfolio 1',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      paragraph: [
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      ],
      technologies: [
        {
          title: 'Frontend',
          listUrlImage: [
            'https://icon.icepanel.io/Technology/svg/HTML5.svg',
            'https://icon.icepanel.io/Technology/svg/CSS3.svg',
            'https://icon.icepanel.io/Technology/svg/JavaScript.svg',
            'https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg',
          ],
        },
      ],
    },
    2: {
      id: 2,
      title: 'Portfolio 2',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      paragraph: [
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      ],
      technologies: [
        {
          title: 'Frontend',
          listUrlImage: [
            'https://icon.icepanel.io/Technology/svg/HTML5.svg',
            'https://icon.icepanel.io/Technology/svg/CSS3.svg',
            'https://icon.icepanel.io/Technology/svg/JavaScript.svg',
            'https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg',
          ],
        },
      ],
    },
    3: {
      id: 3,
      title: 'Portfolio 3',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      paragraph: [
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      ],
      technologies: [
        {
          title: 'Frontend',
          listUrlImage: [
            'https://icon.icepanel.io/Technology/svg/HTML5.svg',
            'https://icon.icepanel.io/Technology/svg/CSS3.svg',
            'https://icon.icepanel.io/Technology/svg/JavaScript.svg',
            'https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg',
          ],
        },
      ],
    },
  };

  const data = portfolioData[portfolioId];

  if (!data) {
    return NextResponse.json(
      { message: `Nenhum portfólio encontrado com o ID ${id}` },
      { status: 404 },
    );
  }

  return NextResponse.json(data, { status: 200 });
}
