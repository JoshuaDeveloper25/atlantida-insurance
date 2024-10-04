import AtlantidaInsuranceConfianzaRespaldoHeader from "./components/AtlantidaInsuranceConfianzaRespaldoHeader";
import AsistenciaInsurance from "../../components/AsistenciaInsurance";
import SociosEstrategicos from "../../components/SociosEstrategicos";
import InfoPrincipal from "../../components/InfoPrincipal";
import subfooter from "../../images/subfooter30.jpg";
import RedBanner from "../../components/RedBanner";
import SubFooter from "../../components/SubFooter";

const AtlantidaInsuranceConfianzaRespaldo = () => {
  return (
    <>
      {/* Inicio */}
      <AtlantidaInsuranceConfianzaRespaldoHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Soluciones para empresas`} />

      {/* Seguro de Vida */}
      <InfoPrincipal
        iconClassnames={"w-56 mx-auto"}
        title={"Fianzas y Créditos"}
        description={`Las fianzas respaldan tus obligaciones, contratos o proyectos que emprendas en la adjudicación
        de un servicio, suministro u obra que proveerás.`}
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
        title={`Asesoramiento experto para negocios exitosos`}
        img={"https://dummyimage.com/600x400/000/fff"}
      />
    </>
  );
};

export default AtlantidaInsuranceConfianzaRespaldo;
