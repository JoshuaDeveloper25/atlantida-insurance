import {
  InputForm,
  SelectForm,
  TextareaForm,
} from "../../../utils/FormUtilities";
import { emails } from "../../../../DB/data";

const AtlantidaInsuranceContactoHeader = () => {
  return (
    <section className="container-page my-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center items-start md:gap-6 gap-0 md:max-w-none max-w-lg mx-auto">
        <article className="flex-[45%] lg:w-full w-auto text-secondary-color lg:py-8 py-3">
          <h1 className="text-secondary-color text-[1.8rem] mb-3 leading-[1.3] font-bold family-nunito-semibold">
            Déjanos tus datos y un asesor se contactará contigo pronto
          </h1>

          <form className="space-y-5">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <InputForm
                  inputProp={{
                    required: true,
                    name: "nombre",
                    type: "text",
                    placeholder: "Nombre",
                  }}
                />
              </div>

              <div className="flex-1">
                <InputForm
                  inputProp={{
                    required: true,
                    name: "apellido",
                    type: "text",
                    placeholder: "Apellidos",
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <InputForm
                  inputProp={{
                    required: true,
                    name: "telefono",
                    type: "text",
                    placeholder: "Teléfono",
                  }}
                />
              </div>

              <div className="flex-1">
                <SelectForm
                  selectProp={{ name: "email", required: true }}
                  defaultValue={"Email"}
                  options={emails}
                />
              </div>
            </div>

            <TextareaForm
              textareaProp={{
                placeholder: "Mensaje",
                required: true,
                name: "mensaje",
              }}
            />

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

        <article className="flex-1 bg-tertiary-color mt-5 p-5 rounded-md">
          <h3 className="text-secondary-color text-xl family-nunito-black">
            Nuestras oficinas
          </h3>

          <div>
            <h5 className="text-secondary-color font-bold mt-5 mb-2 family-nunito-regular">
              Quito
            </h5>
            <ul className="text-secondary-color">
              <li>La Floresta</li>
              <li> Andalucía 324 y Francisco Galavis</li>
              <li> Edificio Atlántida</li>
              <li> P.O.Box 170525</li>
              <li>+593 9 9954 7788</li>
            </ul>
          </div>

          <div>
            <h5 className="text-secondary-color font-bold mt-5 mb-2 family-nunito-regular">
              Guayaquil
            </h5>
            <ul className="text-secondary-color">
              <li>Kennedy Norte, Av. Francisco de</li>
              <li>Orellana, Mz. 111 - Solar 1</li>
              <li> Edificio World Trade Center, Torre A,is</li>
              <li> Piso 10, Oficina 1002</li>
              <li> P.O.Box 090112</li>
              <li>+593 9 8537 6977</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default AtlantidaInsuranceContactoHeader;
