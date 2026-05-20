import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, empresa, email, telefono, tipo, mensaje } = body;

    if (!nombre || !empresa || !email || !telefono || !mensaje) {
      return NextResponse.json({ error: 'Campos requeridos faltantes' }, { status: 400 });
    }

    // Log contact submission — integrate with email service or CRM in production
    console.log('Contact form submission:', {
      nombre,
      empresa,
      email,
      telefono,
      tipo,
      mensaje,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Error procesando la solicitud' }, { status: 500 });
  }
}
