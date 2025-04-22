import { NextRequest, NextResponse } from 'next/server';
import { Newsletter, newsletterSchema } from '@/lib/api/schemas/newsletter-schema';
import { ZodError } from 'zod';
import { NewsletterService } from '../service/newsletter-service';

class NewsletterController {
  static async create(req: NextRequest) {
    try {
      const response: Newsletter = await req.json();
      const data: Newsletter = newsletterSchema.parse(response);

      const subscriber = await NewsletterService.subscribe(data.email);

      return NextResponse.json(
        { message: 'Successfully Registered', data: subscriber },
        { status: 201 },
      );
    } catch (err) {
      console.error(err);
      if (err instanceof ZodError) {
        return NextResponse.json({ message: err }, { status: 500 });
      }
      return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
  }
}

export { NewsletterController };
