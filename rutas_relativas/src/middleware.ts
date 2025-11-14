import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // console.log("MIDDLEWARE ACTIVADO >>> ", req.nextUrl.pathname);
  const { pathname } = req.nextUrl;
  const role = req.cookies.get('role')?.value;

  if (role && pathname === '/login') 
  {
    if (role === 'admin') 
    {
      return NextResponse.redirect(new URL('/admin', req.url));
    }
    if (role === 'student') 
    {
      return NextResponse.redirect(new URL('/student', req.url));
    }
  }


  // console.log("Middleware ejecutado - role:", role, "path:", pathname);
  // console.log(role);
  // No tiene rol y quiere acceder a páginas protegidas
  if (!role && (pathname.startsWith('/admin') || pathname.startsWith('/student'))) {    
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Admin NO puede entrar a /student
  if (role === 'admin' && pathname.startsWith('/student')) {
    // console.log("role: "+role);
    return NextResponse.redirect(new URL('/admin', req.url));
  }

  // Student NO puede entrar a /admin
  if (role === 'student' && pathname.startsWith('/admin')) {
    // console.log("role: "+role);
    return NextResponse.redirect(new URL('/student', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/login','/admin', '/admin/:path*', '/student', '/student/:path*'],
};