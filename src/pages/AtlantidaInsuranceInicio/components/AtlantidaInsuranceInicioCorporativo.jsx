import solucionesEmpresas from "../../../images/soluciones-empresas.jpg";
import logoMetrics from "../../../images/metrics.png";

const AtlantidaInsuranceInicioCorporativo = () => {
  return (
    <section className="bg-tertiary-color mb-10 mt-4">
      <div className="container-page my-6">
        <div className="flex flex-col md:flex-row relative xl:justify-center justify-end items-center gap-8 py-3">
          <article className="left-0 max-w-md md:absolute static flex-1">
            <img
              decoding="async"
              loading="lazy"
              className="w-full rounded-3xl"
              src={solucionesEmpresas}
            />
          </article>

          <article className="text-secondary-color md:py-10 py-2 md:ms-36">
            <div className="flex items-center gap-6">
              <img
                className="w-24"
                decoding="async"
                loading="lazy"
                src={logoMetrics}
              />
              <h2 className="family-nunito-regular leading-[1.2] font-bold lg:text-5xl text-3xl mb-2">
                Soluciones <span className="block">para Empresas</span>
              </h2>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AtlantidaInsuranceInicioCorporativo;
