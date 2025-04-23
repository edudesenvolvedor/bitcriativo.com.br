import { db } from '@/lib/database/db';

class RequestQuoteService {
  async create(name: string, phoneNumber: string, email: string) {
    const requestQuoteCreated = await db.requestQuote.create({
      data: { name, phone_number: phoneNumber, email },
    });

    return requestQuoteCreated;
  }
}

export { RequestQuoteService };
