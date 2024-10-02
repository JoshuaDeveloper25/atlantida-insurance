import AtlantidaInsuranceContactoHeading from "./components/AtlantidaInsuranceContactoHeading";
import AtlantidaInsuranceContactoHeader from "./components/AtlantidaInsuranceContactoHeader";
import AsistenciaInsurance from "../../components/AsistenciaInsurance";
import subfooter from "../../images/subfooterinsurancecontacto.jpg";
import SubFooter from "../../components/SubFooter";
import RedBanner from "../../components/RedBanner";

const AtlantidaInsuranceContacto = () => {
  return (
    <>
      {/* Header */}
      <AtlantidaInsuranceContactoHeading />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Seguros para empresas y PYMES`} />

      {/* Formulario */}
      <AtlantidaInsuranceContactoHeader />

      {/* Asistencia */}
      <AsistenciaInsurance
        title={"Solicita Asistencia Personalizada"}
        addClassName={"border-y-0 bg-tertiary-color"}
      />

      {/* Subfooter 28 */}
      <SubFooter
        bgColor={`black`}
        img={subfooter}
        addClassName={`bg-center`}
        title={`Asegura tu futuro con nosotros`}
      />
    </>
  );
};

export default AtlantidaInsuranceContacto;
