import AtlantidaInsuranceEventualidadHeader from "./components/AtlantidaInsuranceEventualidadHeader";
import AsistenciaInsurance from "../../components/AsistenciaInsurance";
import SociosEstrategicos from "../../components/SociosEstrategicos";
import InfoPrincipal from "../../components/InfoPrincipal";
import subfooter from "../../images/subfooter30.jpg";
import RedBanner from "../../components/RedBanner";
import SubFooter from "../../components/SubFooter";

const AtlantidaInsuranceEventualidad = () => {
  return (
    <>
      {/* Inicio */}
      <AtlantidaInsuranceEventualidadHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Soluciones para empresas`} />

      {/* Seguro de Vida */}
      <InfoPrincipal
        iconClassnames={"w-56 mx-auto"}
        title={"Responsabilidad Civil o"}
        titleSpan={
          <>
            Profesional por Daños a <span className="sm:block inline">Terceros</span>
          </>
        }
        description={`Protege tu patrimonio y evita pérdidas financieras importantes. Resuelve los daños que sufran tus
        inmuebles, herramientas, mercancía o terceras personas.`}
        icon={"https://dummyimage.com/600x400/000/fff"}
      />

      {/* Asistencia */}
      <AsistenciaInsurance
        iconClassnames={"w-56 mx-auto"}
        icon={"https://dummyimage.com/600x400/000/fff"}
        versionForm={1}
      />

      {/* Socios Estratégicos */}
      <SociosEstrategicos />

      {/* Subfooter */}
      <SubFooter
        bgColor={`black`}
        title={`Responsabilidad cubierta, problemas resueltos`}
        img={"https://dummyimage.com/600x400/000/fff"}
      />
    </>
  );
};

export default AtlantidaInsuranceEventualidad;
