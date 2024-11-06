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

const AtlantidaInsuranceBlogLazy = lazy(() =>
  import("./pages/AtlantidaInsuranceBlog/AtlantidaInsuranceBlog")
);

const AtlantidaInsuranceContactoLazy = lazy(() =>
  import("./pages/AtlantidaInsuranceContacto/AtlantidaInsuranceContacto")
);

const AtlantidaInsuranceSaludProtegidaLazy = lazy(() =>
  import(
    "./pages/AtlantidaInsuranceSaludProtegida/AtlantidaInsuranceSaludProtegida"
  )
);

const AtlantidaInsuranceProtegeSaludLazy = lazy(() =>
  import(
    "./pages/AtlantidaInsuranceProtegeSalud/AtlantidaInsuranceProtegeSalud"
  )
);

const AtlantidaInsuranceViajaConfianzaLazy = lazy(() =>
  import(
    "./pages/AtlantidaInsuranceViajaConfianza/AtlantidaInsuranceViajaConfianza"
  )
);

const AtlantidaInsuranceConduceSeguroLazy = lazy(() =>
  import(
    "./pages/AtlantidaInsuranceConduceSeguro/AtlantidaInsuranceConduceSeguro"
  )
);

const AtlantidaInsuranceGastoMedicoLazy = lazy(() =>
  import("./pages/AtlantidaInsuranceGastoMedico/AtlantidaInsuranceGastoMedico")
);

const AtlantidaInsuranceProteccionLazy = lazy(() =>
  import("./pages/AtlantidaInsuranceProteccion/AtlantidaInsuranceProteccion")
);

const AtlantidaInsuranceCoberturasLazy = lazy(() =>
  import("./pages/AtlantidaInsuranceCoberturas/AtlantidaInsuranceCoberturas")
);

const AtlantidaInsuranceProteccionCustomLazy = lazy(() =>
  import(
    "./pages/AtlantidaInsuranceProteccionCustom/AtlantidaInsuranceProteccionCustom"
  )
);

const AtlantidaInsuranceConfianzaRespaldoLazy = lazy(() =>
  import(
    "./pages/AtlantidaInsuranceConfianzaRespaldo/AtlantidaInsuranceConfianzaRespaldo"
  )
);

const AtlantidaInsuranceRespaldoBaratoLazy = lazy(() =>
  import(
    "./pages/AtlantidaInsuranceRespaldoBarato/AtlantidaInsuranceRespaldoBarato"
  )
);

const AtlantidaInsuranceEmpresaPotencialLazy = lazy(() =>
  import(
    "./pages/AtlantidaInsuranceEmpresaPotencial/AtlantidaInsuranceEmpresaPotencial"
  )
);

const AtlantidaInsuranceEventualidadLazy = lazy(() =>
  import(
    "./pages/AtlantidaInsuranceEventualidad/AtlantidaInsuranceEventualidad"
  )
);

const AtlantidaInsuranceCultivaLazy = lazy(() =>
  import("./pages/AtlantidaInsuranceCultiva/AtlantidaInsuranceCultiva")
);

const AtlantidaInsuranceCargaProtegidaLazy = lazy(() =>
  import(
    "./pages/AtlantidaInsuranceCargaProtegida/AtlantidaInsuranceCargaProtegida"
  )
);

const AtlantidaInsuranceCargaImprevistoLazy = lazy(() =>
  import("./pages/AtlantidaInsuranceImprevisto/AtlantidaInsuranceImprevisto")
);

const AtlantidaInsuranceRegistrarseLazy = lazy(() =>
  import("./pages/AtlantidaInsuranceRegistrarse/AtlantidaInsuranceRegistrarse")
);

const CorreoEnviadoExitosamenteLazy = lazy(() =>
  import("./pages/CorreoEnviadoExitosamente/CorreoEnviadoExitosamente")
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
        element: <CorreoEnviadoExitosamenteLazy />,
        path: `/correo-enviado-exitosamente`,
      },

      {
        path: "/vida-individual",
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
        path: "/blog",
        element: <AtlantidaInsuranceBlogLazy />,
      },

      {
        path: "/salud-protegida",
        element: <AtlantidaInsuranceSaludProtegidaLazy />,
      },

      {
        path: "/protege-salud",
        element: <AtlantidaInsuranceProtegeSaludLazy />,
      },

      {
        path: "/viaja-confianza",
        element: <AtlantidaInsuranceViajaConfianzaLazy />,
      },

      {
        path: "/conduce-seguro",
        element: <AtlantidaInsuranceConduceSeguroLazy />,
      },

      {
        path: "/gasto-medico",
        element: <AtlantidaInsuranceGastoMedicoLazy />,
      },

      {
        path: "/proteccion-integral",
        element: <AtlantidaInsuranceProteccionLazy />,
      },

      {
        path: "/proteccion-personalizada",
        element: <AtlantidaInsuranceProteccionCustomLazy />,
      },

      {
        path: "/amplitud-coberturas",
        element: <AtlantidaInsuranceCoberturasLazy />,
      },

      {
        path: "/confianza-respaldo",
        element: <AtlantidaInsuranceConfianzaRespaldoLazy />,
      },

      {
        path: "/respaldo-economico",
        element: <AtlantidaInsuranceRespaldoBaratoLazy />,
      },

      {
        path: "/empresa-potencial",
        element: <AtlantidaInsuranceEmpresaPotencialLazy />,
      },

      {
        path: "/eventualidad",
        element: <AtlantidaInsuranceEventualidadLazy />,
      },

      {
        path: "/cultiva",
        element: <AtlantidaInsuranceCultivaLazy />,
      },

      {
        path: "/carga-protegida",
        element: <AtlantidaInsuranceCargaProtegidaLazy />,
      },

      {
        path: "/imprevisto",
        element: <AtlantidaInsuranceCargaImprevistoLazy />,
      },

      {
        path: "/registrarse",
        element: <AtlantidaInsuranceRegistrarseLazy />,
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
