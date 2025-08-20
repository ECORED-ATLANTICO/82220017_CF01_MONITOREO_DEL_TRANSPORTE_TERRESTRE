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
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
