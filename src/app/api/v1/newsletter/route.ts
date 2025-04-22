import { NextRequest, NextResponse } from 'next/server';
import { Newsletter, newsletterSchema } from '@/lib/api/schemas/newsletter-schema';
import { ZodError } from 'zod';
import { db } from '@/lib/database/db';

export async function POST(req: NextRequest) {
  try {
    const response: Newsletter = await req.json();
    const newsletter: Newsletter = newsletterSchema.parse(response);

    const findNewsletter = await db.newsletter.findUnique({
      where: {
        email: newsletter.email,
      },
    });

    if (findNewsletter)
      return NextResponse.json({ message: 'User Already Registered' }, { status: 409 });

    const registerNewsletter = await db.newsletter.create({
      data: {
        email: newsletter.email,
      },
    });

    return NextResponse.json(
      { message: 'Successfully Registered', data: registerNewsletter },
      { status: 200 },
    );
  } catch (err) {
    console.error(err);
    if (err instanceof ZodError) {
      return NextResponse.json({ message: err }, { status: 500 });
    }
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
