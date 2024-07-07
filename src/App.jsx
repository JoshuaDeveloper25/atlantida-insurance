import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Spinner from "./components/Spinner";

const RootLazy = lazy(() => import("./pages/Root"));

const AtlantidaInsuranceInicioLazy = lazy(() =>
  import(
    "./pages/LayoutEmpresas/AtlantidaInsurance/AtlantidaInsuranceInicio/AtlantidaInsuranceInicio"
  )
);
const AtlantidaInsuranceProductosLazy = lazy(() =>
  import(
    "./pages/LayoutEmpresas/AtlantidaInsurance/AtlantidaInsuranceProductos/AtlantidaInsuranceProductos"
  )
);
const AtlantidaInsuranceAboutLazy = lazy(() =>
  import(
    "./pages/LayoutEmpresas/AtlantidaInsurance/AtlantidaInsuranceAbout/AtlantidaInsuranceAbout"
  )
);
const AtlantidaInsuranceServiciosLazy = lazy(() =>
  import(
    "./pages/LayoutEmpresas/AtlantidaInsurance/AtlantidaInsuranceServicios/AtlantidaInsuranceServicios"
  )
);
const AtlantidaInsuranceRecursosLazy = lazy(() =>
  import(
    "./pages/LayoutEmpresas/AtlantidaInsurance/AtlantidaInsuranceRecursos/AtlantidaInsuranceRecursos"
  )
);
const AtlantidaInsuranceContactoLazy = lazy(() =>
  import(
    "./pages/LayoutEmpresas/AtlantidaInsurance/AtlantidaInsuranceContacto/AtlantidaInsuranceContacto"
  )
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
