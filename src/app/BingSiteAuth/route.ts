import { NextResponse } from 'next/server';

export async function GET() {
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
  <users>
    <user>0186DBA3276B6D55F28F2A2C480F3AF5</user>
  </users>`;

  return NextResponse.json(xmlContent, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
