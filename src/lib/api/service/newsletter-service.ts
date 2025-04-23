import { db } from '@/lib/database/db';

class NewsletterService {
  static async subscribe(email: string) {
    const findNewsletter = await db.newsletter.findUnique({
      where: { email },
    });

    if (findNewsletter) throw new Error('User Already Registered');

    const registerNewsletter = await db.newsletter.create({
      data: { email },
    });

    return registerNewsletter;
  }
}

export { NewsletterService };
