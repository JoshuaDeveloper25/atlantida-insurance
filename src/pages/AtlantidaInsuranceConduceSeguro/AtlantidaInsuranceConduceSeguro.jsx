import AtlantidaInsuranceViajaConfianzaHeader from "./components/AtlantidaInsuranceViajaConfianzaHeader";
import AsistenciaInsurance from "../../components/AsistenciaInsurance";
import SociosEstrategicos from "../../components/SociosEstrategicos";
import subfooter from "../../images/conduce-seguro-subfooter.jpeg";
import InfoPrincipal from "../../components/InfoPrincipal";
import SubFooter from "../../components/SubFooter";
import RedBanner from "../../components/RedBanner";
import { tipoCobertura } from "../../../DB/data";
import car from "../../images/car.png";

const AtlantidaInsuranceConduceSeguro = () => {
  return (
    <>
      {/* Inicio */}
      <AtlantidaInsuranceViajaConfianzaHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Soluciones para personas`} />

      {/* Seguro de Vida */}
      <InfoPrincipal
        iconClassnames={"w-24 mx-auto"}
        title={"Cobertura de Vehículos"}
        description={`Cubre los riesgos asociados con la propiedad y el uso de un auto. Diseñado para ofrecerte tranquilidad al
        saber que, en caso de accidentes, robos, daños o cualquier otra eventualidad, contarás con el respaldo
        necesario para enfrentar las consecuencias financieras.`}
        icon={car}
      />

      {/* Asistencia */}
      <AsistenciaInsurance
        templateVersionForm={import.meta.env.VITE_EMAILJS_TEMPLATE_ID_VERSION5}
        versionCoverageType={tipoCobertura[2]}
        iconClassnames={"w-24 mx-auto"}
        versionForm={3}
      />

      {/* Socios Estratégicos */}
      <SociosEstrategicos />

      {/* Subfooter 30 */}
      <SubFooter
        bgColor={`black`}
        title={`Protección personalizada para tu bienestar`}
        img={subfooter}
      />
    </>
  );
};

export default AtlantidaInsuranceConduceSeguro;
