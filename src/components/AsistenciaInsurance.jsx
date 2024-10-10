import {
  ciudadResidencia,
  tipoCobertura,
  tiposDeUso,
  vehiculosDiesel,
} from "../../DB/data";
import iconSupport from "../images/user-support.png";
import { InputForm, SelectForm } from "../utils/FormUtilities";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";
import Formulario from "./Formulario";

const AsistenciaInsurance = ({ iconClassnames, versionForm = 1 }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [numberValue, setNumberValue] = useState(0);

  return (
    <section className="container-page my-14 py-14 border-y border-secondary-color/30 text-secondary-color">
      <div className="flex flex-col sm:flex-row items-center gap-16">
        <article className="flex-1">
          <img
            className={iconClassnames}
            decoding="async"
            loading="lazy"
            src={iconSupport}
          />
          <p className="text-center max-w-[8.5rem] mx-auto mt-6">
            Atención 24 horas y 7 días de la semana
          </p>
        </article>

        <article className="flex-[27%]">
          <h2 className="text-3xl mb-4">
            Para una propuesta personalizada detalla tus datos
          </h2>

          <Formulario setIsLoading={setIsLoading}>
            <div className="flex flex-col md:flex-row gap-3">
              <div className="sm:w-auto w-full flex-1">
                <InputForm
                  inputProp={{
                    required: true,
                    name: "firstlastname",
                    type: "text",
                    placeholder: "Nombres y Apellidos",
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

            <div className="flex flex-col md:flex-row gap-3">
              <div className="sm:w-auto w-full flex-1">
                <InputForm
                  inputProp={{
                    required: true,
                    name: "phone",
                    type: "number",
                    placeholder: "Número de teléfono",
                  }}
                />
              </div>

              <div className="sm:w-auto w-full flex-1">
                {versionForm === 3 ? (
                  <InputForm
                    inputProp={{
                      name: "residence_city",
                      required: true,
                      type: "text",
                      placeholder: "Ciudad de residencia",
                    }}
                  />
                ) : (
                  <SelectForm
                    selectProp={{ name: "residence_city", required: true }}
                    defaultValue={"Ciudad de residencia"}
                    options={ciudadResidencia}
                  />
                )}
              </div>
            </div>

            {/* Version Forms */}
            {versionForm === 1 && (
              <div className="flex flex-col md:flex-row gap-3">
                <div className="sm:w-auto w-full flex-1">
                  <SelectForm
                    selectProp={{ name: "coverage_type", required: true }}
                    defaultValue={"Tipo de cobertura"}
                    options={tipoCobertura}
                  />
                </div>

                <div className="sm:w-auto w-full flex-1"></div>
              </div>
            )}

            {versionForm === 2 && (
              <>
                <div className="flex flex-col md:flex-row gap-3">
                  <div className="sm:w-auto w-full flex-1">
                    <InputForm
                      inputProp={{
                        name: "exit_date",
                        required: true,
                        placeholder: "Fecha de salida",
                        type: "text",
                      }}
                    />
                  </div>

                  <div className="sm:w-auto w-full flex-1">
                    <InputForm
                      inputProp={{
                        name: "return_date",
                        required: true,
                        placeholder: "Fecha de retorno",
                        type: "text",
                      }}
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-3">
                  <div className="sm:w-auto w-full flex-1">
                    <InputForm
                      inputProp={{
                        name: "fechaSalida",
                        required: true,
                        placeholder: "País de destino",
                        type: "text",
                      }}
                    />
                  </div>

                  <div className="sm:w-auto w-full flex-1">
                    <div className="flex  h-full items-center gap-6">
                      <h3 className="text-sm">Cantidad de personas</h3>

                      <div className="flex border rounded-md items-center">
                        <button type="button">
                          <FaMinus
                            onClick={() => setNumberValue((prev) => prev - 1)}
                            className="px-3 bg-primary-color text-white rounded-s-md size-9"
                          />
                        </button>
                        <h4 className="text-sm text-secondary-color px-4">
                          {numberValue}
                        </h4>
                        <button type="button">
                          <FaPlus
                            onClick={() => setNumberValue((prev) => prev + 1)}
                            className="px-3 bg-primary-color text-white rounded-e-md size-9"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {versionForm === 3 && (
              <>
                <div className="flex flex-col md:flex-row gap-3">
                  <div className="sm:w-auto w-full flex-1">
                    <InputForm
                      inputProp={{
                        name: "numeroPlaca",
                        required: true,
                        placeholder: "Número de placa",
                        type: "number",
                      }}
                    />
                  </div>

                  <div className="sm:w-auto w-full flex-1">
                    <SelectForm
                      selectProp={{ name: "tiposUso", required: true }}
                      defaultValue={"Tipos de uso"}
                      options={tiposDeUso}
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-3">
                  <div className="sm:w-auto w-full flex-1">
                    <SelectForm
                      selectProp={{ name: "vehiculosDiesel", required: true }}
                      defaultValue={"Vehículos de diésel"}
                      options={vehiculosDiesel}
                    />
                  </div>

                  <div className="sm:w-auto w-full flex-1"></div>
                </div>
              </>
            )}

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
    </section>
  );
};

export default AsistenciaInsurance;
