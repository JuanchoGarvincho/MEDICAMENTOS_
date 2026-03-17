import { Home, Search, Bell, User } from 'lucide-react';
import { Link, useLocation } from 'react-router';

export function BottomNav() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 pb-6 pt-3">
      <div className="max-w-[375px] mx-auto flex items-center justify-between">
        <Link
          to="/home"
          className="flex flex-col items-center gap-1 min-w-[60px]"
        >
          <Home
            className="w-6 h-6"
            style={{
              color: isActive('/home') ? '#1e3a8a' : '#9ca3af',
              fill: isActive('/home') ? '#1e3a8a' : 'none',
            }}
          />
          <span
            className="text-xs"
            style={{
              color: isActive('/home') ? '#1e3a8a' : '#9ca3af',
              fontWeight: isActive('/home') ? '600' : '400',
            }}
          >
            Home
          </span>
        </Link>

        <Link
          to="/buscar"
          className="flex flex-col items-center gap-1 min-w-[60px]"
        >
          <Search
            className="w-6 h-6"
            style={{ color: isActive('/buscar') ? '#1e3a8a' : '#9ca3af' }}
          />
          <span
            className="text-xs"
            style={{
              color: isActive('/buscar') ? '#1e3a8a' : '#9ca3af',
              fontWeight: isActive('/buscar') ? '600' : '400',
            }}
          >
            Buscar
          </span>
        </Link>

        <Link
          to="/alertas"
          className="flex flex-col items-center gap-1 min-w-[60px] relative"
        >
          <Bell
            className="w-6 h-6"
            style={{
              color: isActive('/alertas') ? '#1e3a8a' : '#9ca3af',
              fill: isActive('/alertas') ? '#1e3a8a' : 'none',
            }}
          />
          {/* Notification badge */}
          <div className="absolute top-0 right-4 w-2 h-2 bg-red-500 rounded-full" />
          <span
            className="text-xs"
            style={{
              color: isActive('/alertas') ? '#1e3a8a' : '#9ca3af',
              fontWeight: isActive('/alertas') ? '600' : '400',
            }}
          >
            Alertas
          </span>
        </Link>

        <Link
          to="/perfil"
          className="flex flex-col items-center gap-1 min-w-[60px]"
        >
          <User
            className="w-6 h-6"
            style={{
              color: isActive('/perfil') ? '#1e3a8a' : '#9ca3af',
              fill: isActive('/perfil') ? '#1e3a8a' : 'none',
            }}
          />
          <span
            className="text-xs"
            style={{
              color: isActive('/perfil') ? '#1e3a8a' : '#9ca3af',
              fontWeight: isActive('/perfil') ? '600' : '400',
            }}
          >
            Perfil
          </span>
        </Link>
      </div>
    </div>
  );
}