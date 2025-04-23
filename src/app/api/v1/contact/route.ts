import { ContactController } from '@/lib/api/controller/contact-controller';
import { NextRequest } from 'next/server';

// POST /v1/contact
export function POST(req: NextRequest) {
  return ContactController.create(req);
}
