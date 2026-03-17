import { RouterProvider } from 'react-router';
import { router } from './routes';

export default function App() {
  return (
    <div className="size-full flex items-center justify-center bg-gray-900">
      {/* Mobile Frame */}
      <div className="relative w-full max-w-[375px] h-full max-h-[812px] bg-white rounded-[3rem] shadow-2xl overflow-hidden border-8 border-gray-800">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}
