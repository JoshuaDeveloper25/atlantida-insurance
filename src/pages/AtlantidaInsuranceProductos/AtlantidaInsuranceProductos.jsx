import AtlantidaInsuranceProductosFeatures from "./components/AtlantidaInsuranceProductosFeatures";
import AtlantidaInsuranceProductosHeader from "./components/AtlantidaInsuranceProductosHeader";
import AtlantidaInsuranceProductosSocios from "./components/AtlantidaInsuranceProductosSocios";
import AtlantidaInsuranceProductosSeguro from "./components/AtlantidaInsuranceProductosSeguro";
import AsistenciaInsurance from "../../components/AsistenciaInsurance";
import MasInformacion from "../../components/MasInformacion";
import subfooter from "../../images/subfooter30.jpg";
import RedBanner from "../../components/RedBanner";
import SubFooter from "../../components/SubFooter";

const AtlantidaInsuranceProductos = () => {
  return (
    <>
      {/* Inicio */}
      <AtlantidaInsuranceProductosHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Seguros individuales y familiares`} />

      {/* Seguro de Vida */}
      <AtlantidaInsuranceProductosSeguro />

      {/* Features Tabs */}
      <AtlantidaInsuranceProductosFeatures />

      {/* Asistencia */}
      <AsistenciaInsurance title={"Solicita Asistencia Personalizada"} />

      {/* Socios */}
      <AtlantidaInsuranceProductosSocios />

      {/* Más información */}
      <MasInformacion />

      {/* Subfooter 30 */}
      <SubFooter
        bgColor={`black`}
        title={`Tu mejor elección en seguros`}
        img={subfooter}
      />
    </>
  );
};

export default AtlantidaInsuranceProductos;
