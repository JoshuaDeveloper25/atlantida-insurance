import AtlantidaInsuranceGastoMedicoHeader from "./components/AtlantidaInsuranceGastoMedicoHeader";
import AsistenciaInsurance from "../../components/AsistenciaInsurance";
import SociosEstrategicos from "../../components/SociosEstrategicos";
import subfooter from "../../images/gasto-medico-subfooter.jpg";
import InfoPrincipal from "../../components/InfoPrincipal";
import checkShield from "../../images/check-shield.png";
import RedBanner from "../../components/RedBanner";
import SubFooter from "../../components/SubFooter";

const AtlantidaInsuranceGastoMedico = () => {
  return (
    <>
      {/* Inicio */}
      <AtlantidaInsuranceGastoMedicoHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Soluciones para personas`} />

      {/* Seguro de Vida */}
      <InfoPrincipal
        iconClassnames={"w-24 mx-auto"}
        title={"Cobertura de Gastos Médicos"}
        titleSpan={"Mayores"}
        description={`Amplia cobertura desde $500,000 para enfermedades y accidentes, cubriendo el 100% después de
        haber superado el deducible.`}
        icon={checkShield}
      />

      {/* Asistencia */}
      <AsistenciaInsurance iconClassnames={"w-24 mx-auto"} versionForm={1} />

      {/* Socios Estratégicos */}
      <SociosEstrategicos />

      {/* Subfooter 30 */}
      <SubFooter
        bgColor={`black`}
        title={`Protección que necesitas, la confianza que mereces`}
        img={subfooter}
      />
    </>
  );
};

export default AtlantidaInsuranceGastoMedico;
