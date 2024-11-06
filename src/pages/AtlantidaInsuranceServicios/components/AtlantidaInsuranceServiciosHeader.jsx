import headerPrev from "../../../images/servicios-header.png";

const AtlantidaInsuranceProductosHeader = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page flex flex-col lg:flex-row  items-center gap-3">
        <article className="text-secondary-color lg:py-0 py-8">
          <h1 className="text-4xl sm:text-5xl leading-10 md:mb-8 mb-0">
            Seguridad para un
            <span className="font-[700] sm:block inline">futuro protegido</span>
          </h1>

          {/* We use 'a' tag because its more optimized for every device */}
          <a
            className="btn-normal button-red-primary"
            href={"tel:+593985376977"}
          >
            Cotiza con nosotros
          </a>
        </article>

        <article className="pt-0 md:pt-5 mx-auto max-w-2xl">
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

export default AtlantidaInsuranceProductosHeader;
