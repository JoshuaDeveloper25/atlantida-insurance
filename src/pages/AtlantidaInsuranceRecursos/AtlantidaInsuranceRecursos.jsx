import AtlantidaInsuranceRecursosHeader from "./components/AtlantidaInsuranceRecursosHeader";
import AtlantidaInsuranceRecursosFAQ from "./components/AtlantidaInsuranceRecursosFAQ";
import AsistenciaInsurance from "../../components/AsistenciaInsurance";
import subfooter from "../../images/subfooter33.jpg";
import RedBanner from "../../components/RedBanner";
import SubFooter from "../../components/SubFooter";

const AtlantidaInsuranceRecursos = () => {
  return (
    <>
      {/* Inicio */}
      <AtlantidaInsuranceRecursosHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Encuentra respuestas rápidas y precisas`} />

      {/* FAQ */}
      <AtlantidaInsuranceRecursosFAQ />

      {/* Asistencia */}
      <AsistenciaInsurance
        title={"¿Aún tienes preguntas?"}
        titleSpan={"Contacta un asesor"}
        addClassName={"border-y-0 bg-tertiary-color"}
      />

      {/* Subfooter 33 */}
      <SubFooter
        bgColor={`black`}
        title={`Tu respaldo en todo momento`}
        img={subfooter}
      />
    </>
  );
};

export default AtlantidaInsuranceRecursos;
