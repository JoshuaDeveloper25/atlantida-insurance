import hombreHeader from "../../../images/insurance-productos.png";
import { LinkTel } from "../../../utils/LinkSending";

const AtlantidaInsuranceProductosHeader = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page flex flex-col lg:flex-row  items-center gap-3">
        <article className="text-secondary-color lg:py-0 py-8">
          <h1 className="text-4xl sm:text-5xl leading-10 md:mb-8 mb-0">
            <span className="font-[700]">Asegurar tu vida</span> es
            <span className="sm:block inline">proteger a tu familia y </span>
            <span>tu patrimonio</span>
          </h1>

          <LinkTel />
        </article>

        <article className="pt-0 md:pt-5 mx-auto max-w-4xl">
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

export default AtlantidaInsuranceProductosHeader;
