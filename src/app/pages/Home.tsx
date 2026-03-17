import { Search, Bell, Calendar, Package, AlertTriangle } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { BottomNav } from '../components/BottomNav';

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white px-6 pt-6 pb-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold text-gray-800">Home</h1>
          <div className="flex items-center gap-3">
            <Link to="/alertas" className="relative">
              <Bell className="w-6 h-6 text-gray-600" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
            </Link>
            <button
              onClick={() => {
                localStorage.removeItem('isAuthenticated');
                navigate('/');
              }}
              className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center overflow-hidden"
            >
              <div className="w-6 h-6 bg-white rounded"></div>
            </button>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Hola, Alison</h2>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Busca Medicamentos"
            className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-xl text-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Reservados Button */}
        <Link
          to="/reservacion"
          className="flex items-center justify-center gap-2 w-full py-3 bg-[#1e3a8a] text-white rounded-xl font-medium"
        >
          <Calendar className="w-5 h-5" />
          Reservados
        </Link>
      </div>

      {/* Alertas Activas */}
      <div className="px-6 py-6">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-orange-500" />
          <h3 className="font-semibold text-gray-900">Alertas Activas</h3>
        </div>

        {/* Alerta 1 - Bajo Stock */}
        <div className="bg-white rounded-xl p-4 mb-3 shadow-sm border-l-4 border-orange-500">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <Package className="w-6 h-6 text-orange-500" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-orange-600 font-medium mb-1">Bajo Stock</p>
              <h4 className="font-semibold text-gray-900 mb-1">Atorvastatín 20mg</h4>
              <p className="text-xs text-gray-500">Realiza pedido en 3 días hábiles</p>
            </div>
            <button
              onClick={() => navigate('/reservacion')}
              className="px-4 py-2 bg-[#1e3a8a] text-white rounded-lg text-sm font-medium flex-shrink-0"
            >
              Reservar
            </button>
          </div>
        </div>

        {/* Alerta 2 - Listo para reservar */}
        <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-green-500">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <Package className="w-6 h-6 text-green-500" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-green-600 font-medium mb-1">Listo para reservar</p>
              <h4 className="font-semibold text-gray-900 mb-1">Metformin 500mg</h4>
              <p className="text-xs text-gray-500">Droguería Cafam calle 48</p>
            </div>
            <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium flex-shrink-0">
              Detalles
            </button>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}