export default {
  global: {
    Name: 'Medidas de manejo ambiental aplicadas al sector avícola',
    Description:
      'Este componente describe las temáticas relacionadas con las medidas de manejo ambiental enfocadas en la producción más limpia aplicada a los procesos productivos que se desarrollan en el sector avícola, teniendo en cuenta los tipos de impactos y requerimientos normativos. ',
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
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Producción más limpia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Elementos de la producción más limpia',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Buenas prácticas de operación',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Prácticas ambientales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Manejo de residuos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Ahorro de agua',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Eficiencia energética',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Medidas de manejo ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Gestión integral de residuos orgánicos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Manejo de la mortandad',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Gestión integral de residuos aprovechables, ordinarios y peligrosos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Gestión Integral de recurso hídrico',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Limpieza y desinfección',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Educación ambiental',
            hash: 't_3_6',
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
      tema: 'Medidas de manejo ambiental',
      referencia:
        'Federación Nacional de Avicultores de Colombia y el Fondo Nacional Avícola. (2024). Todo lo que debe saber sobre la normativa ambiental en el sector avícola. ',
      tipo: 'Documento técnico',
      link: 'https://share.google/4yBzrpTeVK3leNAxQ',
    },
  ],
  glosario: [
    {
      termino: 'Avicultura',
      significado:
        'rama de la zootecnia que explota en forma técnica y científica a las aves de corral o galliformes, para obtener el máximo rendimiento en carne y huevos.',
    },
    {
      termino: 'Gallinaza',
      significado:
        'residuo orgánico generado en las granjas avícolas, específicamente en los galpones de pollo de engorde y gallinas ponedoras.',
    },
    {
      termino: 'Galpón',
      significado:
        'instalación en donde se implementa una producción de aves de corral.',
    },
    {
      termino: 'Medida de manejo ambiental',
      significado:
        'conjunto de acciones de tipo preventivo o de mitigación que se implementan para el control de los impactos ambientales.',
    },
    {
      termino: 'Planta de beneficio',
      significado:
        'instalación autorizada por entidades sanitarias y ambientales donde las aves son sacrificadas y procesadas hasta convertirse en productos de carne listos para el consumo humano.',
    },
    {
      termino: 'Pollinaza',
      significado:
        'excretas de pollos de engorde que incluyen plumas, cama y restos de alimentos.',
    },
    {
      termino: 'Residuos peligrosos',
      significado:
        'residuo o desecho que por sus características corrosivas, reactivas, explosivas, tóxicas, inflamables, infecciosas o radioactivas, pueden causar riesgos, daños, o efectos no deseados directos e indirectos, a la salud humana y el ambiente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ángel Ruiz. (2025). Los pasos del proceso de rendering de alimentos. ',
      link: 'https://angelruiz.net/pasos-del-proceso-de-rendering/',
    },
    {
      referencia:
        'Chaparro, M. (2020). Propuesta para el aprovechamiento de pluma en el desarrollo del proceso de obtención de harina de pluma hidrolizada.',
      link: 'https://share.google/auiWfFICrZ3f0tXeh',
    },
    {
      referencia:
        'Federación Nacional de Avicultores de Colombia y el Fondo Nacional Avícola. (2024). Gestión Ambiental en Plantas de Beneficio de Aves de Corral.',
      link: 'https://share.google/zQfircmSGUigzz2qj',
    },
    {
      referencia:
        'Federación Nacional de Avicultores de Colombia y el Fondo Nacional Avícola. (2024). Todo lo que debe saber sobre la normativa ambiental en el sector avícola.',
      link: 'https://share.google/4yBzrpTeVK3leNAxQ',
    },
    {
      referencia:
        'Federación Nacional de Avicultores. (2021). Recomendaciones para contingencias ambientales en el sector avícola. ',
      link: 'https://share.google/EGwMicpWF4l8D1kFt',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2017). Resolución 30292 de 2017. Por medio de la cual se establecen medidas sanitarias diferenciadas para el control y erradicación de la enfermedad de Newcastle notificable en Colombia.',
      link: 'https://fenavi.org/documentos/resolucion-30292-de-2017/',
    },
    {
      referencia:
        'INVIMA (s.f). Formato de evaluación del nivel sanitario de cumplimiento para plantas de beneficio de aves. ',
      link: 'https://share.google/8dKrbju6RTtAEZQHB',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2019, 26 de diciembre). Resolución 2184 de 2019. Por la cual se modifica la Resolución 668 de 2016 sobre uso racional de bolsas plásticas y se adoptan otras disposiciones.',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/08/resolucion-2184-de-2019.pdf',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para el Desarrollo Industrial. (2006). Introducción a la producción más limpia.',
      link: 'https://share.google/s38vkTmI8EWROb9Fu',
    },
    {
      referencia:
        'Pérez, M y Villegas, R. (2009). Procedimientos para el manejo de residuos orgánicos avícolas.',
      link:
        'https://bibliotecadigital.udea.edu.co/entities/publication/abe99636-84e2-47d5-bb42-a88c17b88723',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Deya Maritza Cortes Enríquez',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima ',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
