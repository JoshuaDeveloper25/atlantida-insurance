import headerPrev from "../../../images/proteccion-personaliza-header.png";
import { LinkEmailHardCoded } from "../../../utils/LinkSending";

const AtlantidaInsuranceProteccionCustomHeader = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page flex flex-col lg:flex-row  items-center gap-3">
        <article className="text-secondary-color lg:py-0 py-8">
          <h1 className="text-4xl sm:text-5xl leading-10 md:mb-8 mb-0">
            Protección
            <span className="sm:block inline font-[700]">
              personalizada
            </span>{" "}
          </h1>

          <div className="mt-3">
            <LinkEmailHardCoded />
          </div>
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

export default AtlantidaInsuranceProteccionCustomHeader;
