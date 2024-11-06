import SociosEstrategicosCarousel from "./SociosEstrategicosCarousel";

const SociosEstrategicos = () => {
  return (
    <section className="container-page my-7 py-10">
      <article className="mb-5">
        <h2 className="text-2xl text-secondary-color family-nunito-black">
          Socios Estratégicos
        </h2>
      </article>

      <article>
        <SociosEstrategicosCarousel />
      </article>
    </section>
  );
};

export default SociosEstrategicos;
