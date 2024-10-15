import { coberturasEmpresas } from "../../../../DB/data";
import { Link } from "react-router-dom";

const AtlantidaInsuranceInicioCoberturasEmpresas = () => {
  return (
    <section className="container-page sm:my-24">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 lg:place-items-stretch place-items-center md:gap-10 gap-2">
        {coberturasEmpresas?.map((coberturaEmpresa, id) => (
          <article
            key={id}
            className="w-56 py-4 rounded-2xl text-secondary-color/95 col-span-1"
          >
            <img
              src={coberturaEmpresa?.image}
              loading="lazy"
              decoding="async"
              className={`${
                coberturaEmpresa?.imageClassname
                  ? coberturaEmpresa?.imageClassname
                  : "w-16 h-16 object-contain"
              }`}
            />

            <h3 className="family-nunito-regular text-xl py-1">
              {coberturaEmpresa?.title}
            </h3>

            <Link to={coberturaEmpresa?.href} className="text-primary-color">
              {coberturaEmpresa?.link} {">"}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AtlantidaInsuranceInicioCoberturasEmpresas;
