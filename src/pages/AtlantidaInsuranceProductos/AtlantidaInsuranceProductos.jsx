import AtlantidaInsuranceProductosHeader from "./components/AtlantidaInsuranceProductosHeader";
import AsistenciaInsurance from "../../components/AsistenciaInsurance";
import SociosEstrategicos from "../../components/SociosEstrategicos";
import InfoPrincipal from "../../components/InfoPrincipal";
import RedBanner from "../../components/RedBanner";
import SubFooter from "../../components/SubFooter";

import subfooter from "../../images/productos-subfooter.jpg";
import balloonHeart from "../../images/balloon-heart.png";

const AtlantidaInsuranceProductos = () => {
  return (
    <>
      {/* Inicio */}
      <AtlantidaInsuranceProductosHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Soluciones para personas`} />

      {/* Seguro de Vida */}
      <InfoPrincipal
        iconClassnames={"w-24 mx-auto"}
        title={"Cobertura de Vida Individual"}
        description={`Adquirir una póliza de vida garantiza al Asegurado la tranquilidad de darle el respaldo a su familia en
        caso de fallecimiento por accidente o enfermedad. En Atlántida Insurance te presentamos la póliza que
        este a la medida de tus necesidades y tu patrimonio`}
        icon={balloonHeart}
      />

      {/* Asistencia */}
      <AsistenciaInsurance iconClassnames={"w-24 mx-auto"} />

      {/* Socios Estratégicos */}
      <SociosEstrategicos />

      {/* Subfooter 30 */}
      <SubFooter
        bgColor={`black`}
        title={`Tu mejor elección en coberturas`}
        img={subfooter}
      />
    </>
  );
};

export default AtlantidaInsuranceProductos;
