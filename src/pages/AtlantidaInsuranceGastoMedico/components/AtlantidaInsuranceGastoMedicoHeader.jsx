import headerPrev from "../../../images/gasto-medico-header.png";

const AtlantidaInsuranceGastoMedicoHeader = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page flex flex-col lg:flex-row  items-center gap-3">
        <article className="text-secondary-color lg:py-0 py-8">
          <h1 className="text-4xl sm:text-5xl leading-10 md:mb-8 mb-0">
            Administra tus{" "}
            <span className="sm:block inline font-[700]">gastos médicos</span>{" "}
            <span className="font-[700]">importantes</span>
          </h1>
          <button className="btn-normal button-red-primary mt-3" type="button">
            Cotiza con nosotros
          </button>
        </article>

        <article className="pt-0 md:pt-5 mx-auto max-w-3xl">
          <img
            decoding="async"
            loading="lazy"
            className="w-full"
            src={headerPrev}
            alt={"Imagen del Header"}
          />
        </article>
      </div>
    </section>
  );
};

export default AtlantidaInsuranceGastoMedicoHeader;
