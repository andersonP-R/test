import bcryptjs from "bcryptjs";
interface SeedService {
  nombre: string;
  slug: string;
  descripcion: string;
  tipo: string;
  categorias: string[];
  precios: number[];
  objetivo: string;
  requisitos: string[];
  recomendaciones: string[];
  fechaCreacion: string;
  imagenes: string[];
}

interface SeedUser {
  nombres?: string;
  apellidos?: string;
  email: string;
  password: string;
  tipoId?: string;
  identificacion?: string;
  avatar: string;
  direccion?: string;
  categoriaAfiliacion?: string;
}

interface SeedData {
  users: SeedUser[];
  services: SeedService[];
}

export const initialData: SeedData = {
  users: [
    {
      nombres: "anderson",
      apellidos: "rivera",
      email: "anderson@gmail.com",
      password: bcryptjs.hashSync("123456"),
      tipoId: "cedula",
      identificacion: "202939381",
      avatar: "",
      direccion: "Calle 80 N23",
      categoriaAfiliacion: "B",
    },
    {
      nombres: "valentina",
      apellidos: "gutierres",
      email: "valen@gmail.com",
      password: bcryptjs.hashSync("123456"),
      tipoId: "cedula",
      identificacion: "88423434",
      avatar: "",
      direccion: "Suba Centro",
      categoriaAfiliacion: "D",
    },
  ],
  services: [
    {
      nombre: "Escuela Fútbol Fundación Real Madrid Alevín (9 a 10 años)",
      slug: "escuela_futbol_fundacion_real_madrid_alevin_9_a_10_anos",
      descripcion:
        "Los niños trabajarán en situaciones de juego realistas y se enfocarán en mejorar su técnica individual, sus habilidades tácticas y su forma física. Durante las sesiones, se enfatizará en la importancia del trabajo en equipo, la colaboración y la creatividad en situaciones de juego. Los niños aprenderán a aplicar tácticas avanzadas del juego, como la jugada combinada, la presión defensiva y la recuperación del balón. También se enfatizará en la toma de decisiones rápidas y precisas en el campo de juego.",
      tipo: "escuela deportiva",
      categorias: ["A", "B", "C", "D"],
      precios: [45000, 58600, 134600, 164999],
      objetivo:
        "Mejorar la precisión en el control del balón y en los pases, Desarrollar habilidades de defensa avanzadas, como la marcación zonal y la defensa en línea.",
      requisitos: [
        "Los niños deben estar en buena salud física y tener la capacidad de participar en actividades físicas.",
        "Los niños deben tener ropa cómoda y zapatos deportivos adecuados para jugar al fútbol.",
      ],
      recomendaciones: [
        "Es recomendable que los padres supervisen y apoyen a sus hijos durante el curso.",
        "Los niños deben estar dispuestos a participar activamente y estar abiertos a aprender nuevas habilidades.",
      ],
      fechaCreacion: "20/04/2023",
      imagenes: ["alevin_1.jpg", "alevin_2.jpg"],
    },
    {
      nombre: "Escuela Natación Ambientación (nivel 1)",
      slug: "escuela_natacion_ambientacion_nivel_1",
      descripcion:
        "Descubre la diversión acuática desde el primer día con nuestro curso de natación. Aprende a respirar y flotar con confianza en el emocionante mundo acuático.",
      tipo: "escuela deportiva",
      categorias: ["A", "B", "C", "D"],
      precios: [25000, 58600, 124600, 144999],
      objetivo:
        "Confianza en el Agua: Desarrollar confianza en el medio acuático, Flotación Hábil: Dominar las técnicas de flotación.",
      requisitos: [
        "Indumentaria: Traje de baño en lycra, gorro, toalla y chanclas.",
        "Los niños menores de 3 años deben ingresar con pañal específico para piscina. Se permitirá el uso de pañal al alumno si presenta alguna condición médica.",
      ],
      recomendaciones: [
        "Trae tu toalla y gafas.",
        "Llega con antelación a la clase para que puedas cambiarte y llegar a tiempo.",
      ],
      fechaCreacion: "20/05/2023",
      imagenes: ["nata_ambi_1.jpg", "nata_ambi_2.jpg"],
    },
    {
      nombre: "Escuela Natación Facatativa - Pre Estilos FUNDEC",
      slug: "escuela_natacion_facatativa_pre_estilos_fundec",
      descripcion:
        "Este curso de Pre Estilos te prepara para los estilos de natación con ejercicios avanzados. Mejora tu técnica, resistencia y confianza para avanzar al siguiente nivel en el agua, dominando cada movimiento.",
      tipo: "escuela deportiva",
      categorias: ["A", "B", "C", "D"],
      precios: [15000, 28600, 34600, 84999],
      objetivo:
        "Perfecciona movimientos fundamentales para prepararte para los diferentes estilos.",
      requisitos: ["Gorro", "Traje de baño licrado"],
      recomendaciones: [
        "Los alumnos menores de 18 años deben estar acompañados de un adulto responsable.",
        "En caso de lluvia o tormenta eléctrica la sesión de clase quedara suspendida y se tomara como vista si se lleva ejecutado el 70% o más de la misma.",
        "Es deber del afiliado o usuario cumplir con el reglamento y condiciones de uso establecidos por la administración de las diferentes sedes en cada uno de los servicios, ya que el no cumplimiento puede ser causal para retirar el alumno del programa.",
      ],
      fechaCreacion: "10/05/2022",
      imagenes: ["fundec_1.jpg", "fundec_2.jpg"],
    },
    {
      nombre: "Escuela Voleibol Avanzado",
      slug: "escuela_voleibol_avanzado",
      descripcion:
        "Eleva tu juego con nuestro curso avanzado de voleibol! Sumérgete en técnicas y estrategias de élite, perfecciona tu dominio en la cancha y experimenta una nueva dimensión de competencia. Este curso te desafía a alcanzar tu máximo potencial, guiado por entrenadores especializados y un enfoque en la excelencia.",
      tipo: "escuela deportiva",
      categorias: ["A", "B", "C", "D"],
      precios: [45000, 58600, 134600, 144000],
      objetivo:
        "Mastery de técnicas avanzadas: Perfeccionar técnicas especializadas, incluyendo saques tácticos, remates variados y bloqueos estratégicos para destacar en situaciones desafiantes.",
      requisitos: [
        "Ropa deportiva y cómoda.",
        "No se permite el uso de anillos o collares.",
      ],
      recomendaciones: [
        "Los alumnos menores de 18 años deben estar acompañados de un adulto responsable.",
        "Es deber del afiliado o usuario cumplir con el reglamento y condiciones de uso establecidos por la administración de las diferentes sedes en cada uno de los servicios, ya que el no cumplimiento puede ser causal para retirar el alumno del programa.",
        "En caso de lluvia o tormenta eléctrica la sesión de clase quedara suspendida y se tomara como vista si se lleva ejecutado el 70% o más de la misma.",
      ],
      fechaCreacion: "24/05/2022",
      imagenes: ["vol_1.jpg", "vol_2.jpg"],
    },
    {
      nombre: "Escuela Tenis Avanzado",
      slug: "escuela_tenis_avanzado",
      descripcion:
        "El curso se enfoca en perfeccionar técnicas avanzadas de golpeo, incluyendo la variación de golpes y el control de la profundidad de los mismos. También se enfoca en mejorar la velocidad, precisión y variación en el servicio, así como en desarrollar estrategias y tácticas altamente avanzadas para aplicar durante los juegos.",
      tipo: "escuela deportiva",
      categorias: ["A", "B", "C", "D"],
      precios: [25000, 38600, 144600, 164999],
      objetivo:
        "Dominio de variación en golpes: Perfeccionar técnicas para variar golpes y controlar su profundidad.",
      requisitos: [
        "Raqueta.",
        "Haber cursado y aprobado el nivel de Intermedio.",
        "Tenis adecuados para la práctica (suela deportiva)",
      ],
      recomendaciones: [
        "Los alumnos menores de 18 años deben estar acompañados de un adulto responsable.",
        "Es deber del alumno informar a su profesor los aspectos de salud que pueden impedir su normal desempeño durante la clase.",
        "Es deber del afiliado o usuario cumplir con el reglamento y condiciones de uso establecidos por la administración de las diferentes sedes en cada uno de los servicios, ya que el no cumplimiento puede ser causal para retirar el alumno del programa.",
      ],
      fechaCreacion: "30/12/2021",
      imagenes: ["ten_1.jpg", "ten_2.jpg"],
    },
    {
      nombre: "Escuela Taekwondo Avanzado",
      slug: "escuela_taekwondo_avanzado",
      descripcion:
        "Sumérgete en la excelencia del Taekwondo con nuestro curso avanzado. Enfocado en la maestría técnica y el refinamiento de habilidades, este nivel te desafiará a alcanzar nuevos estándares en precisión, velocidad y aplicación táctica del arte marcial.",
      tipo: "escuela deportiva",
      categorias: ["A", "B", "C", "D"],
      precios: [45000, 58600, 134600, 164999],
      objetivo:
        "Especialización en técnicas avanzadas de combate: Dominar técnicas avanzadas de ataque, defensa y contraataque para situaciones desafiantes y competiciones de alto nivel.",
      requisitos: [
        "No se permite el uso de anillos, collares o cualquier accesorio que pueda causar accidentes.",
        "Haber Cursado y aprobado el nivel Avanzado.",
        "Al inicio del proceso pedagógico, el alumno puede realizar la práctica deportiva en sudadera o ropa deportiva; durante el proceso es necesario adquirir la indumentaria apropiada del deporte.",
      ],
      recomendaciones: [
        "Los alumnos menores de 18 años deben estar acompañados de un adulto responsable.",
        "Es deber del alumno informar a su profesor los aspectos de salud que pueden impedir su normal desempeño durante la clase.",
        "Es deber del afiliado o usuario cumplir con el reglamento y condiciones de uso establecidos por la administración de las diferentes sedes en cada uno de los servicios, ya que el no cumplimiento puede ser causal para retirar el alumno del programa.",
      ],
      fechaCreacion: "20/02/2024",
      imagenes: ["tak_1.jpg", "tak_2.jpg"],
    },
    {
      nombre: "Billar - Club Campestre",
      slug: "billar_club_campestre",
      descripcion:
        "Imagina el recorrido de la carambola, concéntrate, apunta con el taco, dispara con la velocidad adecuada y ¡gana tu partida!",
      tipo: "practica libre",
      categorias: ["A", "B", "C", "D"],
      precios: [25000, 58600, 124600, 134999],
      objetivo:
        "Realizar el mayor número de carambolas posibles dentro de la partida, valiendo cada una 1 punto.",
      requisitos: [
        "Ingreso permitido a partir de los 10 años.",
        "Todo menor de edad debe ingresar y permanecer en la sede bajo la supervisión de un adulto.",
        "Toda persona debe presentar su documento de identidad para el ingreso y para la toma de cualquier servicio.",
      ],
      recomendaciones: [
        "Llega con 20 minutos de anticipación de la hora reservada.",
        "El servicio de la mesa de billar es para máximo 4 jugadores en práctica libre.",
        "Solicita los elementos de juego con el operario de bolos.",
      ],
      fechaCreacion: "23/06/2024",
      imagenes: ["bi_1.jpg", "bi_2.jpg"],
    },
    {
      nombre: "Bodytech Antares - Súper Año",
      slug: "bodytech_antares_super_ano",
      descripcion:
        "La categoría SÚPER a la que pertenece este gimnasio te permite acceder a 8 sedes super de Colombia. Este gimnasio está dotado con modernos equipos de musculación y cardiovasculares, zona funcional, salones de entrenamiento grupales e indoor cycling así como zonas húmedas.",
      tipo: "plan gimnasio",
      categorias: ["A", "B", "C", "D"],
      precios: [45000, 58600, 134600, 164999],
      objetivo: "Programa de entrenamiento único enfocado en tus objetivos.",
      requisitos: [
        "Descarga la app Bodytech",
        "Acércate al counter de tu sede y registra tu huella digital presentando tu documento de identidad.",
        "Escribe al doctor Bodytech al correo doctor.bodytech@bodytechcorp.com si presentas inquietudes sobre salud, entrenamiento.",
      ],
      recomendaciones: [
        "Solicita la valoración de composición corporal.",
        "Solicita el plan de entrenamiento.",
        "Recuerda que cuentas con un control cada 4 meses.",
      ],
      fechaCreacion: "27/10/2020",
      imagenes: ["gy_1.jpg", "gy_2.jpg"],
    },
  ],
};
