import AtlantidaInsuranceViajaConfianzaHeader from "./components/AtlantidaInsuranceViajaConfianzaHeader";
import AsistenciaInsurance from "../../components/AsistenciaInsurance";
import SociosEstrategicos from "../../components/SociosEstrategicos";
import InfoPrincipal from "../../components/InfoPrincipal";
import subfooter from "../../images/subfooter30.jpg";
import RedBanner from "../../components/RedBanner";
import SubFooter from "../../components/SubFooter";

const AtlantidaInsuranceConduceSeguro = () => {
  return (
    <>
      {/* Inicio */}
      <AtlantidaInsuranceViajaConfianzaHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Soluciones para personas`} />

      {/* Seguro de Vida */}
      <InfoPrincipal
        iconClassnames={"w-56 mx-auto"}
        title={"Cobertura de Vehículos"}
        description={`Cubre los riesgos asociados con la propiedad y el uso de un auto. Diseñado para ofrecerte tranquilidad al
        saber que, en caso de accidentes, robos, daños o cualquier otra eventualidad, contarás con el respaldo
        necesario para enfrentar las consecuencias financieras.`}
        icon={"https://dummyimage.com/600x400/000/fff"}
      />

      {/* Asistencia */}
      <AsistenciaInsurance
        iconClassnames={"w-24 mx-auto"}
        versionForm={3}
      />

      {/* Socios Estratégicos */}
      <SociosEstrategicos />

      {/* Subfooter 30 */}
      <SubFooter
        bgColor={`black`}
        title={`Protección personalizada para tu bienestar`}
        img={"https://dummyimage.com/600x400/000/fff"}
      />
    </>
  );
};

export default AtlantidaInsuranceConduceSeguro;
