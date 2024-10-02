import AtlantidaInsuranceInicioCorporativo from "./components/AtlantidaInsuranceInicioCorporativo";
import AtlantidaInsuranceInicioPersonales from "./components/AtlantidaInsuranceInicioPersonales";
import AtlantidaInsuranceInicioSeguros1 from "./components/AtlantidaInsuranceInicioSeguros1";
import AtlantidaInsuranceInicioSeguros2 from "./components/AtlantidaInsuranceInicioSeguros2";
import AtlantidaInsuranceInicioClientes from "./components/AtlantidaInsuranceInicioClientes";
import AtlantidaInsuranceInicioHeader from "./components/AtlantidaInsuranceInicioHeader";
import MasInformacion from "../../components/MasInformacion";
import subfooter from "../../images/subfooter29.webp";
import RedBanner from "../../components/RedBanner";
import SubFooter from "../../components/SubFooter";

const AtlantidaInsuranceInicio = () => {
  return (
    <>
      {/* Inicio */}
      <AtlantidaInsuranceInicioHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Con más de 15 años de experiencia`} />

      {/* Personales */}
      <AtlantidaInsuranceInicioPersonales />

      {/* Seguros 1 */}
      <AtlantidaInsuranceInicioSeguros1 />

      {/* Corporativo */}
      <AtlantidaInsuranceInicioCorporativo />

      {/* Seguros 2 */}
      <AtlantidaInsuranceInicioSeguros2 />

      {/* Clientes */}
      <AtlantidaInsuranceInicioClientes />

      {/* Más información */}
      <MasInformacion />

      {/* Subfooter 29 */}
      <SubFooter
        bgColor={`black`}
        title={`Juntos lo hacemos posible`}
        img={subfooter}
      />

    </>
  );
};

export default AtlantidaInsuranceInicio;
