import { db } from '@/lib/database/db';

class ContactService {
  async create(name: string, phoneNumber: string, email: string, subject: string, message: string) {
    const contactCreated = await db.contact.create({
      data: { name, phone_number: phoneNumber, email, subject, message },
    });
    return contactCreated;
  }
}

export { ContactService };
