import { ArrowLeft, CheckCircle, MapPin, Package, Navigation } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Reservacion() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 py-4 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <Link to="/home">
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </Link>
          <h1 className="text-xl font-semibold text-gray-900">Detalles de la reservacion</h1>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Confirmation */}
        <div className="bg-white rounded-xl p-6 shadow-sm text-center">
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-[#1e3a8a]" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Reservacion Confirmada!</h2>
          <p className="text-sm text-gray-500">Su medicamento estará listo pronto.</p>
        </div>

        {/* QR Code */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold text-gray-900 text-center mb-4">Sin Fila!</h3>
          <p className="text-sm text-gray-500 text-center mb-4">
            Presenta el siguiente QR en la farmacia para que te entreguen el medicamento rapidamente
          </p>
          <div className="bg-teal-50 rounded-xl p-8 flex items-center justify-center mb-4">
            <div className="w-32 h-32 bg-white rounded-lg p-4 shadow-sm">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Simple QR-like pattern */}
                <rect x="0" y="0" width="20" height="20" fill="black" />
                <rect x="25" y="0" width="20" height="20" fill="black" />
                <rect x="50" y="0" width="20" height="20" fill="black" />
                <rect x="75" y="0" width="20" height="20" fill="black" />
                <rect x="0" y="25" width="20" height="20" fill="black" />
                <rect x="75" y="25" width="20" height="20" fill="black" />
                <rect x="0" y="50" width="20" height="20" fill="black" />
                <rect x="25" y="50" width="20" height="20" fill="black" />
                <rect x="50" y="50" width="20" height="20" fill="black" />
                <rect x="75" y="50" width="20" height="20" fill="black" />
                <rect x="0" y="75" width="20" height="20" fill="black" />
                <rect x="50" y="75" width="20" height="20" fill="black" />
                <rect x="75" y="75" width="20" height="20" fill="black" />
              </svg>
            </div>
          </div>
          <p className="text-center text-xs text-gray-500">RES: 987-654-321</p>
        </div>

        {/* Pickup Location */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <h3 className="font-semibold text-gray-900 px-6 pt-4 pb-3">Pickup Location</h3>
          <div className="relative h-40 bg-gray-200">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1598886247299-3b71da134afb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbWFwJTIwc3RyZWV0JTIwYm9nb3RhfGVufDF8fHx8MTc3MjgxMzY3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Map"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <MapPin className="w-8 h-8 text-red-500 fill-red-500" />
            </div>
            <div className="absolute top-3 left-3 bg-[#1e3a8a] text-white text-xs px-3 py-1 rounded-full font-medium">
              Ver mapa completo
            </div>
          </div>
          <div className="px-6 py-4">
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Cafam Floresta</h4>
                <p className="text-sm text-gray-500">Av. 68 #108B piso 1, Bogotá</p>
                <p className="text-sm text-gray-500">Abre mañana 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Medicamentos Listos */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-4">Medicamentos Listos</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-[#1e3a8a]" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Metformin 500mg</h4>
                <p className="text-xs text-gray-500">Qty: 1 cds, QR Scans</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-[#1e3a8a]" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Ibuprofén 400mg</h4>
                <p className="text-xs text-gray-500">Qty: 2 aucks</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pb-6">
          <button className="w-full bg-[#1e3a8a] text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2">
            <Navigation className="w-5 h-5" />
            Obtén dirección
          </button>
          <button className="w-full bg-white text-gray-600 py-4 rounded-xl font-semibold border border-gray-200">
            Cancelar Reservacion
          </button>
        </div>
      </div>
    </div>
  );
}