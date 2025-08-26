export default {
  global: {
    Name: 'Movilidad inteligente y circulación segura',
    Description:
      'La movilidad inteligente integra tecnologías para optimizar el transporte, promoviendo eficiencia, sostenibilidad y accesibilidad. Junto con la circulación segura, basada en sistemas inteligentes y cultura vial, mejora la convivencia entre usuarios, reduce accidentes y el impacto ambiental. Ambas conforman un modelo integral que transforma el transporte en un sistema moderno, seguro y enfocado en el bienestar de la sociedad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Transporte terrestre',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Historia del transporte terrestre',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Concepto',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Tipología',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Normativa',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Medios de transporte',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Infraestructura vial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Definición',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Nomenclatura de la jurisdicción aplicada a la infraestructura vial',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Riesgos viales del entorno',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Clases y aspectos técnicos de vías',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Educación vial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Principios',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Valores ciudadanos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Convivencia vial',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Hábitos durante el desplazamiento por las vías como conductores, peatón o pasajero',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Código nacional de tránsito',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Principios',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Autoridades',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Registro de información de conductores',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Licencias y condiciones del vehículo',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Seguros y responsabilidades del vehículo',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Estatus nacionales del transporte',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Norma según tipo de transporte',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Límites de velocidad',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Tipos de infracción',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Sanciones',
            hash: 't_5_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Infraestructura vial',
      referencia:
        'Álvarez, J. L. (s.f.). <em>Carreteras inteligentes: Qué son y cómo funcionan</em> [Video]. Tuteorica.com. https://www.tuteorica.com',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=m-SiexiuGxA',
    },
    {
      tema: 'Educación Vial',
      referencia:
        'Tuteorica.com. (2023, 1 de diciembre). El concepto de Educación Vial. [Video]. YouTube',
      tipo: 'Sitio web',
      link: 'https://www.youtube.com/watch?v=av0DpZq89mg',
    },
    {
      tema: 'Transporte terrestre',
      referencia:
        'Departamento Nacional de Planeación. (2017). <em>Manual de innovación en movilidad y transporte</em>. DNP.',
      tipo: 'PDF',
      link:
        'https://portalterritorial.dnp.gov.co/KitOT/Content/uploads/Manual%20innovacion%20Movilidad%20y%20Transporte%20PDF.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Accesibilidad universal',
      significado:
        'Diseño de transporte e infraestructura para que pueda ser utilizada por todas las personas, incluidas con discapacidad.',
    },
    {
      termino: 'ANI',
      significado:
        'La ANI (Agencia Nacional de Infraestructura) es una entidad del gobierno colombiano, adscrita al Ministerio de Transporte, encargada de planear, coordinar, estructurar, contratar, ejecutar y supervisar proyectos de infraestructura de transporte en el país, especialmente bajo esquemas de asociación público-privada (APP).',
    },
    {
      termino: 'Asistencia en caso de colisión',
      significado:
        'Sistema que detecta impactos y alerta a los servicios de emergencia automáticamente.',
    },
    {
      termino: 'Auditoría vial',
      significado:
        'Evaluación técnica de una vía para identificar riesgos y proponer mejoras.',
    },
    {
      termino: '<em>Calipers</em>',
      significado:
        'Los calipers, o calibradores de freno, son componentes esenciales del sistema de frenos de disco en un vehículo. Su función principal es aplicar presión a las pastillas de freno contra el disco (rotor), generando fricción que permite reducir la velocidad del vehículo o detenerlo por completo.',
    },
    {
      termino: 'Cinturón de seguridad',
      significado:
        'Dispositivo que protege al ocupante del vehículo en caso de colisión.',
    },
    {
      termino: 'Conducción autónoma nivel 5',
      significado:
        'Nivel más alto de automatización, donde el vehículo opera sin intervención humana en ningún entorno.',
    },
    {
      termino: 'Cruce inteligente',
      significado:
        'Intersección equipada con sensores y semáforos automáticos para priorizar el tránsito.',
    },
    {
      termino: 'Cultura vial',
      significado:
        'Conjunto de valores, normas, hábitos, actitudes y comportamientos que deben adoptar todos los actores del tránsito (conductores, peatones, ciclistas, motociclistas y pasajeros) para garantizar una convivencia segura, respetuosa y ordenada en las vías públicas.',
    },
    {
      termino: 'Emergencia vial',
      significado:
        'Situación imprevista que afecta la circulación y requiere intervención urgente.',
    },
    {
      termino: 'Entorno vial conflictivo',
      significado:
        'Es aquel espacio o situación dentro del sistema de tránsito donde se presentan condiciones que aumentan el riesgo de accidentes, congestión, mal comportamiento vial o falta de seguridad para los usuarios. Estos entornos afectan la fluidez del tránsito y ponen en riesgo la vida de conductores, peatones, ciclistas y pasajeros.',
    },
    {
      termino: 'Gestión del tráfico',
      significado:
        'Conjunto de estrategias para optimizar el flujo vehicular y reducir los tiempos de desplazamiento.',
    },
    {
      termino: 'INVIAS',
      significado:
        'El INVÍAS (Instituto Nacional de Vías) es una entidad pública del orden nacional, adscrita al Ministerio de Transporte de Colombia, encargada de planificar, construir, conservar y administrar la infraestructura vial no concesionada del país, especialmente las vías terciarias, secundarias y algunas troncales nacionales.',
    },
    {
      termino: 'Micromovilidad',
      significado:
        'Transporte individual de corta distancia como patinetas o bicicletas eléctricas.',
    },
    {
      termino: 'RUNT',
      significado:
        'Es una plataforma digital centralizada creada por el Gobierno Colombiano para almacenar, actualizar y validar en tiempo real toda la información relacionada con el tránsito, transporte y seguridad vial del país. Es administrado por el Ministerio de Transporte.',
    },
    {
      termino: 'Red de sensores urbanos',
      significado:
        'Conjunto de dispositivos que recolectan información en tiempo real sobre movilidad y seguridad.',
    },
    {
      termino: 'Simulación de tráfico',
      significado:
        'Uso de modelos computacionales para prever el comportamiento del tránsito en diferentes escenarios.',
    },
    {
      termino: 'Vehículo conectado',
      significado:
        'Auto que se comunica con otros vehículos, infraestructura o redes para mejorar la seguridad y eficiencia.',
    },
    {
      termino: 'Zapatas',
      significado:
        'Las zapatas son componentes clave del sistema de frenos de tambor en vehículos. Su función principal es generar fricción contra el tambor para reducir la velocidad del vehículo o detenerlo completamente cuando se aplica el freno.',
    },
    {
      termino: 'Zona escolar',
      significado:
        'Área próxima a una institución educativa con regulación especial para proteger a niños y adolescentes.',
    },
  ],
  referencias: [
    {
      referencia:
        'Agencia Nacional de Seguridad Vial de Colombia. (2020). Plan Nacional de Seguridad Vial 2020-2030: Una visión compartida para la década de acción. Agencia Nacional de Seguridad Vial.',
      link: '',
    },
    {
      referencia:
        'Asociación Española de la Carretera (AEC). (2018). Manual de auditorías de seguridad vial. AEC.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2002). Ley 769 de 2002: Por la cual se expide el Código Nacional de Tránsito Terrestre y se dictan otras disposiciones. Diario Oficial de Colombia.',
      link: '',
    },
    {
      referencia:
        'Dirección General de Tráfico (DGT) de España. (2019). Guía de buenas prácticas en seguridad vial urbana. DGT.',
      link: '',
    },
    {
      referencia:
        'Federación Iberoamericana de Asociaciones de Ingeniería de Carreteras (FIARC). (2017). Manual de diseño geométrico de carreteras. FIARC.',
      link: '',
    },
    {
      referencia:
        'Garrison, W. L., & Levinson, D. M. (2014). The Transportation Experience: Policy, Planning, and Deployment. Oxford University Press.',
      link: '',
    },
    {
      referencia:
        'González, R. A. (2017). Transporte y movilidad urbana sostenible. Editorial UOC.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Transporte de Colombia. (2015). Reglamento Técnico para Vehículos Automotores (NTC 5202-1, 5202-2, etc.). Ministerio de Transporte.',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas (ONU). (2016). Decenio de Acción para la Seguridad Vial 2011-2020: Columna vertebral de la seguridad vial. ONU.',
      link: '',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. (2020). Seguridad vial: herramientas para la prevención de lesiones por tránsito en América Latina.',
      link: 'https://www.paho.org.',
    },
    {
      referencia:
        'Ortúzar, J. de D., & Willumsen, L. G. (2011). Modelling Transport (4th ed.). Wiley. (Ortúzar. J de D., 2011).',
      link: '',
    },
    {
      referencia:
        'ONU. (2020). Plan Mundial para el Decenio de Acción para la Seguridad Vial 2021-2030.',
      link: ' https://www.un.org',
    },
    {
      referencia:
        'Pons, L. (Coord.). (2017). Tráfico y seguridad vial: Una visión multidisciplinar. Editorial Dykinson.',
      link: '',
    },
    {
      referencia:
        '<em>Rodriguez</em>, J.-P. (2020). The Geography of Transport Systems (5th ed.). Routledge.',
      link: '',
    },
    {
      referencia:
        'Sánchez, R. (2019). Movilidad urbana sostenible: Conceptos, planificación y gestión. Editorial Reverté.',
      link: '',
    },
    {
      referencia:
        'World Health Organization (WHO). (2018). Global status report on road safety 2018. WHO.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Yasmín Andreina Maldonado Escobar',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Coll Gallardo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta',
          cargo: 'Diseñador <i>web</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <i>full stack junior</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
