import AtlantidaInsuranceCoberturasHeader from "./components/AtlantidaInsuranceCoberturasHeader";
import AsistenciaInsurance from "../../components/AsistenciaInsurance";
import SociosEstrategicos from "../../components/SociosEstrategicos";
import InfoPrincipal from "../../components/InfoPrincipal";
import subfooter from "../../images/subfooter30.jpg";
import RedBanner from "../../components/RedBanner";
import SubFooter from "../../components/SubFooter";

const AtlantidaInsuranceCoberturas = () => {
  return (
    <>
      {/* Inicio */}
      <AtlantidaInsuranceCoberturasHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Soluciones únicas para personas únicas`} />

      {/* Seguro de Vida */}
      <InfoPrincipal
        iconClassnames={"w-56 mx-auto"}
        title={"Otras coberturas"}
        subTitle={
          "Multirriesgo, agrícola, casco áereo, canal no tradicional, entre otros."
        }
        description={`Contamos con una amplia gama de soluciones de seguros de todos los ramos y con las mejores y
        más reconocidas compañías de seguros.`}
        icon={"https://dummyimage.com/600x400/000/fff"}
      />

      {/* Asistencia */}
      <AsistenciaInsurance
        iconClassnames={"w-56 mx-auto"}
        icon={"https://dummyimage.com/600x400/000/fff"}
        versionForm={0}
      />

      {/* Socios Estratégicos */}
      <SociosEstrategicos />

      {/* Subfooter */}
      <SubFooter
        bgColor={`black`}
        title={`Tu cobertura a medida, tus reglas`}
        img={"https://dummyimage.com/600x400/000/fff"}
      />
    </>
  );
};

export default AtlantidaInsuranceCoberturas;
