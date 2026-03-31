import { createBrowserRouter } from "react-router";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Buscar } from "./pages/Buscar";
import { Alertas } from "./pages/Alertas";
import { Perfil } from "./pages/Perfil";
import { Reservacion } from "./pages/Reservacion";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Login,
    },
    {
      path: "/home",
      Component: Home,
    },
    {
      path: "/buscar",
      Component: Buscar,
    },
    {
      path: "/alertas",
      Component: Alertas,
    },
    {
      path: "/perfil",
      Component: Perfil,
    },
    {
      path: "/reservacion",
      Component: Reservacion,
    },
  ],
  { basename: '/MEDICAMENTOS_/' }
);