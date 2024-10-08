import AtlantidaInsuranceProteccionCustomHeader from "./components/AtlantidaInsuranceProteccionCustomHeader";
import AsistenciaInsurance from "../../components/AsistenciaInsurance";
import SociosEstrategicos from "../../components/SociosEstrategicos";
import InfoPrincipal from "../../components/InfoPrincipal";
import subfooter from "../../images/subfooter30.jpg";
import RedBanner from "../../components/RedBanner";
import SubFooter from "../../components/SubFooter";

const AtlantidaInsuranceProteccionCustom = () => {
  return (
    <>
      {/* Inicio */}
      <AtlantidaInsuranceProteccionCustomHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Soluciones para empresas`} />

      {/* Seguro de Vida */}
      <InfoPrincipal
        iconClassnames={"w-56 mx-auto"}
        title={"Cobertura de Salud para PYMES"}
        titleSpan={"y Corporativos"}
        description={`Planes especialmente diseñados para brindar acceso a la mejor atención médica a sus colaboradores.`}
        icon={"https://dummyimage.com/600x400/000/fff"}
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
        title={`Coberturas que impulsan tu negocio`}
        img={"https://dummyimage.com/600x400/000/fff"}
      />
    </>
  );
};

export default AtlantidaInsuranceProteccionCustom;
