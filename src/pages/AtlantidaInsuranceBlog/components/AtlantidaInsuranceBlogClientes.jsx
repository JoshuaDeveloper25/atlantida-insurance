import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { experienciaClientes } from "../../../../DB/data";
import Slider from "react-slick";

const NextArrow = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <BiChevronRight className="size-7 bg-primary-color p-1 text-white rounded-full" />
    </div>
  );
};

const PrevArrow = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <BiChevronLeft className="size-7 bg-primary-color p-1 text-white rounded-full" />
    </div>
  );
};

const AtlantidaInsuranceInicioClientes = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="container-page py-16 mt-8 border-t border-t-secondary-color">
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-10 items-center">
        <article className="md:col-span-2 col-span-5 text-center md:mb-0 mb-5">
          <h2 className="text-[1.7rem] leading-7 text-secondary-color family-nunito-regular">
            Experiencia de clientes
          </h2>
        </article>

        <article className="clientesAsegurados md:col-span-2 col-span-5">
          <Slider {...settings}>
            {experienciaClientes?.map((coberturaPersona, id) => (
              <div key={id} className="text-center">
                <p className="text-gray-500 max-w-lg mx-auto">
                  “ {coberturaPersona?.feedback} ”
                </p>
              </div>
            ))}
          </Slider>
        </article>
      </div>
    </section>
  );
};

export default AtlantidaInsuranceInicioClientes;
