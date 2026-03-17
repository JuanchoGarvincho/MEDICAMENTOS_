import { ArrowLeft, AlertTriangle, Package, CheckCircle } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';
import { BottomNav } from '../components/BottomNav';

export function Alertas() {
  const [activeTab, setActiveTab] = useState<'urgent' | 'recent'>('urgent');

  const notifications = {
    urgent: [
      {
        icon: <AlertTriangle className="w-5 h-5 text-blue-600" />,
        bgColor: 'bg-blue-50',
        title: 'Poco Stock!',
        message: 'La aspirina de 100 mg se está agotando en tu farmacia preferida. Reserva ahora para asegurar la disponibilidad.',
        time: '10:30 AM',
      },
      {
        icon: <Package className="w-5 h-5 text-blue-600" />,
        bgColor: 'bg-blue-50',
        title: 'Medicamentos Nuevos',
        message: 'Es hora de renovar su receta de atorvastatina. Haga clic para solicitar una nueva autorización.',
        time: 'Yesterday',
      },
      {
        icon: <CheckCircle className="w-5 h-5 text-gray-400" />,
        bgColor: 'bg-gray-50',
        title: 'Reserva confirmada',
        message: 'Su reserva de Losartan 50 mg está lista para recogerse en la Droguería Cafam Floresta',
        time: 'Mon',
      },
    ],
    recent: [],
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white px-6 py-4 border-b border-gray-100">
        <div className="flex items-center gap-4 mb-4">
          <Link to="/home">
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </Link>
          <h1 className="text-xl font-semibold text-gray-900">Notificaciones</h1>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('urgent')}
            className={`flex-1 pb-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'urgent'
                ? 'border-[#1e3a8a] text-[#1e3a8a]'
                : 'border-transparent text-gray-500'
            }`}
          >
            Urgent
          </button>
          <button
            onClick={() => setActiveTab('recent')}
            className={`flex-1 pb-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'recent'
                ? 'border-[#1e3a8a] text-[#1e3a8a]'
                : 'border-transparent text-gray-500'
            }`}
          >
            Recent
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="px-6 py-4 space-y-4">
        {notifications[activeTab].length > 0 ? (
          notifications[activeTab].map((notification, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex gap-3">
                <div className={`w-10 h-10 ${notification.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                  {notification.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-semibold text-gray-900">{notification.title}</h4>
                    <span className="text-xs text-gray-400 flex-shrink-0">{notification.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{notification.message}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400">No hay notificaciones recientes</p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}