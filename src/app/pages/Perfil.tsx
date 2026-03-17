import { ArrowLeft, User, Store, Bell, Shield, Lock, LogOut, ChevronRight, Edit2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { useState } from 'react';
import { BottomNav } from '../components/BottomNav';

export function Perfil() {
  const navigate = useNavigate();
  const [alertasStock, setAlertasStock] = useState(true);
  const [disponibilidadStock, setDisponibilidadStock] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white px-6 py-4 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <Link to="/home">
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </Link>
          <h1 className="text-xl font-semibold text-gray-900">Perfil y configuraciones</h1>
        </div>
      </div>

      {/* Profile Section */}
      <div className="bg-white px-6 py-8 border-b border-gray-100">
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full bg-orange-200 flex items-center justify-center overflow-hidden">
              <div className="w-16 h-16 bg-white rounded"></div>
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#1e3a8a] rounded-full flex items-center justify-center shadow-lg">
              <Edit2 className="w-4 h-4 text-white" />
            </button>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-1">Alisson</h2>
          <p className="text-sm text-gray-500">EPS ID: 123456789</p>
        </div>
      </div>

      {/* Settings Menu */}
      <div className="px-6 py-4 space-y-3">
        {/* Información Personal */}
        <button className="w-full bg-white rounded-xl p-4 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
            <User className="w-5 h-5 text-[#1e3a8a]" />
          </div>
          <span className="flex-1 text-left text-gray-900 font-medium">Información Personal</span>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>

        {/* Droguería Preferida */}
        <button className="w-full bg-white rounded-xl p-4 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
            <Store className="w-5 h-5 text-[#1e3a8a]" />
          </div>
          <span className="flex-1 text-left text-gray-900 font-medium">Droguería Preferida</span>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>

        {/* Preferencias de Notificación */}
        <button className="w-full bg-white rounded-xl p-4 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
            <Bell className="w-5 h-5 text-[#1e3a8a]" />
          </div>
          <span className="flex-1 text-left text-gray-900 font-medium">Preferencias de Notificación</span>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>

        {/* Toggles Section */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <span className="text-gray-900 font-medium">Alertas de Stock</span>
            <button
              onClick={() => setAlertasStock(!alertasStock)}
              className={`relative w-12 h-7 rounded-full transition-colors ${
                alertasStock ? 'bg-[#1e3a8a]' : 'bg-gray-300'
              }`}
            >
              <div
                className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                  alertasStock ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          <div className="flex items-center justify-between p-4">
            <span className="text-gray-900 font-medium">Disponibilidad de Stock</span>
            <button
              onClick={() => setDisponibilidadStock(!disponibilidadStock)}
              className={`relative w-12 h-7 rounded-full transition-colors ${
                disponibilidadStock ? 'bg-[#1e3a8a]' : 'bg-gray-300'
              }`}
            >
              <div
                className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                  disponibilidadStock ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Detalles del seguro médico */}
        <button className="w-full bg-white rounded-xl p-4 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-[#1e3a8a]" />
          </div>
          <span className="flex-1 text-left text-gray-900 font-medium">Detalles del seguro médico</span>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>

        {/* Seguridad */}
        <button className="w-full bg-white rounded-xl p-4 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
            <Lock className="w-5 h-5 text-[#1e3a8a]" />
          </div>
          <span className="flex-1 text-left text-gray-900 font-medium">Seguridad</span>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>

        {/* Cerrar sesión */}
        <button 
          onClick={handleLogout}
          className="w-full bg-white rounded-xl p-4 shadow-sm flex items-center gap-3 border-2 border-red-100"
        >
          <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
            <LogOut className="w-5 h-5 text-red-500" />
          </div>
          <span className="flex-1 text-left text-red-500 font-medium">Cerrar sesión</span>
        </button>
      </div>

      <BottomNav />
    </div>
  );
}