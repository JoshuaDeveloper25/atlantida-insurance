import AtlantidaInsuranceCargaProtegidaHeader from "./components/AtlantidaInsuranceCargaProtegidaHeader";
import AsistenciaInsurance from "../../components/AsistenciaInsurance";
import SociosEstrategicos from "../../components/SociosEstrategicos";
import InfoPrincipal from "../../components/InfoPrincipal";
import subfooter from "../../images/subfooter30.jpg";
import RedBanner from "../../components/RedBanner";
import SubFooter from "../../components/SubFooter";

const AtlantidaInsuranceCargaProtegida = () => {
  return (
    <>
      {/* Inicio */}
      <AtlantidaInsuranceCargaProtegidaHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Soluciones para empresas`} />

      {/* Seguro de Vida */}
      <InfoPrincipal
        iconClassnames={"w-56 mx-auto"}
        title={"Transporte"}
        description={`Cobertura para los daños y pérdidas materiales sobrevenidas, bien al material de transporte, o bien a los
        objetos transportados en caso de traslado o viaje por vía fluvial, férrea, aérea o marítima.`}
        icon={"https://dummyimage.com/600x400/000/fff"}
      />

      {/* Asistencia */}
      <AsistenciaInsurance
        iconClassnames={"w-56 mx-auto"}
        icon={"https://dummyimage.com/600x400/000/fff"}
        versionForm={1}
      />

      {/* Socios Estratégicos */}
      <SociosEstrategicos />

      {/* Subfooter */}
      <SubFooter
        bgColor={`black`}
        title={`Seguro en cada kilómetro`}
        img={"https://dummyimage.com/600x400/000/fff"}
      />
    </>
  );
};

export default AtlantidaInsuranceCargaProtegida;
