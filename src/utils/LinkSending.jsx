export const LinkTel = () => {
  return (
    /* We use 'a' tag because its more optimized for every device */
    <a href={"tel:+593985376977"} className="btn-normal button-red-primary">
      Cotiza con nosotros
    </a>
  );
};

export const LinkEmailDynamic = ({ title, link }) => {
  return (
    /* We use 'a' tag because its more optimized for every device */
    <a
      href={`mailto:info@insuratlan.com?subject=${title}`}
      className="text-primary-color"
    >
      {link} {">"}
    </a>
  );
};

export const LinkEmailHardCoded = () => {
  return (
    /* We use 'a' tag because its more optimized for every device */
    <a
      href="mailto:info@insuratlan.com"
      className="btn-normal button-red-primary"
    >
      Cotiza con nosotros
    </a>
  );
};
