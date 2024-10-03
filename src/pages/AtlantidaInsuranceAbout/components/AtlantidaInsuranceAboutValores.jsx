import { valores } from "../../../../DB/data";

const AtlantidaInsuranceAboutValores = () => {
  return (
    <section className="container-page my-10">
      <h2 className="text-primary-color family-nunito-black text-3xl md:py-8">
        Valores
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
        {valores?.map((valor, index) => (
          <article
            key={index}
            className="py-4 rounded-2xl text-secondary-color/95 col-span-1"
          >
            <div className="bg-primary-color h-2 w-14"></div>
            <h3 className="family-nunito-black pt-3">{valor?.title}</h3>
            <p className="text-secondary-color">{valor?.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AtlantidaInsuranceAboutValores;
