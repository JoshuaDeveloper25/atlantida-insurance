import AtlantidaInsuranceInicioCoberturasEmpresas from "./components/AtlantidaInsuranceInicioCoberturasEmpresas";
import AtlantidaInsuranceInicioCoberturasPersonas from "./components/AtlantidaInsuranceInicioCoberturasPersonas";
import AtlantidaInsuranceInicioCorporativo from "./components/AtlantidaInsuranceInicioCorporativo";
import AtlantidaInsuranceInicioPersonales from "./components/AtlantidaInsuranceInicioPersonales";
import AtlantidaInsuranceInicioClientes from "./components/AtlantidaInsuranceInicioClientes";
import AtlantidaInsuranceInicioHeader from "./components/AtlantidaInsuranceInicioHeader";
import MasInformacion from "../../components/MasInformacion";
import subfooter from "../../images/subfooter29.webp";
import RedBanner from "../../components/RedBanner";
import SubFooter from "../../components/SubFooter";
import { tipoCobertura } from "../../../DB/data";

const AtlantidaInsuranceInicio = () => {
  return (
    <>
      {/* Inicio */}
      <AtlantidaInsuranceInicioHeader />

      {/* Banner Rojo */}
      <RedBanner
        bannerTitle={`Seguros para la vida, confianza para siempre.`}
      />

      {/* Personales */}
      <AtlantidaInsuranceInicioPersonales />

      {/* Coberturas */}
      <AtlantidaInsuranceInicioCoberturasPersonas />

      {/* Soluciones para empresas */}
      <AtlantidaInsuranceInicioCorporativo />

      {/* Empresas */}
      <AtlantidaInsuranceInicioCoberturasEmpresas />

      {/* Clientes */}
      <AtlantidaInsuranceInicioClientes />

      {/* Más información */}
      <MasInformacion versionCoverageType={tipoCobertura[1]} />

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
