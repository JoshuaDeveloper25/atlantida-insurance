import AtlantidaInsuranceConfianzaRespaldoHeader from "./components/AtlantidaInsuranceConfianzaRespaldoHeader";
import AsistenciaInsurance from "../../components/AsistenciaInsurance";
import subfooter from "../../images/confianza-respaldo-subfooter.jpeg";
import icon from "../../images/townhall.png";
import SociosEstrategicos from "../../components/SociosEstrategicos";
import InfoPrincipal from "../../components/InfoPrincipal";
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
        iconClassnames={"w-24 mx-auto"}
        title={"Fianzas y Créditos"}
        description={`Las fianzas respaldan tus obligaciones, contratos o proyectos que emprendas en la adjudicación
        de un servicio, suministro u obra que proveerás.`}
        icon={icon}
      />

      {/* Asistencia */}
      <AsistenciaInsurance
        iconClassnames={"w-24 mx-auto"}
        versionForm={1}
      />

      {/* Socios Estratégicos */}
      <SociosEstrategicos />

      {/* Subfooter */}
      <SubFooter
        bgColor={`black`}
        title={`Asesoramiento experto para negocios exitosos`}
        img={subfooter}
      />
    </>
  );
};

export default AtlantidaInsuranceConfianzaRespaldo;
