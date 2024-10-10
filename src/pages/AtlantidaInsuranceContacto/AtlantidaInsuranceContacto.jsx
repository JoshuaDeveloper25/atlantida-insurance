import AtlantidaInsuranceContactoHeading from "./components/AtlantidaInsuranceContactoHeading";
import AtlantidaInsuranceContactoHeader from "./components/AtlantidaInsuranceContactoHeader";
import subfooter from "../../images/subfooterinsurancecontacto.jpg";
import ContactarAsesor from "../../components/ContactarAsesor";
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
      <ContactarAsesor
        text="Solicita Asistencia Personalizada"
        textSpanned=""
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
