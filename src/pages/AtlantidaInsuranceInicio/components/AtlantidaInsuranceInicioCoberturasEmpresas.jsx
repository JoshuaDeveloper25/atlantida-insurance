import { coberturasEmpresas } from "../../../../DB/data";
import { Link } from "react-router-dom";

const AtlantidaInsuranceInicioCoberturasEmpresas = () => {
  return (
    <section className="container-page sm:my-24">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 lg:place-items-stretch place-items-center md:gap-10 gap-2">
        {coberturasEmpresas?.map((coberturaPersona, id) => (
          <article
            key={id}
            className="w-56 py-4 rounded-2xl text-secondary-color/95 col-span-1"
          >
            <img
              src={coberturaPersona?.image}
              loading="lazy"
              decoding="async"
              className={`${
                coberturaPersona?.imageClassname
                  ? coberturaPersona?.imageClassname
                  : "w-16 h-16 object-contain"
              }`}
            />

            <h3 className="family-nunito-regular text-xl py-1">
              {coberturaPersona?.title}
            </h3>

            <Link className="text-primary-color">
              {coberturaPersona?.link} {">"}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AtlantidaInsuranceInicioCoberturasEmpresas;
