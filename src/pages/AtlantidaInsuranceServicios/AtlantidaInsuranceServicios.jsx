import AtlantidaInsuranceServiciosHeader from "./components/AtlantidaInsuranceServiciosHeader";
import AsistenciaInsurance from "../../components/AsistenciaInsurance";
import SociosEstrategicos from "../../components/SociosEstrategicos";
import subfooter from "../../images/servicios-subfooter.jpg";
import InfoPrincipal from "../../components/InfoPrincipal";
import icon from "../../images/search-luggage.png";
import RedBanner from "../../components/RedBanner";
import SubFooter from "../../components/SubFooter";

const AtlantidaInsuranceServicios = () => {
  return (
    <>
      {/* Inicio */}
      <AtlantidaInsuranceServiciosHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Soluciones para empresas`} />

      {/* Cobertura */}
      <InfoPrincipal
        iconClassnames={"w-36 mx-auto"}
        title={"Cobertura Colectiva de Vida"}
        description={`Con esta póliza, garantizas un respaldo financiero en caso de fallecimiento, invalidez o enfermedades
        graves, asegurando el bienestar de tu equipo ante cualquier eventualidad.`}
        icon={icon}
      />

      {/* Asistencia */}
      <AsistenciaInsurance
        templateVersionForm={import.meta.env.VITE_EMAILJS_TEMPLATE_ID_VERSION3}
        iconClassnames={"w-24 mx-auto"}
      />

      {/* Socios */}
      <SociosEstrategicos />

      {/* Subfooter 32 */}
      <SubFooter
        bgColor={`black`}
        title={`Protección sólida para un futuro seguro`}
        img={subfooter}
      />
    </>
  );
};

export default AtlantidaInsuranceServicios;
