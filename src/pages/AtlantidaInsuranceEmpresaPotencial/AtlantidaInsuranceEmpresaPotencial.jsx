import AtlantidaInsuranceEmpresaPotencialHeader from "./components/AtlantidaInsuranceEmpresaPotencialHeader";
import AsistenciaInsurance from "../../components/AsistenciaInsurance";
import SociosEstrategicos from "../../components/SociosEstrategicos";
import subfooter from "../../images/empresa-potencial-subfooter.jpg";
import icon from "../../images/building.png";
import InfoPrincipal from "../../components/InfoPrincipal";
import RedBanner from "../../components/RedBanner";
import SubFooter from "../../components/SubFooter";

const AtlantidaInsuranceEmpresaPotencial = () => {
  return (
    <>
      {/* Inicio */}
      <AtlantidaInsuranceEmpresaPotencialHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Soluciones para empresas`} />

      {/* Seguro de Vida */}
      <InfoPrincipal
        iconClassnames={"w-24 mx-auto"}
        title={"Seguros Masivos"}
        description={`Diseños de productos estratégicos con coberturas y primas preferenciales para cooperativas, banca
        seguros, mutualistas e instituciones financieras.`}
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
        title={`Con nuestros seguros masivos, todos están cubiertos`}
        img={subfooter}
      />
    </>
  );
};

export default AtlantidaInsuranceEmpresaPotencial;
