import { InputForm, SelectForm } from "../utils/FormUtilities";
import { ciudadResidencia, tipoCobertura } from "../../DB/data";

const AsistenciaInsurance = ({ icon, iconClassnames }) => {
  return (
    <section className="container-page my-14 py-14 border-y border-secondary-color/30 text-secondary-color">
      <div className="flex flex-col sm:flex-row items-center gap-16">
        <article className="flex-1">
          <img
            className={iconClassnames}
            decoding="async"
            loading="lazy"
            src={icon}
          />
          <p className="text-center max-w-[8.5rem] mx-auto mt-6">
            Atención 24 horas y 7 días de la semana
          </p>
        </article>

        <article className="flex-[27%]">
          <h2 className="text-3xl mb-4">
            Para una propuesta personalizada detalla tus datos
          </h2>
          <form className="space-y-3">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="sm:w-auto w-full flex-1">
                <InputForm
                  inputProp={{
                    required: true,
                    name: "nombreCompleto",
                    type: "text",
                    placeholder: "Nombres y Apellidos",
                  }}
                />
              </div>

              <div className="sm:w-auto w-full flex-1">
                <InputForm
                  inputProp={{
                    required: true,
                    name: "email",
                    type: "email",
                    placeholder: "Email",
                  }}
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
                    placeholder: "Número de teléfono",
                  }}
                />
              </div>

              <div className="sm:w-auto w-full flex-1">
                <SelectForm
                  selectProp={{ name: "ciudadResidencia", required: true }}
                  defaultValue={"Ciudad de residencia"}
                  options={ciudadResidencia}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <div className="sm:w-auto w-full flex-1">
                <SelectForm
                  selectProp={{ name: "tipoCobertura", required: true }}
                  defaultValue={"Tipo de cobertura"}
                  options={tipoCobertura}
                />
              </div>

              <div className="sm:w-auto w-full flex-1"></div>
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
    </section>
  );
};

export default AsistenciaInsurance;
