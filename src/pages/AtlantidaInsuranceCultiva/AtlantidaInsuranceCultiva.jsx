import AtlantidaInsuranceCultivaHeader from "./components/AtlantidaInsuranceCultivaHeader";
import AsistenciaInsurance from "../../components/AsistenciaInsurance";
import SociosEstrategicos from "../../components/SociosEstrategicos";
import InfoPrincipal from "../../components/InfoPrincipal";
import subfooter from "../../images/cultiva-subfooter.jpg";
import userHand from "../../images/user-hand.png";
import RedBanner from "../../components/RedBanner";
import SubFooter from "../../components/SubFooter";

const AtlantidaInsuranceCultiva = () => {
  return (
    <>
      {/* Inicio */}
      <AtlantidaInsuranceCultivaHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Soluciones para empresas`} />

      {/* Seguro de Vida */}
      <InfoPrincipal
        iconClassnames={"w-24 mx-auto"}
        title={"Agrícola"}
        description={`Evita pérdidas financieras causadas por eventos climáticos y/o biológicos que afecten
        directamente a tu unidad de producción y garantice la seguridad de tus cultivos.`}
        icon={userHand}
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
        title={`Tu tierra produce, nosotros la protegemos`}
        img={subfooter}
      />
    </>
  );
};

export default AtlantidaInsuranceCultiva;
