import AtlantidaInsuranceAboutValores from "./components/AtlantidaInsuranceAboutValores";
import AtlantidaInsuranceAboutBroker from "./components/AtlantidaInsuranceAboutBroker";
import AtlantidaInsuranceAboutMision from "./components/AtlantidaInsuranceAboutMision";
import AtlantidaInsuranceAboutHeader from "./components/AtlantidaInsuranceAboutHeader";
import MasInformacion from "../../components/MasInformacion";
import subfooter from "../../images/subfooter31.jpeg";
import SubFooter from "../../components/SubFooter";
import RedBanner from "../../components/RedBanner";

const AtlantidaInsuranceAbout = () => {
  return (
    <>
      {/* Header */}
      <AtlantidaInsuranceAboutHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Asesoramiento con 15 años de experiencia`} />

      {/* Broker */}
      <AtlantidaInsuranceAboutBroker />

      {/* Misión */}
      <AtlantidaInsuranceAboutMision />

      {/* Valores */}
      <AtlantidaInsuranceAboutValores />

      {/* Más información */}
      <MasInformacion />

      {/* Subfooter 31 */}
      <SubFooter
        bgColor={`black`}
        title={`Tu seguro en manos expertas`}
        img={subfooter}
      />
    </>
  );
};

export default AtlantidaInsuranceAbout;
