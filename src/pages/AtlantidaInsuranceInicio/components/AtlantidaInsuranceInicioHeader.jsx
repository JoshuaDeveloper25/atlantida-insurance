import hombreHeader from "../../../images/insurance-inicio.png";

const AtlantidaInsuranceInicioHeader = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page ">
        <div className="flex flex-col lg:flex-row  items-center gap-3">
          <article className="text-secondary-color lg:py-0 py-8">
            <h1 className="text-4xl sm:text-5xl leading-10 md:mb-8 mb-0">
              <span className="">
                Asesoramiento{" "}
                <span className="sm:block inline">
                  integral y{" "}
                  <span className="family-nunito-black">soluciones</span>
                </span>
              </span>{" "}
              <span className="family-nunito-black ">en seguros </span>
            </h1>
            <button className="btn-normal button-red-primary" type="button">
              Cotiza con nosotros
            </button>
          </article>

          <article className="pt-0 md:pt-5 mx-auto max-w-2xl">
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
