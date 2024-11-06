import familia from "../../../images/viaja-confianza-header.png";
import { LinkEmailHardCoded } from "../../../utils/LinkSending";

const AtlantidaInsuranceProtegeSaludHeader = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page flex flex-col lg:flex-row  items-center gap-3">
        <article className="text-secondary-color lg:py-0 py-8">
          <h1 className="text-4xl sm:text-5xl leading-10 md:mb-8 mb-0">
            Viaja con confianza,{" "}
            <span className="sm:block inline font-[700]">viaja asegurado</span>
          </h1>

          <div className="mt-3">
            <LinkEmailHardCoded />
          </div>
        </article>

        <article className="pt-0 md:pt-5 mx-auto max-w-3xl">
          <img
            decoding="async"
            loading="lazy"
            className="w-full"
            src={familia}
            alt={"Imagen del Header"}
          />
        </article>
      </div>
    </section>
  );
};

export default AtlantidaInsuranceProtegeSaludHeader;
