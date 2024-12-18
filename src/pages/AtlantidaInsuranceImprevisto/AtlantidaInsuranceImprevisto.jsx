import AtlantidaInsuranceImprevistoHeader from "./components/AtlantidaInsuranceImprevistoHeader";
import AsistenciaInsurance from "../../components/AsistenciaInsurance";
import SociosEstrategicos from "../../components/SociosEstrategicos";
import subfooter from "../../images/imprevisto-subfooter.jpg";
import InfoPrincipal from "../../components/InfoPrincipal";
import icon from "../../images/exclamation-shield.png";
import RedBanner from "../../components/RedBanner";
import SubFooter from "../../components/SubFooter";
import { tipoCobertura } from "../../../DB/data";

const AtlantidaInsuranceImprevisto = () => {
  return (
    <>
      {/* Inicio */}
      <AtlantidaInsuranceImprevistoHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Soluciones para empresas`} />

      {/* Seguro de Vida */}
      <InfoPrincipal
        iconClassnames={"w-24 mx-auto"}
        title={"Riesgos Especiales"}
        description={`Protege tu patrimonio, cuidando tu negocio.
        Las coberturas de riesgos especiales evitan pérdidas en tu inversión.`}
        icon={icon}
      />

      {/* Asistencia */}
      <AsistenciaInsurance
        templateVersionForm={import.meta.env.VITE_EMAILJS_TEMPLATE_ID_VERSION3}
        iconClassnames={"w-24 mx-auto"}
        coverageType={false}
        versionForm={1}
      />

      {/* Socios Estratégicos */}
      <SociosEstrategicos />

      {/* Subfooter */}
      <SubFooter
        bgColor={`black`}
        title={`Cobertura para cada eventualidad`}
        img={subfooter}
      />
    </>
  );
};

export default AtlantidaInsuranceImprevisto;
