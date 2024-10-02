import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Spinner from "./components/Spinner";

const RootLazy = lazy(() => import("./pages/Root"));

const AtlantidaInsuranceInicioLazy = lazy(() =>
  import("./pages/AtlantidaInsuranceInicio/AtlantidaInsuranceInicio")
);

const AtlantidaInsuranceProductosLazy = lazy(() =>
  import("./pages/AtlantidaInsuranceProductos/AtlantidaInsuranceProductos")
);

const AtlantidaInsuranceAboutLazy = lazy(() =>
  import("./pages/AtlantidaInsuranceAbout/AtlantidaInsuranceAbout")
);

const AtlantidaInsuranceServiciosLazy = lazy(() =>
  import("./pages/AtlantidaInsuranceServicios/AtlantidaInsuranceServicios")
);

const AtlantidaInsuranceRecursosLazy = lazy(() =>
  import("./pages/AtlantidaInsuranceRecursos/AtlantidaInsuranceRecursos")
);

const AtlantidaInsuranceContactoLazy = lazy(() =>
  import("./pages/AtlantidaInsuranceContacto/AtlantidaInsuranceContacto")
);

const router = createBrowserRouter([
  // --> Normal Pages
  {
    element: <RootLazy />,
    children: [
      // --> Atlantida Insurance
      {
        element: <AtlantidaInsuranceInicioLazy />,
        index: true,
      },

      {
        path: "/productos",
        element: <AtlantidaInsuranceProductosLazy />,
      },

      {
        path: "/quienes-somos",
        element: <AtlantidaInsuranceAboutLazy />,
      },

      {
        path: "/servicios",
        element: <AtlantidaInsuranceServiciosLazy />,
      },

      {
        path: "/recursos",
        element: <AtlantidaInsuranceRecursosLazy />,
      },

      {
        path: "/contacto",
        element: <AtlantidaInsuranceContactoLazy />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
