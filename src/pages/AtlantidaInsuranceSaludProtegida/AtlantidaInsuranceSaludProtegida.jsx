import AtlantidaInsuranceSaludProtegidaHeader from "./components/AtlantidaInsuranceSaludProtegidaHeader";
import AsistenciaInsurance from "../../components/AsistenciaInsurance";
import SociosEstrategicos from "../../components/SociosEstrategicos";
import subfooter from "../../images/salud-protegida-subfooter.jpeg";
import medkit from "../../images/medkit.png";
import InfoPrincipal from "../../components/InfoPrincipal";
import RedBanner from "../../components/RedBanner";
import SubFooter from "../../components/SubFooter";
import { tipoCobertura } from "../../../DB/data";

const AtlantidaInsuranceSaludProtegida = () => {
  return (
    <>
      {/* Inicio */}
      <AtlantidaInsuranceSaludProtegidaHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Soluciones para personas`} />

      {/* Cobertura de Salud */}
      <InfoPrincipal
        iconClassnames={"w-24 mx-auto"}
        title={"Cobertura de Salud"}
        description={`Planes médicos diseñados para priorizar tu salud y bienestar, ya sea a nivel individual o familiar. Con
        coberturas y beneficios adaptados a tus necesidades específicas y que te brindan acceso a una red de
        proveedores médicos en todo el país.`}
        icon={medkit}
      />

      {/* Asistencia */}
      <AsistenciaInsurance
        templateVersionForm={import.meta.env.VITE_EMAILJS_TEMPLATE_ID_VERSION3}
        versionCoverageType={tipoCobertura[1]}
        iconClassnames={"w-24 mx-auto"}
      />

      {/* Socios Estratégicos */}
      <SociosEstrategicos />

      {/* Subfooter */}
      <SubFooter
        bgColor={`black`}
        title={`Vida y salud aseguradas, tranquilidad garantizada`}
        img={subfooter}
      />
    </>
  );
};

export default AtlantidaInsuranceSaludProtegida;
