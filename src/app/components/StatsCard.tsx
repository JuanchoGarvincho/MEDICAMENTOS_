import { CheckCircle2, Circle, TrendingUp } from 'lucide-react';

interface StatsCardProps {
  total: number;
  completed: number;
  pending: number;
}

export function StatsCard({ total, completed, pending }: StatsCardProps) {
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="grid grid-cols-3 gap-3 mb-6">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center">
            <Circle className="w-4 h-4 text-blue-500" />
          </div>
        </div>
        <p className="text-2xl font-semibold text-gray-800">{total}</p>
        <p className="text-xs text-gray-500">Total</p>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-xl bg-green-100 flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
          </div>
        </div>
        <p className="text-2xl font-semibold text-gray-800">{completed}</p>
        <p className="text-xs text-gray-500">Completadas</p>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-xl bg-purple-100 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-purple-500" />
          </div>
        </div>
        <p className="text-2xl font-semibold text-gray-800">{completionRate}%</p>
        <p className="text-xs text-gray-500">Progreso</p>
      </div>
    </div>
  );
}
