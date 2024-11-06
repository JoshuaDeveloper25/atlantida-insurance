import AtlantidaInsuranceCoberturasHeader from "./components/AtlantidaInsuranceCoberturasHeader";
import AsistenciaInsurance from "../../components/AsistenciaInsurance";
import subfooter from "../../images/amplitud-coberturas-subfooter.jpg";
import SociosEstrategicos from "../../components/SociosEstrategicos";
import InfoPrincipal from "../../components/InfoPrincipal";
import RedBanner from "../../components/RedBanner";
import SubFooter from "../../components/SubFooter";
import icon from "../../images/search-user.png";

const AtlantidaInsuranceCoberturas = () => {
  return (
    <>
      {/* Inicio */}
      <AtlantidaInsuranceCoberturasHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Soluciones únicas para personas únicas`} />

      {/* Seguro de Vida */}
      <InfoPrincipal
        iconClassnames={"w-24 mx-auto"}
        title={"Otras coberturas"}
        subTitle={
          "Seguro para mascotas, casco áereo, canal no tradicional, entre otros."
        }
        description={`Contamos con una amplia gama de soluciones de seguros de todos los ramos y con las mejores y
        más reconocidas compañías de seguros.`}
        icon={icon}
      />

      {/* Asistencia */}
      <AsistenciaInsurance
        templateVersionForm={import.meta.env.VITE_EMAILJS_TEMPLATE_ID_VERSION6_7}
        iconClassnames={"w-24 mx-auto"}
        versionForm={0}
      />

      {/* Socios Estratégicos */}
      <SociosEstrategicos />

      {/* Subfooter */}
      <SubFooter
        bgColor={`black`}
        title={`Tu cobertura a medida, tus reglas`}
        img={subfooter}
      />
    </>
  );
};

export default AtlantidaInsuranceCoberturas;
