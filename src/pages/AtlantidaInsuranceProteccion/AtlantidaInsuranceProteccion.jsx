import AtlantidaInsuranceProteccionHeader from "./components/AtlantidaInsuranceProteccionHeader";
import AsistenciaInsurance from "../../components/AsistenciaInsurance";
import SociosEstrategicos from "../../components/SociosEstrategicos";
import subfooter from "../../images/salud-protegida-subfooter.jpeg";
import InfoPrincipal from "../../components/InfoPrincipal";
import RedBanner from "../../components/RedBanner";
import SubFooter from "../../components/SubFooter";
import { tipoCobertura } from "../../../DB/data";
import addUser from "../../images/add-user.png";

const AtlantidaInsuranceProteccion = () => {
  return (
    <>
      {/* Inicio */}
      <AtlantidaInsuranceProteccionHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Soluciones para personas`} />

      {/* Seguro de Vida */}
      <InfoPrincipal
        iconClassnames={"w-20 mx-auto"}
        title={"Cobertura de Accidentes"}
        titleSpan={"Personales"}
        description={`Protégete ante los imprevistos cotidianos con el respaldo económico de los gastos generados,
        proporcionándole seguridad a tu familia.`}
        icon={addUser}
      />

      {/* Asistencia */}
      <AsistenciaInsurance
        templateVersionForm={import.meta.env.VITE_EMAILJS_TEMPLATE_ID_VERSION3}
        versionCoverageType={tipoCobertura[3]}
        iconClassnames={"w-24 mx-auto"}
        versionForm={1}
      />

      {/* Socios Estratégicos */}
      <SociosEstrategicos />

      {/* Subfooter */}
      <SubFooter
        bgColor={`black`}
        title={`Contigo, en cada momento importante`}
        img={subfooter}
      />
    </>
  );
};

export default AtlantidaInsuranceProteccion;
