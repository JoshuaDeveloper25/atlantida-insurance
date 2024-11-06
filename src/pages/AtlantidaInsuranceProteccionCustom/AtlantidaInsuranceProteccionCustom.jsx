import AtlantidaInsuranceProteccionCustomHeader from "./components/AtlantidaInsuranceProteccionCustomHeader";
import subfooter from "../../images/proteccion-personalizada-subfooter.webp";
import AsistenciaInsurance from "../../components/AsistenciaInsurance";
import SociosEstrategicos from "../../components/SociosEstrategicos";
import InfoPrincipal from "../../components/InfoPrincipal";
import RedBanner from "../../components/RedBanner";
import SubFooter from "../../components/SubFooter";
import envelope from "../../images/envelope.png";
import { tipoCobertura } from "../../../DB/data";

const AtlantidaInsuranceProteccionCustom = () => {
  return (
    <>
      {/* Inicio */}
      <AtlantidaInsuranceProteccionCustomHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Soluciones para empresas`} />

      {/* Seguro de Vida */}
      <InfoPrincipal
        iconClassnames={"w-20 mx-auto"}
        title={"Cobertura de Salud para PYMES"}
        titleSpan={"y Corporativos"}
        description={`Planes especialmente diseñados para brindar acceso a la mejor atención médica a sus colaboradores.`}
        icon={envelope}
      />

      {/* Asistencia */}
      <AsistenciaInsurance
        templateVersionForm={import.meta.env.VITE_EMAILJS_TEMPLATE_ID_VERSION3}
        versionCoverageType={tipoCobertura[4]}
        iconClassnames={"w-24 mx-auto"}
        versionForm={1}
      />

      {/* Socios Estratégicos */}
      <SociosEstrategicos />

      {/* Subfooter */}
      <SubFooter
        bgColor={`black`}
        title={`Coberturas que impulsan tu negocio`}
        img={subfooter}
      />
    </>
  );
};

export default AtlantidaInsuranceProteccionCustom;
