import { sociosEstrategicos } from "../../DB/data";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default function SociosEstrategicosCarousel() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplaySpeed: 2000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 720,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },

      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="clientesAsegurados">
      <Slider {...settings}>
        {sociosEstrategicos?.map((socioEstraategico, index) => (
          <div key={index}>
            <Link to={socioEstraategico?.url}>
              <img
                loading="lazy"
                decoding="async"
                src={socioEstraategico?.image}
                className={`${
                  socioEstraategico?.imgClassName
                    ? socioEstraategico?.imgClassName
                    : "w-32 h-20 object-contain"
                } max-[450px]:mx-auto mx-0 flex justify-center items-center`}
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
