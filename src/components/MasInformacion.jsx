import { InputForm, SelectForm } from "../utils/FormUtilities";
import { tipoCobertura } from "../../DB/data";
import { useState } from "react";
import Formulario from "./Formulario";

const MasInformacion = () => {
  const [isLoading, setIsLoading] = useState(false);

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
            <Formulario
              templateVersionForm={
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID_VERSION2
              }
              setIsLoading={setIsLoading}
            >
              <div className="flex flex-col md:flex-row gap-3">
                <div className="sm:w-auto w-full flex-1">
                  <InputForm
                    inputProp={{
                      required: true,
                      name: "firstlastname",
                      type: "text",
                      placeholder: "Nombre y Apellido",
                    }}
                  />
                </div>

                <div className="sm:w-auto w-full flex-1">
                  <InputForm
                    inputProp={{
                      required: true,
                      name: "card_id",
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
                      name: "residence_city",
                      type: "text",
                      placeholder: "Ciudad de residencia",
                    }}
                  />
                </div>

                <div className="sm:w-auto w-full flex-1">
                  <SelectForm
                    selectProp={{ name: "coverage_type", required: true }}
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
                      name: "phone",
                      type: "number",
                      placeholder: "Teléfono",
                    }}
                  />
                </div>

                <div className="sm:w-auto w-full flex-1">
                  <InputForm
                    inputProp={{
                      required: true,
                      name: "email_id",
                      type: "email",
                      placeholder: "Email",
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-3">
                <label className="sm:w-auto w-full flex-1">
                  <div className="flex">
                    <input type="checkbox" required className="me-2" />
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
                    disabled={isLoading}
                    className={`${
                      isLoading
                        ? "btn-normal btn-disabled w-full"
                        : "btn-normal button-red-primary w-full"
                    } `}
                  >
                    {isLoading ? "Enviando..." : "Cotiza con nosotros"}
                  </button>
                </div>
              </div>
            </Formulario>
          </article>
        </div>
      </div>
    </section>
  );
};

export default MasInformacion;
