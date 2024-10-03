import mujerHeader from "../../../images/insurance-recursos.png";

const AtlantidaInsuranceRecursosHeader = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page flex flex-col lg:flex-row  items-center gap-3">
        <article className="text-secondary-color lg:py-0 py-8">
          <h1 className="text-4xl sm:text-5xl leading-10 md:mb-8 mb-0">
            Expertos en <span className="font-[700]">proteger</span>{" "}
            <span className="font-[700] sm:block inline">
              tu tranquilidad y{" "}
            </span>
            <span className="font-[700]">patrimonio</span>
          </h1>
        </article>

        <article className="pt-0 md:pt-5 mx-auto max-w-4xl">
          <img
            decoding="async"
            loading="lazy"
            className="w-full"
            src={'https://dummyimage.com/600x400/000/fff'}
            alt={"Imagen del Header"}
          />
        </article>
      </div>
    </section>
  );
};

export default AtlantidaInsuranceRecursosHeader;
