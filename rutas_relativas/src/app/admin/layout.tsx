'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx'; // npm install clsx


export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { href: '/admin', label: 'Dashboard' },
    { href: '/admin/users', label: 'Usuarios' },
    { href: '/admin/settings', label: 'Configuración' },
  ];

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    router.push('/login');
  };

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold border-b border-gray-800">
          Admin Panel
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={clsx(
                      'block rounded-md px-3 py-2 transition',
                      isActive
                        ? 'bg-gray-800 text-white font-semibold'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    )}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <button
          onClick={handleLogout}
          className="m-4 bg-red-600 hover:bg-red-700 text-white py-2 rounded-md transition"
        >
          Cerrar sesión
        </button>
      </aside>

      {/* Contenido principal */}
      <div className="flex flex-col flex-1">
        {/* Navbar superior */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold">Panel de Administración</h1>
          <div className="flex items-center gap-3">
            <span className="text-gray-700">Admin</span>
            <img
              src="/imagenes/hola_048.jpg"
              alt=""
              className="w-8 h-8 rounded-full"
            />
          </div>
        </header>

        {/* Contenido dinámico */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}