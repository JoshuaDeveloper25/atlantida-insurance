import logoAtlantidaInsurance from "../images/nuestraempresa7.png";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { TECollapse } from "tw-elements-react";
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";

const FooterAtlantidaInsurance = () => {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };

  return (
    <footer className="text-secondary-color">
      <div className="container-page py-8 px-2">
        {/* Footer Desktop */}
        <div className="md:flex hidden">
          <div className="flex-1">
            <div className="flex gap-14 items-end">
              <img
                src={logoAtlantidaInsurance}
                className="w-56"
                loading="lazy"
                decoding="async"
              />

              <h4>
                Quiero hablar con un asesor{" "}
                <span className="block font-[700]">
                  0999547788 | 0985376977
                </span>
              </h4>
            </div>
          </div>

          <div className="flex-1 border-s border-gray-300 ps-6">
            <div className="flex justify-between items-end h-full">
              <div>
                <h4>
                  Quito y Guayaquil{" "}
                  <span className="block font-[700]">info@insuratlan.com</span>
                </h4>
              </div>
              <div>
                <button
                  className="bg-primary-color text-white rounded-md p-1 me-3"
                  type="button"
                >
                  <FaInstagram size={24} />
                </button>

                <button
                  className="bg-primary-color text-white rounded-md p-1"
                  type="button"
                >
                  <FaLinkedinIn size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex hidden flex-col sm:flex-row gap-6 mt-10 sm:pb-0 pb-10 pt-10 border-t border-t-gray-300">
          <div className="flex-1">
            <h3 className="font-[700] text-black mb-6">Quito</h3>
            <p>
              La Floresta. Andalucía 324 y Francisco Galavis.{" "}
              <span className="block">Edificio Atlántida. P.O. Box 170525</span>
            </p>
          </div>

          <div className="flex-1">
            <h3 className="font-[700] text-black mb-6">Guayaquil</h3>
            <p>
              Kennedy Norte, Av. Francisco de Orellana, Mz. 111 - Solar 1.
              <span className="block">
                Edificio World Trade Center, Torre A.
              </span>
            </p>
          </div>
        </div>

        {/* Footer Responsive */}
        <div className="md:hidden flex">
          <img
            src={logoAtlantidaInsurance}
            className="w-56 mx-auto"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="md:hidden rounded-none border border-l-0 border-r-0  mt-6">
          <h2 className="mb-0" id="comunicacionSoporte">
            <button
              className={`${
                activeElement === "comunicacionSoporte" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(0,0,0,0.5)]`
              } group relative flex w-full items-center rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("comunicacionSoporte")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Comunicación y Soporte
              <span
                className={`${
                  activeElement === "comunicacionSoporte"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>

          <TECollapse
            show={activeElement === "comunicacionSoporte"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div>
              <h4>
                Quiero hablar con un asesor{" "}
                <span className="block font-[700]">
                  0999547788 | 0985376977
                </span>
              </h4>
            </div>

            <div className="my-2.5">
              <h4>
                Quito y Guayaquil{" "}
                <span className="block font-[700]">info@insuratlan.com</span>
              </h4>
            </div>

            <div>
              <button
                className="bg-primary-color text-white rounded-md p-1 me-3"
                type="button"
              >
                <FaInstagram size={24} />
              </button>

              <button
                className="bg-primary-color text-white rounded-md p-1"
                type="button"
              >
                <FaLinkedinIn size={24} />
              </button>
            </div>
          </TECollapse>

          <h2 className="mb-0" id="direccion">
            <button
              className={`${
                activeElement === "direccion" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(0,0,0,0.5)]`
              } group relative flex w-full items-center rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("direccion")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Dirección
              <span
                className={`${
                  activeElement === "direccion"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>

          <TECollapse
            show={activeElement === "direccion"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div>
              <p>
                <IoLocation className="inline align-sub" /> Quito
              </p>
              <p className="text-sm font-[100]">
                La Floresta. Andalucía 324 y Francisco Galavis. Edificio
                Atlántida. P.O. Box 170525
              </p>
            </div>

            <div className="mt-5">
              <p>
                <IoLocation className="inline align-sub" /> Guayaquil
              </p>
              <p className="text-sm font-[100]">
                Kennedy Norte, Av. Francisco de Orellana, Mz. 111 - Solar 1.
                Edificio World Trade Center, Torre A.
              </p>
            </div>
          </TECollapse>
        </div>
      </div>

      {/* FOOTER de Todos los derechos reservados */}
      <div className="bg-primary-color text-white py-5">
        <div className="container-page px-2">
          <div className="flex flex-col md:flex-row space-y-2 gap-2 items-center justify-between">
            <Link className="family-nunito-semibold" to={"#"}>
              Política de Privacidad
            </Link>

            <p className="text-center">
              2024 Atlántida Insurance | Todos los derechos reservados
            </p>

            <button
              className="rounded-md px-2 py-1 inline-block bg-white/20"
              type="button"
            >
              <IoIosArrowDown className="inline-block" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAtlantidaInsurance;
