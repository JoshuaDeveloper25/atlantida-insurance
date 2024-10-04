import { InputForm, SelectForm } from "../../utils/FormUtilities";
import { direcciones, numerosTelefono } from "../../../DB/data";
import { Link } from "react-router-dom";

const AtlantidaInsuranceRegistrarse = () => {
  return (
    <main>
      <section className="container-page text-secondary-color">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1 w-full">
            <img
              src="https://dummyimage.com/600x900/000/fff"
              loading="lazy"
              decoding="async"
              className="rounded-md"
            />
          </div>

          <form className="flex-1 w-full">
            <h2 className="font-[700] text-4xl mb-10">Registrarse ahora</h2>
            <div className="flex flex-col md:flex-row gap-3 mb-4">
              <div className="sm:w-auto w-full flex-1">
                <InputForm
                  inputProp={{
                    required: true,
                    name: "nombre",
                    type: "text",
                    placeholder: "Nombres",
                  }}
                />
              </div>

              <div className="sm:w-auto w-full flex-1">
                <InputForm
                  inputProp={{
                    required: true,
                    name: "cedula",
                    type: "email",
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
                    name: "apellido",
                    type: "text",
                    placeholder: "Apellidos",
                  }}
                />
              </div>

              <div className="sm:w-auto w-full flex-1">
                <SelectForm
                  selectProp={{ name: "ciudadResidencia", required: true }}
                  defaultValue={"Dirección*"}
                  options={direcciones}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-3 mb-4">
              <div className="sm:w-auto w-full flex-1">
                <SelectForm
                  selectProp={{ name: "telefono", required: true }}
                  defaultValue={"Teléfono*"}
                  options={numerosTelefono}
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

            <div className="flex flex-col md:flex-row items-center gap-3 mb-4">
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

            <div className="text-end">
              <p>
                ¿Ya tienes una cuenta?{" "}
                <Link to={"#"} className=" text-primary-color">
                  Ingresar
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>

      <div className="bg-primary-color w-full h-3"></div>
    </main>
  );
};

export default AtlantidaInsuranceRegistrarse;
