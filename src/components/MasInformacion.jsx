import { InputForm, SelectForm } from "../utils/FormUtilities";
import { tipoCobertura } from "../../DB/data";

const MasInformacion = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page py-14">
        <div className="flex flex-col sm:flex-row sm:items-center items-stretch gap-5">
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
                <div className="sm:w-auto w-full flex-1">
                  <InputForm
                    inputProp={{
                      required: true,
                      name: "nombreCompleto",
                      type: "text",
                      placeholder: "Nombre y Apellido",
                    }}
                  />
                </div>

                <div className="sm:w-auto w-full flex-1">
                  <InputForm
                    inputProp={{
                      required: true,
                      name: "cedula",
                      type: "number",
                      placeholder: "Cédula",
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-3">
                <div className="sm:w-auto w-full flex-1">
                  <InputForm
                    inputProp={{
                      required: true,
                      name: "ciudadResidencia",
                      type: "text",
                      placeholder: "Ciudad de residencia",
                    }}
                  />
                </div>

                <div className="sm:w-auto w-full flex-1">
                  <SelectForm
                    selectProp={{ name: "tipoCobertura", required: true }}
                    defaultValue={"Tipo de cobertura"}
                    options={tipoCobertura}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-3">
                <div className="sm:w-auto w-full flex-1">
                  <InputForm
                    inputProp={{
                      required: true,
                      name: "numeroTelefono",
                      type: "number",
                      placeholder: "Teléfono",
                    }}
                  />
                </div>

                <div className="sm:w-auto w-full flex-1">
                  <InputForm
                    inputProp={{
                      required: true,
                      name: "ciudadResidencia",
                      type: "email",
                      placeholder: "Email",
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-3">
                <label className="sm:w-auto w-full flex-1">
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

                <div className="sm:w-auto w-full flex-1">
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
