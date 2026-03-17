import { useState } from 'react';
import { Plus } from 'lucide-react';

interface AddTaskFormProps {
  onAdd: (title: string) => void;
}

export function AddTaskForm({ onAdd }: AddTaskFormProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Añadir nueva tarea..."
        className="flex-1 px-4 py-3 rounded-2xl bg-white/90 backdrop-blur-sm border-2 border-transparent focus:border-purple-500 focus:outline-none shadow-sm placeholder:text-gray-400"
      />
      <button
        type="submit"
        className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
      >
        <Plus className="w-6 h-6" strokeWidth={2.5} />
      </button>
    </form>
  );
}
