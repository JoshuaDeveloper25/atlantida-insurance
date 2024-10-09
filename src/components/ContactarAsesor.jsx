import userSupportAlt from "../images/user-support-alt.png";

const ContactarAsesor = ({
  text = "¿Aún tienes preguntas?",
  textSpanned = "Contacta un asesor",
}) => {
  return (
    <section className="bg-tertiary-color py-10">
      <div className="container-page my-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col md:flex-row md:gap-24 gap-10 items-center text-secondary-color">
            <img
              src={userSupportAlt}
              className="w-24"
              decoding="async"
              loading="lazy"
            />

            <div>
              <h2 className="text-4xl mb-2">
                {text} <span className="block mt-2">{textSpanned}</span>
              </h2>
              <p>Atención 24 horas y 7 días de la semana</p>
            </div>
          </div>

          <div>
            <button type="button" className="btn-normal button-red-primary">
              Escríbenos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactarAsesor;
