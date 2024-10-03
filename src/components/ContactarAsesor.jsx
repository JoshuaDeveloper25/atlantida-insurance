const ContactarAsesor = () => {
  return (
    <section className="bg-tertiary-color py-10">
      <div className="container-page my-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col md:flex-row md:gap-24 gap-10 items-center text-secondary-color">
            <img
              src={"https://dummyimage.com/600x400/000/fff"}
              className="w-72"
              decoding="async"
              loading="lazy"
            />

            <div>
              <h2 className="text-4xl mb-2">
                ¿Aún tienes preguntas?{" "}
                <span className="block mt-2">Contacta un asesor</span>
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
