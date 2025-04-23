import { RequestQuoteController } from '@/lib/api/controller/request-quote-controller';
import { NextRequest } from 'next/server';

//POST /v1/quotes/request
export function POST(req: NextRequest) {
  return RequestQuoteController.create(req);
}
