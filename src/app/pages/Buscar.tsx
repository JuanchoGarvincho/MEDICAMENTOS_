import { ArrowLeft, Search, MapPin, Package } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { BottomNav } from '../components/BottomNav';

export function Buscar() {
  const navigate = useNavigate();

  const medications = [
    {
      name: 'Amoxicillin 500mg',
      distance: '0.5 Kilómetros',
      status: 'In Stock',
      statusColor: 'text-green-600',
      pharmacy: 'Droguería Cafam Calle 45',
    },
    {
      name: 'Ibuprofén 400mg',
      distance: '1.2 Kilómetros',
      status: 'Low Stock',
      statusColor: 'text-orange-600',
      pharmacy: 'Droguería Cafam Floresta',
    },
    {
      name: 'Lisinopril 10mg',
      distance: '2.0 Kilómetros',
      status: 'Out of Stock',
      statusColor: 'text-red-600',
      pharmacy: 'Droguería Cafam Calle 51',
    },
    {
      name: 'Metformin 500mg',
      distance: '2.5 Kilómetros',
      status: 'In Stock',
      statusColor: 'text-green-600',
      pharmacy: 'Droguería Cafam Calle 72',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white px-6 py-4 border-b border-gray-100">
        <div className="flex items-center gap-4 mb-4">
          <Link to="/home">
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </Link>
          <h1 className="text-xl font-semibold text-gray-900">Medicamentos Stock</h1>
          <MapPin className="w-6 h-6 text-gray-700 ml-auto" />
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Busca Medicamentos o Farmacias"
            className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-xl text-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white px-6 py-3 border-b border-gray-100">
        <div className="flex gap-6">
          <button className="pb-2 border-b-2 border-[#1e3a8a] text-[#1e3a8a] font-semibold text-sm">
            Lista Medicamentos
          </button>
          <button className="pb-2 text-gray-500 text-sm">Mapa</button>
        </div>
      </div>

      {/* Medications List */}
      <div className="px-6 py-4 space-y-3">
        {medications.map((med, index) => (
          <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Package className="w-6 h-6 text-[#1e3a8a]" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 mb-1">{med.name}</h4>
                <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                  <MapPin className="w-3 h-3" />
                  <span>{med.distance}</span>
                </div>
                <p className={`text-xs font-medium ${med.statusColor}`}>{med.status}</p>
                <p className="text-xs text-gray-500 mt-1">{med.pharmacy}</p>
              </div>
              {med.status !== 'Out of Stock' ? (
                <button 
                  onClick={() => navigate('/reservacion')}
                  className="px-4 py-2 bg-[#1e3a8a] text-white rounded-lg text-sm font-medium flex-shrink-0"
                >
                  Reservar
                </button>
              ) : (
                <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium flex-shrink-0">
                  Notificarme
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}