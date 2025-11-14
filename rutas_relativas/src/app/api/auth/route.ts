
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Admin
  if (email === 'admin@example.com' && password === 'admin123') {
    const res = NextResponse.json({ success: true, role: 'admin' });
    res.cookies.set('role', 'admin', {
      path: '/',
      httpOnly: true, 
      sameSite: 'strict',
    });
    return res;
  }

  // Student
  if (email === 'student@example.com' && password === 'student123') {
    const res = NextResponse.json({ success: true, role: 'student' });
    res.cookies.set('role', 'student', {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
    });
    return res;
  }

  // Credenciales inválidas
  return NextResponse.json(
    { success: false, error: 'Credenciales inválidas' },
    { status: 401 }
  );
}