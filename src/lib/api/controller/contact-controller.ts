import { NextRequest, NextResponse } from 'next/server';
import { ContactService } from '../service/contact-service';
import { ContactSchema } from '../schemas/contact-schema';

class ContactController {
  static async create(req: NextRequest) {
    try {
      const data = ContactSchema.parse(await req.json());
      const contact = new ContactService();
      const contactCreated = contact.create(
        data.name,
        data.phoneNumber,
        data.email,
        data.subject,
        data.message,
      );

      return NextResponse.json({ ...contactCreated }, { status: 201 });
    } catch (e) {
      console.error(e);
      return NextResponse.json(
        {
          message: 'Server Internal Error',
        },
        { status: 500 },
      );
    }
  }
}

export { ContactController };
