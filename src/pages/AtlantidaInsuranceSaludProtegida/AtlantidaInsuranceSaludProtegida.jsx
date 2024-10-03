import AtlantidaInsuranceSaludProtegidaHeader from "./components/AtlantidaInsuranceSaludProtegidaHeader";
import AsistenciaInsurance from "../../components/AsistenciaInsurance";
import SociosEstrategicos from "../../components/SociosEstrategicos";
import InfoPrincipal from "../../components/InfoPrincipal";
import subfooter from "../../images/subfooter30.jpg";
import RedBanner from "../../components/RedBanner";
import SubFooter from "../../components/SubFooter";

const AtlantidaInsuranceSaludProtegida = () => {
  return (
    <>
      {/* Inicio */}
      <AtlantidaInsuranceSaludProtegidaHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Soluciones para personas`} />

      {/* Cobertura de Salud */}
      <InfoPrincipal
        iconClassnames={"w-56 mx-auto"}
        title={"Cobertura de Salud"}
        description={`Planes médicos diseñados para priorizar tu salud y bienestar, ya sea a nivel individual o familiar. Con
        coberturas y beneficios adaptados a tus necesidades específicas y que te brindan acceso a una red de
        proveedores médicos en todo el país.`}
        icon={"https://dummyimage.com/600x400/000/fff"}
      />

      {/* Asistencia */}
      <AsistenciaInsurance
        iconClassnames={"w-56 mx-auto"}
        icon={"https://dummyimage.com/600x400/000/fff"}
        title={"Solicita Asistencia Personalizada"}
      />

      {/* Socios Estratégicos */}
      <SociosEstrategicos />

      {/* Subfooter */}
      <SubFooter
        bgColor={`black`}
        title={`Vida y salud aseguradas, tranquilidad garantizada`}
        img={"https://dummyimage.com/600x400/000/fff"}
      />
    </>
  );
};

export default AtlantidaInsuranceSaludProtegida;
