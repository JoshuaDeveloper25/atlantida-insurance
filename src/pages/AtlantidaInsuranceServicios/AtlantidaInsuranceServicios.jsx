import AtlantidaInsuranceServiciosHeader from "./components/AtlantidaInsuranceServiciosHeader";
import AtlantidaInsuranceServiciosFeatures from "./components/AtlantidaInsuranceServiciosFeatures";
import AtlantidaInsuranceServiciosSocios from "./components/AtlantidaInsuranceServiciosSocios";
import AtlantidaInsuranceServiciosSeguro from "./components/AtlantidaInsuranceServiciosSeguro";
import AsistenciaInsurance from "../../components/AsistenciaInsurance";
import MasInformacion from "../../components/MasInformacion";
import subfooter from "../../images/subfooter32.jpg";
import RedBanner from "../../components/RedBanner";
import SubFooter from "../../components/SubFooter";

const AtlantidaInsuranceServicios = () => {
  return (
    <>
      {/* Inicio */}
      <AtlantidaInsuranceServiciosHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Seguros para empresas y PYMES`} />

      {/* Seguro Corporativo */}
      <AtlantidaInsuranceServiciosSeguro />

      {/* Features Tabs */}
      <AtlantidaInsuranceServiciosFeatures />

      {/* Asistencia */}
      <AsistenciaInsurance title={"Solicita Asistencia Personalizada"} />

      {/* Socios */}
      <AtlantidaInsuranceServiciosSocios />

      {/* Más información */}
      <MasInformacion />

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
