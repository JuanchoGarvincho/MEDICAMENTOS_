import { Check, Circle, Trash2 } from 'lucide-react';
import { motion } from 'motion/react';

interface TaskCardProps {
  id: string;
  title: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskCard({ id, title, completed, onToggle, onDelete }: TaskCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow"
    >
      <button
        onClick={() => onToggle(id)}
        className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-purple-500 flex items-center justify-center transition-all hover:scale-110"
        style={{
          backgroundColor: completed ? '#a855f7' : 'transparent',
        }}
      >
        {completed && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
      </button>
      
      <span
        className="flex-1 text-gray-800"
        style={{
          textDecoration: completed ? 'line-through' : 'none',
          opacity: completed ? 0.5 : 1,
        }}
      >
        {title}
      </span>
      
      <button
        onClick={() => onDelete(id)}
        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-red-400 hover:bg-red-50 hover:text-red-500 transition-all"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </motion.div>
  );
}
