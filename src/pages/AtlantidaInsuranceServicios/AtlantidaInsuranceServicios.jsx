import AtlantidaInsuranceServiciosHeader from "./components/AtlantidaInsuranceServiciosHeader";
import AsistenciaInsurance from "../../components/AsistenciaInsurance";
import SociosEstrategicos from "../../components/SociosEstrategicos";
import InfoPrincipal from "../../components/InfoPrincipal";
import subfooter from "../../images/subfooter32.jpg";
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
        iconClassnames={"w-56 mx-auto"}
        title={"Cobertura Colectiva de Vida"}
        description={`Con esta póliza, garantizas un respaldo financiero en caso de fallecimiento, invalidez o enfermedades
        graves, asegurando el bienestar de tu equipo ante cualquier eventualidad.`}
        icon={"https://dummyimage.com/600x400/000/fff"}
      />

      {/* Asistencia */}
      <AsistenciaInsurance
        iconClassnames={"w-56 mx-auto"}
        icon={"https://dummyimage.com/600x400/000/fff"}
      />

      {/* Socios */}
      <SociosEstrategicos />

      {/* Subfooter 32 */}
      <SubFooter
        bgColor={`black`}
        title={`Protección sólida para un futuro seguro`}
        img={'https://dummyimage.com/600x400/000/fff'}
      />
    </>
  );
};

export default AtlantidaInsuranceServicios;
