import AtlantidaInsuranceViajaConfianzaHeader from "./components/AtlantidaInsuranceViajaConfianzaHeader";
import AsistenciaInsurance from "../../components/AsistenciaInsurance";
import SociosEstrategicos from "../../components/SociosEstrategicos";
import InfoPrincipal from "../../components/InfoPrincipal";
import subfooter from "../../images/subfooter30.jpg";
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
        iconClassnames={"w-56 mx-auto"}
        title={"Cobertura de Asistencia en"}
        titleSpan={"Viajes"}
        description={`Cobertura desde emergencias médicas hasta pérdida de equipaje. No permitas que un accidente o
        imprevisto arruine tu viaje planificado.`}
        icon={"https://dummyimage.com/600x400/000/fff"}
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
        img={"https://dummyimage.com/600x400/000/fff"}
      />
    </>
  );
};

export default AtlantidaInsuranceViajaConfianza;
