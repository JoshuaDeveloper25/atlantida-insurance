import registerBackground from "../../images/registrarse-background.png";
import { InputForm, SelectForm } from "../../utils/FormUtilities";
import { direcciones, numerosTelefono } from "../../../DB/data";
import { Link } from "react-router-dom";
import Formulario from "../../components/Formulario";
import { useState } from "react";

const AtlantidaInsuranceRegistrarse = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main>
      <section className="container-page text-secondary-color">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1">
            <img
              src={registerBackground}
              loading="lazy"
              decoding="async"
              className="rounded-md"
            />
          </div>

          <div className="flex-[25%] w-full">
            <Formulario
              templateVersionForm={
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID_VERSION6_7
              }
              setIsLoading={setIsLoading}
            >
              <h2 className="font-[700] text-4xl mb-10">Registrarse ahora</h2>
              <div className="flex flex-col md:flex-row gap-3 mb-4">
                <div className="sm:w-auto w-full flex-1">
                  <InputForm
                    inputProp={{
                      required: true,
                      name: "firstnames",
                      type: "text",
                      placeholder: "Nombres",
                    }}
                  />
                </div>

                <div className="sm:w-auto w-full flex-1">
                  <InputForm
                    inputProp={{
                      required: true,
                      name: "card_id",
                      type: "text",
                      placeholder: "Cédula*",
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-3 mb-4">
                <div className="sm:w-auto w-full flex-1">
                  <InputForm
                    inputProp={{
                      required: true,
                      name: "sur_names",
                      type: "text",
                      placeholder: "Apellidos",
                    }}
                  />
                </div>

                <div className="sm:w-auto w-full flex-1">
                  <SelectForm
                    selectProp={{ name: "address", required: true }}
                    defaultValue={"Dirección*"}
                    options={direcciones}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-3 mb-4">
                <div className="sm:w-auto w-full flex-1">
                  <SelectForm
                    selectProp={{ name: "phone", required: true }}
                    defaultValue={"Teléfono"}
                    options={numerosTelefono}
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

              <div className="flex flex-col md:flex-row items-center gap-3 mb-4">
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
                    className={
                      isLoading
                        ? "btn-normal btn-disabled w-full"
                        : "btn-normal button-red-primary w-full"
                    }
                  >
                    {isLoading ? "Enviando..." : "Cotiza con nosotros"}
                  </button>
                </div>
              </div>

              <div className="text-end">
                <p>
                  ¿Ya tienes una cuenta?{" "}
                  <Link to={"#"} className=" text-primary-color">
                    Ingresar
                  </Link>
                </p>
              </div>
            </Formulario>
          </div>
        </div>
      </section>

      <div className="bg-primary-color w-full h-3"></div>
    </main>
  );
};

export default AtlantidaInsuranceRegistrarse;
