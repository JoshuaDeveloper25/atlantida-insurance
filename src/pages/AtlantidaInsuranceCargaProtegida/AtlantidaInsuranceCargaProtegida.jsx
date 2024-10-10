import AtlantidaInsuranceCargaProtegidaHeader from "./components/AtlantidaInsuranceCargaProtegidaHeader";
import AsistenciaInsurance from "../../components/AsistenciaInsurance";
import SociosEstrategicos from "../../components/SociosEstrategicos";
import subfooter from "../../images/carga-protegida-subfooter.webp";
import InfoPrincipal from "../../components/InfoPrincipal";
import RedBanner from "../../components/RedBanner";
import SubFooter from "../../components/SubFooter";
import ship from "../../images/ship.png";

const AtlantidaInsuranceCargaProtegida = () => {
  return (
    <>
      {/* Inicio */}
      <AtlantidaInsuranceCargaProtegidaHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Soluciones para empresas`} />

      {/* Seguro de Vida */}
      <InfoPrincipal
        iconClassnames={"w-24 mx-auto"}
        title={"Transporte"}
        description={`Cobertura para los daños y pérdidas materiales sobrevenidas, bien al material de transporte, o bien a los
        objetos transportados en caso de traslado o viaje por vía fluvial, férrea, aérea o marítima.`}
        icon={ship}
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
        title={`Seguro en cada kilómetro`}
        img={subfooter}
      />
    </>
  );
};

export default AtlantidaInsuranceCargaProtegida;
