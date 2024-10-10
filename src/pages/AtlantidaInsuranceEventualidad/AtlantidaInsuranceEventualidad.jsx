import AtlantidaInsuranceEventualidadHeader from "./components/AtlantidaInsuranceEventualidadHeader";
import AsistenciaInsurance from "../../components/AsistenciaInsurance";
import SociosEstrategicos from "../../components/SociosEstrategicos";
import leftRightArrows from "../../images/left-right-arrows.png";
import subfooter from "../../images/eventualidad-subfooter.jpg";
import InfoPrincipal from "../../components/InfoPrincipal";
import RedBanner from "../../components/RedBanner";
import SubFooter from "../../components/SubFooter";

const AtlantidaInsuranceEventualidad = () => {
  return (
    <>
      {/* Inicio */}
      <AtlantidaInsuranceEventualidadHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Soluciones para empresas`} />

      {/* Seguro de Vida */}
      <InfoPrincipal
        iconClassnames={"w-24 mx-auto"}
        title={"Responsabilidad Civil o"}
        titleSpan={
          <>
            Profesional por Daños a{" "}
            <span className="sm:block inline">Terceros</span>
          </>
        }
        description={`Protege tu patrimonio y evita pérdidas financieras importantes. Resuelve los daños que sufran tus
        inmuebles, herramientas, mercancía o terceras personas.`}
        icon={leftRightArrows}
      />

      {/* Asistencia */}
      <AsistenciaInsurance
        templateVersionForm={import.meta.env.VITE_EMAILJS_TEMPLATE_ID_VERSION3}
        iconClassnames={"w-24 mx-auto"}
        versionForm={1}
      />

      {/* Socios Estratégicos */}
      <SociosEstrategicos />

      {/* Subfooter */}
      <SubFooter
        bgColor={`black`}
        title={`Responsabilidad cubierta, problemas resueltos`}
        img={subfooter}
      />
    </>
  );
};

export default AtlantidaInsuranceEventualidad;
