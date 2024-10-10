import AtlantidaInsuranceViajaConfianzaHeader from "./components/AtlantidaInsuranceViajaConfianzaHeader";
import AsistenciaInsurance from "../../components/AsistenciaInsurance";
import SociosEstrategicos from "../../components/SociosEstrategicos";
import InfoPrincipal from "../../components/InfoPrincipal";
import subfooter from "../../images/viaja-confianza-subfooter.webp";
import plane from "../../images/plane.png";
import RedBanner from "../../components/RedBanner";
import SubFooter from "../../components/SubFooter";

const AtlantidaInsuranceViajaConfianza = () => {
  return (
    <>
      {/* Inicio */}
      <AtlantidaInsuranceViajaConfianzaHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Soluciones para personas`} />

      {/* Seguro de Vida */}
      <InfoPrincipal
        iconClassnames={"w-24 mx-auto"}
        title={"Cobertura de Asistencia en"}
        titleSpan={"Viajes"}
        description={`Cobertura desde emergencias médicas hasta pérdida de equipaje. No permitas que un accidente o
        imprevisto arruine tu viaje planificado.`}
        icon={plane}
      />

      {/* Asistencia */}
      <AsistenciaInsurance
        iconClassnames={"w-24 mx-auto"} 
        versionForm={2} 
      />

      {/* Socios Estratégicos */}
      <SociosEstrategicos />

      {/* Subfooter 30 */}
      <SubFooter
        bgColor={`black`}
        title={`Tu bienestar, nuestra prioridad`}
        img={subfooter}
      />
    </>
  );
};

export default AtlantidaInsuranceViajaConfianza;
