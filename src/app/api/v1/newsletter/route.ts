import { NextRequest } from 'next/server';
import { NewsletterController } from '@/lib/api/controller/newsletter-controller';

// POST -> /v1/newsletter
export async function POST(req: NextRequest) {
  return NewsletterController.create(req);
}
