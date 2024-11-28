import AtlantidaInsuranceAboutValores from "./components/AtlantidaInsuranceAboutValores";
import AtlantidaInsuranceAboutBroker from "./components/AtlantidaInsuranceAboutBroker";
import AtlantidaInsuranceAboutMision from "./components/AtlantidaInsuranceAboutMision";
import AtlantidaInsuranceAboutHeader from "./components/AtlantidaInsuranceAboutHeader";
import MasInformacion from "../../components/MasInformacion";
import subfooter from "../../images/subfooter31.jpeg";
import SubFooter from "../../components/SubFooter";
import RedBanner from "../../components/RedBanner";
import { tipoCobertura } from "../../../DB/data";

const AtlantidaInsuranceAbout = () => {
  return (
    <>
      {/* Header */}
      <AtlantidaInsuranceAboutHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Seguros que cuidan de ti`} />

      {/* Broker */}
      <AtlantidaInsuranceAboutBroker />

      {/* Misión */}
      <AtlantidaInsuranceAboutMision />

      {/* Valores */}
      <AtlantidaInsuranceAboutValores />

      {/* Más información */}
      <MasInformacion versionCoverageType={tipoCobertura[1]} />

      {/* Subfooter 31 */}
      <SubFooter
        bgColor={`black`}
        title={`Tu cobertura en manos expertas`}
        img={subfooter}
      />
    </>
  );
};

export default AtlantidaInsuranceAbout;
