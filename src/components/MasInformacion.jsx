import { tipoCobertura } from "../../DB/data";

const MasInformacion = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page py-14">
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <article className="flex-1 text-center">
            <h2 className="text-secondary-color text-3xl">
              ¿Necesitas más información?
            </h2>
            <p className="text-gray-400 mt-1.5">
              Déjanos tus datos y un asesor se{" "}
              <span className="md:block inline">contactará contigo pronto</span>
            </p>
          </article>

          <article className="flex-1 text-secondary-color">
            <form className="space-y-3">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1">
                  <input
                    className="bg-white border w-full rounded-md outline-none py-2 px-3"
                    type="text"
                    placeholder="Nombre y Apellido"
                  />
                </div>

                <div className="flex-1">
                  <input
                    className="bg-white border w-full rounded-md outline-none py-2 px-3"
                    type="number"
                    placeholder="Cédula"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1">
                  <input
                    className="bg-white border w-full rounded-md outline-none py-2 px-3 "
                    type="text"
                    placeholder="Ciudad de residencia"
                  />
                </div>

                <div className="flex-1">
                  <select
                    className="bg-white border w-full rounded-md outline-none py-2 px-3"
                    type="text"
                    placeholder="Email"
                  >
                    <option value="">Tipo de cobertura</option>
                    {tipoCobertura?.map((tipoCobertura, index) => (
                      <option key={index} value={tipoCobertura?.tipo}>
                        {tipoCobertura?.tipo}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1">
                  <input
                    className="bg-white border w-full rounded-md outline-none py-2 px-3 "
                    type="number"
                    placeholder="Teléfono"
                  />
                </div>

                <div className="flex-1">
                  <input
                    className="bg-white border w-full rounded-md outline-none py-2 px-3"
                    type="email"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-3">
                <label className="flex-1">
                  <div className="flex">
                    <input type="checkbox" className="me-2" />
                    <p>
                      Acepto
                      <span className="text-primary-color ms-1">
                        Términos y Condiciones
                      </span>
                    </p>
                  </div>
                </label>

                <div className="flex-1">
                  <button
                    type="submit"
                    className="btn-normal button-red-primary w-full"
                  >
                    Cotiza con nosotros
                  </button>
                </div>
              </div>
            </form>
          </article>
        </div>
      </div>
    </section>
  );
};

export default MasInformacion;
