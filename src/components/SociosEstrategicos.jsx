import { sociosEstrategicos } from "../../DB/data";
import { Link } from "react-router-dom";

const SociosEstrategicos = () => {
  return (
    <section className="container-page my-7 py-10">
      <article className="mb-5">
        <h2 className="text-2xl text-secondary-color family-nunito-black">
          Socios Estratégicos
        </h2>
      </article>

      <div className="grid md:grid-cols-5 grid-cols-1 gap-8">
        {sociosEstrategicos?.map((socioEstraategico, index) => (
          <Link key={index} to={socioEstraategico?.url}>
            <img
              loading="lazy"
              decoding="async"
              src={socioEstraategico?.image}
              className="w-32 h-20  object-contain flex justify-center items-center"
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SociosEstrategicos;
