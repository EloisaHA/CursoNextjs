'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { href: '/student', label: 'Inicio' },
    { href: '/student/courses', label: 'Mis Cursos' },
    { href: '/student/profile', label: 'Perfil' },
  ];

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    router.push('/login');
  };

  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      {/* Navbar superior */}
      <header className="bg-blue-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold">Portal del Estudiante</h1>

          <nav className="flex gap-4 items-center">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={clsx(
                    'px-3 py-2 rounded-md transition',
                    isActive
                      ? 'bg-blue-800 font-semibold'
                      : 'hover:bg-blue-700'
                  )}
                >
                  {label}
                </Link>
              );
            })}

            <button
              onClick={handleLogout}
              className="ml-4 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md transition"
            >
              Cerrar sesión
            </button>
          </nav>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-8">{children}</main>

      {/* Footer */}
      <footer className="bg-blue-100 text-center text-sm py-3 text-blue-800">
        © 2025 Portal Estudiantil
      </footer>
    </div>
  );
}