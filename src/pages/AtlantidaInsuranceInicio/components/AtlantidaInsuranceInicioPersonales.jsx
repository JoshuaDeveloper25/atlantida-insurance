import logoPersonas from "../../../images/users.png";
import solucionesPersonas from "../../../images/soluciones-personas.jpg";

const AtlantidaInsuranceInicioPersonales = () => {
  return (
    <section className="bg-tertiary-color sm:mt-24 sm:mb-18 mb-10 mt-4">
      <div className="container-page relative my-6">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center md:gap-3 gap-0">
          <article className="flex items-center gap-8 text-secondary-color md:py-10 py-2">
            <img
              className="w-24"
              decoding="async"
              loading="lazy"
              src={logoPersonas}
            />
            <h2 className="family-nunito-regular leading-[1.2] font-bold lg:text-5xl text-3xl mb-2">
              Soluciones <span className="block">para Personas</span>
            </h2>
          </article>

          <article className="max-w-md md:absolute static right-0 -top-16 flex-1 sm:mt-0 mt-2 pt-3">
            <img
              decoding="async"
              loading="lazy"
              className="w-full rounded-3xl"
              src={solucionesPersonas}
            />
          </article>
        </div>
      </div>
    </section>
  );
};

export default AtlantidaInsuranceInicioPersonales;
