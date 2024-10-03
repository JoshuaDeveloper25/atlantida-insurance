const InfoPrincipal = ({ icon, iconClassnames, title, description }) => {
  return (
    <section className="container-page my-10">
      <div className="flex flex-col sm:flex-row items-center gap-16">
        <article className="flex-1">
          <img
            className={iconClassnames}
            decoding="async"
            loading="lazy"
            src={icon}
          />
        </article>

        <article className="flex-[27%]">
          <h2 className="font-[700] text-secondary-color text-4xl mb-3">
            {title}
          </h2>
          <p className="text-gray-600">{description}</p>
        </article>
      </div>
    </section>
  );
};

export default InfoPrincipal;
