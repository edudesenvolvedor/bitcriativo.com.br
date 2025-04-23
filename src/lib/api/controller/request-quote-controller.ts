import { NextRequest, NextResponse } from 'next/server';
import { RequestQuoteSchema } from '../schemas/request-quote-schema';
import { RequestQuoteService } from '../service/request-quote-service';

class RequestQuoteController {
  static async create(req: NextRequest) {
    try {
      const data = RequestQuoteSchema.parse(await req.json());
      const requestQuoteService = new RequestQuoteService();
      const requestQuote = requestQuoteService.create(data.name, data.phone_number, data.email);
      return NextResponse.json({ ...requestQuote }, { status: 201 });
    } catch (e) {
      console.error(e);
      return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
  }
}

export { RequestQuoteController };
