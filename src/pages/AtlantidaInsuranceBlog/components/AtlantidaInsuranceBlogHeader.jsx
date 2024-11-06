import { LinkEmailHardCoded } from "../../../utils/LinkSending";
import hombreHeader from "../../../images/blog-header.png";

const AtlantidaInsuranceInicioHeader = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page ">
        <div className="flex flex-col lg:flex-row  items-center gap-3">
          <article className="text-secondary-color lg:py-0 py-8">
            <h1 className="text-4xl sm:text-5xl leading-10 mb-4">
              Tu <span className="font-[700]">seguridad</span>{" "}
              <span className="sm:block inline">
                <span className="font-[700]">integral</span>, cubriendo
              </span>{" "}
              todos los frentes
            </h1>
      
            <LinkEmailHardCoded />
          </article>

          <article className="pt-0 md:pt-5 mx-auto max-w-xl">
            <img
              decoding="async"
              loading="lazy"
              className="w-full"
              src={hombreHeader}
              alt={"Imagen del Header"}
            />
          </article>
        </div>
      </div>
    </section>
  );
};

export default AtlantidaInsuranceInicioHeader;
