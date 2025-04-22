import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json(
    {
      data: [
        {
          id: 1,
          title: 'Portfolio 1',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
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
      ],
    },
    { status: 200 },
  );
}
