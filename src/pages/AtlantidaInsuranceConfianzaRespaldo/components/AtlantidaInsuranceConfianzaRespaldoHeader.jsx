import hombreHeader from "../../../images/confianza-respaldo-header.png";
import { LinkEmailHardCoded } from "../../../utils/LinkSending";

const AtlantidaInsuranceConfianzaRespaldoHeader = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page flex flex-col lg:flex-row  items-center gap-3">
        <article className="text-secondary-color lg:py-0 py-8">
          <h1 className="text-4xl sm:text-5xl leading-10 md:mb-8 mb-0">
            <span className="font-[700]">Confianza</span> y respaldo en
            <span className="sm:block inline">
              cada <span className="font-[700]">decisión</span>
            </span>
            <span className="font-[700]">empresarial</span>
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
            src={hombreHeader}
            alt={"Imagen del Header"}
          />
        </article>
      </div>
    </section>
  );
};

export default AtlantidaInsuranceConfianzaRespaldoHeader;
