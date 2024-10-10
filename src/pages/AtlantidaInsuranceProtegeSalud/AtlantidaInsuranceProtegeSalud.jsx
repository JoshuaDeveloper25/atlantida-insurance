import AtlantidaInsuranceProtegeSaludHeader from "./components/AtlantidaInsuranceProtegeSaludHeader";
import AsistenciaInsurance from "../../components/AsistenciaInsurance";
import SociosEstrategicos from "../../components/SociosEstrategicos";
import subfooter from "../../images/protege-salud-subfooter.jpeg";
import InfoPrincipal from "../../components/InfoPrincipal";
import RedBanner from "../../components/RedBanner";
import SubFooter from "../../components/SubFooter";
import world from "../../images/world.png";

const AtlantidaInsuranceProtegeSalud = () => {
  return (
    <>
      {/* Inicio */}
      <AtlantidaInsuranceProtegeSaludHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Soluciones para personas`} />

      {/* Seguro de Vida */}
      <InfoPrincipal
        iconClassnames={"w-24 mx-auto"}
        title={"Cobertura de Salud"}
        titleSpan={"Internacional"}
        description={`Acceso a prestadores médicos y tecnológicos de primer nivel.`}
        icon={world}
      />

      {/* Asistencia */}
      <AsistenciaInsurance
        templateVersionForm={import.meta.env.VITE_EMAILJS_TEMPLATE_ID_VERSION3}
        iconClassnames={"w-24 mx-auto"}
      />

      {/* Socios Estratégicos */}
      <SociosEstrategicos />

      {/* Subfooter */}
      <SubFooter
        bgColor={`black`}
        title={`Tranquilidad asegurada, estés donde estés`}
        img={subfooter}
      />
    </>
  );
};

export default AtlantidaInsuranceProtegeSalud;
