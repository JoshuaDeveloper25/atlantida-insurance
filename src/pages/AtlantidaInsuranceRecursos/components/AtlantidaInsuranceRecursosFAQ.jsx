import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { preguntasFrecuentes } from "../../../../DB/data";
import { useState } from "react";
import { TECollapse } from "tw-elements-react";

const AtlantidaInsuranceRecursosFAQ = () => {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };

  return (
    <>
      <section className="container-page my-10">
        <h2 className="text-4xl family-nunito-black text-secondary-color mb-2 border-b-secondary-color/10 pb-3 border-b-2">
          Preguntas Frecuentes
        </h2>

        <article className=" text-secondary-color text-center col-span-1">
          {preguntasFrecuentes?.map((preguntaFrecuente, index) => (
            <div key={index}>
              <h2
                className="mb-0 border-b-2 border-secondary-color/20"
                id={preguntaFrecuente?.id}
              >
                <button
                  className={`${
                    activeElement === preguntaFrecuente?.id &&
                    ` font-bold [box-shadow:inset_0_-2px_0_rgba(232,232,232)]`
                  } group relative flex w-full justify-between items-center rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
                  type="button"
                  onClick={() => handleClick(preguntaFrecuente?.id)}
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <div className="flex items-center gap-4">
                    {activeElement === preguntaFrecuente?.id ? (
                      <FaChevronUp className="text-primary-color" />
                    ) : (
                      <FaChevronDown className="text-primary-color" />
                    )}
                    <h2 className="font-bold">{preguntaFrecuente?.question}</h2>{" "}
                  </div>
                </button>
              </h2>

              <TECollapse
                show={activeElement === preguntaFrecuente?.id}
                className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
                style={{ height: "auto" }}
              >
                <div className="text-start">{preguntaFrecuente?.answer}</div>
              </TECollapse>
            </div>
          ))}
        </article>
      </section>
    </>
  );
};

export default AtlantidaInsuranceRecursosFAQ;
