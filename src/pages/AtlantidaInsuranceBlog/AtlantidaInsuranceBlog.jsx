import AtlantidaInsuranceBlogPersonales from "./components/AtlantidaInsuranceBlogPersonales";
import AtlantidaInsuranceBlogClientes from "./components/AtlantidaInsuranceBlogClientes";
import AtlantidaInsuranceBlogHeader from "./components/AtlantidaInsuranceBlogHeader";
import AtlantidaInsuranceBlogRamos from "./components/AtlantidaInsuranceBlogRamos";
import MasInformacion from "../../components/MasInformacion";
// import subfooter from "../../images/subfooter29.webp";
import RedBanner from "../../components/RedBanner";
import SubFooter from "../../components/SubFooter";

const AtlantidaInsuranceBlog = () => {
  return (
    <>
      {/* Header */}
      <AtlantidaInsuranceBlogHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Soluciones para empresas`} />

      {/* Personales */}
      <AtlantidaInsuranceBlogPersonales />

      {/* Ramos Generales */}
      <AtlantidaInsuranceBlogRamos />

      {/* Clientes */}
      <AtlantidaInsuranceBlogClientes />

      {/* Más información */}
      <MasInformacion />

      {/* Subfooter 29 */}
      <SubFooter
        bgColor={`black`}
        title={`Protección completa para cada aspecto`}
        img={"https://dummyimage.com/600x400/000/fff"}
      />
    </>
  );
};

export default AtlantidaInsuranceBlog;
