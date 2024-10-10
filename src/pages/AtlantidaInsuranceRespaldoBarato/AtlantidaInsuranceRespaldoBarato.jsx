import AtlantidaInsuranceRespaldoBaratoHeader from "./components/AtlantidaInsuranceRespaldoBaratoHeader";
import AsistenciaInsurance from "../../components/AsistenciaInsurance";
import SociosEstrategicos from "../../components/SociosEstrategicos";
import subfooter from "../../images/respaldo-economico-subfooter.avif";
import InfoPrincipal from "../../components/InfoPrincipal";
import RedBanner from "../../components/RedBanner";
import SubFooter from "../../components/SubFooter";
import icon from "../../images/add-shield.png";

const AtlantidaInsuranceRespaldoBarato = () => {
  return (
    <>
      {/* Inicio */}
      <AtlantidaInsuranceRespaldoBaratoHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Soluciones para empresas`} />

      {/* Seguro de Vida */}
      <InfoPrincipal
        iconClassnames={"w-20 mx-auto"}
        title={"Cobertura de Gastos Médicos"}
        titleSpan={"Mayores"}
        description={`Planes especialmente diseñados para brindar acceso a la mejor atención médica a tus colaboradores.`}
        icon={icon}
      />

      {/* Asistencia */}
      <AsistenciaInsurance
        templateVersionForm={import.meta.env.VITE_EMAILJS_TEMPLATE_ID_VERSION3}
        iconClassnames={"w-24 mx-auto"}
        versionForm={1}
      />

      {/* Socios Estratégicos */}
      <SociosEstrategicos />

      {/* Subfooter */}
      <SubFooter
        bgColor={`black`}
        title={`Cuidamos de tu empresa, fortalecemos tu futuro`}
        img={subfooter}
      />
    </>
  );
};

export default AtlantidaInsuranceRespaldoBarato;
