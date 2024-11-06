// --> Logos
import socio1 from "../src/images/socio1.png";
import socio2 from "../src/images/socio2.png";
import socio3 from "../src/images/socio3.png";
import socio4 from "../src/images/socio4.png";
import socio5 from "../src/images/socio5.png";
import socio6 from "../src/images/socio6.png";
import socio7 from "../src/images/socio7.png";
import socio8 from "../src/images/socio8.png";
import socio9 from "../src/images/socio9.png";
import socio10 from "../src/images/socio10.jpg";

// Icons
import userHeart from "../src/images/heart-hand.png";
import medkit from "../src/images/medkit.png";
import document from "../src/images/document.png";
import plane from "../src/images/plane.png";
import car from "../src/images/car.png";
import addShield from "../src/images/add-shield.png";
import addUser from "../src/images/add-user.png";
import searchUser from "../src/images/search-user.png";
import luggageUser from "../src/images/luggage-hand.png";
import searchLuggage from "../src/images/search-luggage.png";
import exclamationShield from "../src/images/exclamation-shield.png";
import userHand from "../src/images/user-hand.png";
import building from "../src/images/building.png";
import home from "../src/images/home.png";
import ship from "../src/images/ship.png";
import truck from "../src/images/truck.png";

import documentMetrics from "../src/images/document-metrics.png";
import setting from "../src/images/setting.png";
import documentCheck from "../src/images/document-check.png";
import handCard from "../src/images/hand-card.png";
import fireShield from "../src/images/fire-shield.png";
import vault from "../src/images/vault.png";
import settings from "../src/images/settings.png";
import cpu from "../src/images/cpu.png";
import userDollar from "../src/images/user-dollar.png";
import umbrella from "../src/images/umbrella.png";

export const navbarLinks = [
  {
    to: "/",
    text: "Inicio",
  },

  {
    to: "/quienes-somos",
    text: "¿Quiénes somos?",
  },

  {
    to: "#",
    text: "Productos",

    // This is for if it's a dropdown
    dropdownLinks: [
      {
        text: "Vida Individual",
        to: "/vida-individual",
      },

      {
        text: "Salud",
        to: "/salud-protegida",
      },

      {
        text: "Salud Internacional",
        to: "/protege-salud",
      },

      {
        text: "Asistencia en Viajes",
        to: "/viaja-confianza",
      },

      {
        text: "Vehículos",
        to: "/conduce-seguro",
      },

      {
        text: "Gastos Médicos Mayores",
        to: "/gasto-medico",
      },

      {
        text: "Accidentes Personales",
        to: "/proteccion-integral",
      },

      {
        text: "Otras coberturas",
        to: "/amplitud-coberturas",
      },
    ],
    isDropdown: true,
    dropdownTitle: "Productos",
  },

  {
    to: "/servicios",
    text: "Servicios",

    // This is for if it's a dropdown
    dropdownLinks: [
      {
        text: "Salud para PYMES y Corporativos",
        to: "/proteccion-personalizada",
      },

      {
        text: "Colectiva de Vida",
        to: "/servicios",
      },

      {
        text: "Gastos Médicos Mayores",
        to: "/gasto-medico",
      },

      {
        text: "Seguros Masivos",
        to: "/empresa-potencial",
      },

      {
        text: "Riesgos Especiales",
        to: "/imprevisto",
      },

      {
        text: "Seguro Agrícola",
        to: "/cultiva",
      },

      {
        text: "Ramos Generales",
        to: "/blog",
      },
    ],
    isDropdown: true,
    dropdownTitle: "Servicios",
  },

  {
    to: "/recursos",
    text: "Recursos",
  },

  // {
  //   // to: "/blog",
  //   to: "#",
  //   text: "Blog",
  // },

  {
    to: "/contacto",
    text: "Contacto",
  },
];

export const coberturasPersonas = [
  {
    image: userHeart,
    title: (
      <>
        Cobertura de <span className="block">Vida Individual</span>
      </>
    ),
    link: "Conoce más",
    href: "/vida-individual",
  },

  {
    image: medkit,
    title: (
      <>
        Cobertura <span className="block">de Salud</span>
      </>
    ),
    link: "Conoce más",
    href: "/salud-protegida",
  },

  {
    image: document,
    title: (
      <>
        Cobertura de Salud <span className="block">Internacional</span>
      </>
    ),
    link: "Conoce más",
    href: "/protege-salud",
  },

  {
    image: plane,
    title: (
      <>
        Cobertura de <span className="block">Asistencia en Viajes</span>
      </>
    ),
    link: "Conoce más",
    href: "/viaja-confianza",
  },

  {
    image: car,
    title: (
      <>
        Cobertura de <span className="block">Vehículos</span>
      </>
    ),
    link: "Conoce más",
    href: "/conduce-seguro",
  },

  {
    image: addShield,
    title: (
      <>
        Cobertura de Gastos <span className="block">Médicos Mayores</span>
      </>
    ),
    link: "Conoce más",
    href: "/gasto-medico",
  },

  {
    image: addUser,
    title: (
      <>
        Cobertura de <span className="block">Accidentes Personales</span>
      </>
    ),
    link: "Conoce más",
    href: "/proteccion-integral",
  },

  {
    image: searchUser,
    title: "Otras coberturas",
    link: "Conoce más",
    href: "/amplitud-coberturas",
  },
];

export const coberturasEmpresas = [
  {
    image: luggageUser,
    title: (
      <>
        Cobertura de Salud <span className="block">para PYMES</span> y
        Corporativos
      </>
    ),
    link: "Conoce más",
    href: "/proteccion-personalizada",
  },

  {
    image: searchLuggage,
    imageClassname: "w-24",
    title: (
      <>
        Cobertura Colectiva <span className="block">de Vida</span>
      </>
    ),
    link: "Conoce más",
    href: "/servicios",
  },

  {
    image: addShield,
    title: (
      <>
        Cobertura de Gastos <span className="block">Médicos Mayores</span>
      </>
    ),
    link: "Conoce más",
    href: "/gasto-medico",
  },

  {
    image: building,
    title: (
      <>
        Seguros <span className="block">Masivos</span>
      </>
    ),
    link: "Conoce más",
    href: "/empresa-potencial",
  },

  {
    image: exclamationShield,
    title: (
      <>
        Riesgos <span className="block">Especiales</span>
      </>
    ),
    link: "Conoce más",
    href: "/imprevisto",
  },

  {
    image: userHand,
    title: (
      <>
        Seguro <span className="block">Agrícola</span>
      </>
    ),
    link: "Conoce más",
    href: "/cultiva",
  },

  {
    image: home,
    title: (
      <>
        Ramos <span className="block">Generales</span>
      </>
    ),
    link: "Conoce más",
    href: "/blog",
  },
];

export const experienciaClientes = [
  {
    feedback:
      "Atlántida Insurance buscó la mejor cobertura según mis necesidades. Cuento con un seguro de salud completo que ha sido de gran ayuda durante mi período de embarazo. Su servicio es impecable.",
  },

  {
    feedback:
      "Mi experiencia con el broker ha sido muy satisfactoria. Me han asesorado desde el primer momento, siempre han estado dispuestos a resolver mis inquietudes y los trámites de reembolso han sido muy ágiles.",
  },

  {
    feedback:
      "Atlántida Insurance me otorga la tranquilidad y confianza que necesito en cada atención médica. Ahora, puedo tomar como prioridad mi salud y bienestar integral gracias a todos los beneficios que recibo. Gracias a Atlántida Insurance siento que mi salud está respaldada en todo momento.",
  },
];

export const tipoCobertura = [
  // --> Cobertura de Vida Individual [0]
  [
    {
      tipo: "Tipo 1",
    },

    {
      tipo: "Provincia",
    },
  ],

  // --> Cobertura Salud Internacional, Cobertura de Salud [1]
  [
    {
      tipo: "Individual",
    },

    {
      tipo: "Familiar",
    },
  ],

  // --> Cobertura de Vehículo [2]
  [
    {
      tipo: "Privado",
    },

    {
      tipo: "Turístico",
    },

    {
      tipo: "Carga",
    },

    {
      tipo: "Taxi",
    },

    {
      tipo: "Público",
    },
  ],

  // --> Accidentes Personales [3]
  [
    {
      tipo: "Individual",
    },
  ],

  // --> Protección Personalizada, Cobertura Colectiva de Vida [4]
  [
    {
      tipo: "PYMES",
    },

    {
      tipo: "Corporativos",
    },
  ],
];

export const ciudadResidencia = [
  {
    tipo: "Azuay",
  },

  {
    tipo: "Bolívar",
  },

  {
    tipo: "Cañar",
  },

  {
    tipo: "Carchi",
  },

  {
    tipo: "Chimborazo",
  },

  {
    tipo: "Cotopaxi",
  },

  {
    tipo: "El Oro",
  },

  {
    tipo: "Esmeraldas",
  },

  {
    tipo: "Galápagos",
  },

  {
    tipo: "Guayas",
  },

  {
    tipo: "Imbabura",
  },

  {
    tipo: "Loja",
  },

  {
    tipo: "Los Ríos",
  },

  {
    tipo: "Manabí",
  },

  {
    tipo: "Morona Santiago",
  },

  {
    tipo: "Napo",
  },

  {
    tipo: "Orellana",
  },

  {
    tipo: "Pastaza",
  },

  {
    tipo: "Pichincha",
  },

  {
    tipo: "Santa Elena",
  },

  {
    tipo: "Santo Domingo de los Tsáchilas",
  },

  {
    tipo: "Sucumbíos",
  },

  {
    tipo: "Tungurahua",
  },

  {
    tipo: "Zamora Chinchipe",
  },
];

export const emails = [
  {
    tipo: "johndoe@gmail.com",
  },

  {
    tipo: "janedoe@gmail.com",
  },
];

export const sociosEstrategicos = [
  {
    image: socio1,
    url: "#",
  },

  {
    image: socio9,
    url: "#",
  },

  {
    image: socio8,
    url: "#",
  },

  {
    image: socio2,
    url: "#",
  },

  {
    image: socio4,
    url: "#",
  },

  {
    image: socio3,
    url: "#",
  },

  {
    image: socio10,
    url: "#",
  },

  {
    image: socio7,
    url: "#",
  },

  {
    image: socio6,
    url: "#",
  },

  {
    image: socio5,
    url: "#",
  },
];

export const valores = [
  {
    title: "Centrado en cliente",
    description:
      "Creemos en ofrecer lo mejor con atención precisa para alcanzar los niveles más altos de satisfacción y seguridad del cliente.",
  },

  {
    title: "Trabajo en equipo",
    description:
      "Nos esforzamos por reunir a personas con diferentes experiencias y conocimientos para brindar servicios impecables y excepcionales.",
  },

  {
    title: "Integridad",
    description: "No hacemos lo que es fácil, hacemos lo correcto.",
  },

  {
    title: "Innovación",
    description:
      "Nos esforzamos y desafiamos los métodos convencionales de operaciones con un enfoque de ´PODER HACERLO¨",
  },

  {
    title: "Transparencia",
    description:
      "Llevamos a cabo nuestro negocio de manera abierta, justa y honesta.",
  },
];

export const preguntasFrecuentes = [
  {
    question: "¿Por qué necesito un corredor de seguros?",
    answer: "Respuesta.",
    id: 1,
  },

  {
    question: "¿Por qué debo tener una póliza de seguro?",
    answer: "Respuesta.",
    id: 2,
  },

  {
    question:
      "¿Si ya estoy asegurado como puedo solicitar la asesoría de Atlántida insurance?",
    answer: "Respuesta.",
    id: 3,
  },

  {
    question: "¿Qué es un copago?",
    answer: "Respuesta.",
    id: 4,
  },

  {
    question: "¿Qué es un deducible?",
    answer:
      "El deducible es un monto que paga el asegurado para acceder a la cobertura del seguro cuando ocurre un siniestro, el monto estará definido en la póliza.",
    id: 5,
  },
];

export const ramosGenerales = [
  {
    image: ship,
    title: "Transporte",
    link: "Conoce más",
  },

  {
    image: car,
    title: "Vehículos",
    link: "Conoce más",
  },

  {
    image: truck,
    title: (
      <>
        Maquinaria y equipo <span className="block">móvil</span>{" "}
      </>
    ),
    link: "Conoce más",
  },

  {
    image: documentMetrics,
    title: (
      <>
        Cobertura de <span className="block">Responsabilidad Civil o</span>{" "}
        Profesional por Daños <span className="block">a Terceros</span>
      </>
    ),
    link: "Conoce más",
  },

  {
    image: setting,
    title: (
      <>
        Todo Riesgo de <span className="block">Construcción y</span> Montaje
      </>
    ),
    link: "Conoce más",
  },

  {
    image: documentCheck,
    title: "Fianzas/Garantías",
    link: "Conoce más",
  },

  {
    image: handCard,
    title: "Seguro de Crédito",
    link: "Conoce más",
  },

  {
    image: fireShield,
    title: "Incendio",
    link: "Conoce más",
  },

  {
    image: vault,
    title: "Robo",
    link: "Conoce más",
  },

  {
    imageClassname: "w-24",
    image: settings,
    title: "Rotura de Maquinaria",
    link: "Conoce más",
  },

  {
    image: cpu,
    title: "Equipo Electrónico",
    link: "Conoce más",
  },

  {
    image: userDollar,
    title: "Lucro Cesante",
    link: "Conoce más",
  },

  {
    image: umbrella,
    title: "Multi-riesgo",
    link: "Conoce más",
  },
];

export const tiposDeUso = [
  {
    tipo: "Para el trabajo",
  },

  {
    tipo: "Para agendas",
  },

  {
    tipo: "Para mandados",
  },

  {
    tipo: "Para viajes",
  },
];

export const vehiculosDiesel = [
  {
    tipo: "BMW",
  },

  {
    tipo: "Hyundai Tucson",
  },

  {
    tipo: "Mercedes-Benz",
  },

  {
    tipo: "Mazda CX-60",
  },
];

export const direcciones = [
  {
    tipo: "Honduras, El Progreso",
  },

  {
    tipo: "USA, Houston",
  },

  {
    tipo: "Nuevo México",
  },

  {
    tipo: "España, Madrid",
  },
];

export const numerosTelefono = [
  {
    tipo: "+52 55 8421 6502",
  },

  {
    tipo: "+563 291 0475",
  },

  {
    tipo: "+55 2744 620",
  },

  {
    tipo: "+800 024 0384 Ext. 2025",
  },
];
