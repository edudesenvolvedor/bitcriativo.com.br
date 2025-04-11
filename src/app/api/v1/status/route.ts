import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json(
    {
      status: '✅ Online',
      message: '🚀 API está funcionando perfeitamente!',
      timestamp: '2025-04-10T12:00:00Z',
    },
    { status: 200 },
  );
}
