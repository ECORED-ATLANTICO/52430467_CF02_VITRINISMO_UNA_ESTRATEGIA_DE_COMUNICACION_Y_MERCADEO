export default {
  global: {
    Name: 'Estrategias de exhibición',
    Description:
      'El componente formativo aborda las estrategias de exhibición comercial y <em>merchandising</em> aplicadas al posicionamiento de productos y marcas dentro del punto de venta. Analiza elementos relacionados con estrategias de venta y exhibición, elementos informativos, servicios logísticos, tipos y sitios de exhibición comercial, así como estrategias de comunicación y mercadeo visual, con el propósito de fortalecer la presentación comercial, la experiencia del consumidor y el impacto visual en las ventas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Estrategias de venta y exhibición',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de estrategias de exhibición',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Promoción visual de productos y marcas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Relación entre <em>merchandising</em> y ventas',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Elementos informativos de exhibición',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de elementos informativos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Material publicitario para exhibición',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Aplicación de elementos visuales en vitrinas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Servicios logísticos para <em>merchandising</em> y exhibición',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Servicios logísticos internos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Servicios logísticos externos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Apoyo logístico en montaje y exhibición comercial',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Tipos de exhibición comercial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Exhibición horizontal y vertical',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Exhibición abierta y cerrada',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Exhibiciones promocionales y temáticas',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Sitios de exhibición para productos manufacturados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Vitrinas comerciales',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Puntos de exhibición en almacenes',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Espacios estratégicos de exhibición',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Comunicación y mercadeo visual',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Estrategias visuales',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Aplicación de estrategias comercial',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Impacto en ventas',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Ejemplo comercial aplicado',
        desarrolloContenidos: true,
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
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/52430467_CF02_DU.zip',
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
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Almacén',
      significado:
        'Establecimiento destinado a la comercialización y exhibición de productos.',
    },
    {
      termino: 'Comunicación visual',
      significado:
        'Estrategia utilizada para transmitir mensajes mediante elementos gráficos y visuales.',
    },
    {
      termino: 'Elementos informativos',
      significado:
        'Recursos visuales utilizados para brindar información comercial al consumidor.',
    },
    {
      termino: 'Espacios estratégicos',
      significado:
        'Áreas del punto de venta destinadas a destacar productos o promociones.',
    },
    {
      termino: 'Estrategias comerciales',
      significado:
        'Acciones orientadas al fortalecimiento de ventas y posicionamiento de productos.',
    },
    {
      termino: 'Exhibición abierta',
      significado:
        'Presentación de productos con acceso directo para el consumidor.',
    },
    {
      termino: 'Exhibición cerrada',
      significado:
        'Presentación de productos protegidos mediante vitrinas o separaciones físicas.',
    },
    {
      termino: 'Exhibición comercial',
      significado:
        'Organización visual de productos dentro de un espacio de venta.',
    },
    {
      termino: 'Exhibición horizontal',
      significado:
        'Distribución de productos de manera lateral dentro del punto de venta.',
    },
    {
      termino: 'Exhibición temática',
      significado:
        'Presentación visual basada en campañas, temporadas o eventos comerciales.',
    },
    {
      termino: 'Exhibición vertical',
      significado:
        'Organización de productos en niveles de arriba hacia abajo.',
    },
    {
      termino: 'Impacto visual',
      significado:
        'Capacidad de una exhibición para captar la atención del consumidor.',
    },
    {
      termino: 'Logística comercial',
      significado:
        'Proceso de organización y apoyo para actividades de exhibición y ventas.',
    },
    {
      termino: 'Material publicitario',
      significado:
        'Recursos gráficos utilizados para promocionar productos o marcas.',
    },
    {
      termino: 'Mercadeo visual',
      significado:
        'Estrategias visuales orientadas a fortalecer la promoción comercial.',
    },
    {
      termino: '<em>Merchandising</em>',
      significado:
        'Conjunto de técnicas utilizadas para presentar productos y estimular las ventas.',
    },
    {
      termino: 'Promoción visual',
      significado:
        'Estrategia comercial enfocada en destacar productos mediante recursos visuales.',
    },
    {
      termino: 'Punto de exhibición',
      significado:
        'Espacio destinado a la presentación visual de productos dentro del establecimiento.',
    },
    {
      termino: 'Servicios logísticos',
      significado:
        'Actividades de apoyo relacionadas con transporte, montaje y organización comercial.',
    },
    {
      termino: 'Vitrina comercial',
      significado:
        'Espacio visual utilizado para exhibir productos y atraer consumidores.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aaker, D. A. (2014). <em>Construir marcas fuertes</em>. Editorial Gestión 2000.',
    },
    {
      referencia:
        'Kotler, P., & Armstrong, G. (2017). <em>Marketing</em> (14.ª ed.). Pearson Educación.',
      link:
        'https://campus.eco.unlpam.edu.ar/pluginfile.php/154367/mod_resource/content/1/Marketing%20Kotler-Armstrong.pdf',
    },
    {
      referencia:
        'Kotler, P., & Keller, K. L. (2016). <em>Dirección de marketing</em> (15.ª ed.). Pearson Educación.',
      link:
        'https://www.montartuempresa.com/wp-content/uploads/2016/01/direccion-de-marketing-14edi-kotler1.pdf',
    },
    {
      referencia:
        'Martínez Cruz, H. (2018). <em>El arte de seducir: merchandising</em>. ECOE Ediciones.',
      link:
        'https://www.ecoeediciones.com/wp-content/uploads/2018/01/El-arte-de-seducir-1.pdf',
    },
    {
      referencia:
        'Ríos Quiñónez, M. B. (2024). Análisis del <em>merchandising</em> visual como estrategia de diseño y disposición de productos en farmacias independientes del DMQ. <em>Res Non Verba Revista Científica</em>, 14(1), 1–17.',
      link: 'https://revistas.ecotec.edu.ec/index.php/rnv/article/view/840',
    },
    {
      referencia:
        'Rivera Camino, J., Arellano Cueva, R., & Molero Ayala, V. (2013). <em>Conducta del consumidor: estrategias y políticas aplicadas al marketing</em>. ESIC Editorial.',
    },
    {
      referencia:
        'Sainz de Vicuña, J. M. (2020). <em>El plan de marketing en la práctica</em> (23.ª ed.). ESIC Editorial.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Nacional Ecosistema de Recursos Educativos Digitales (RED) - Profesional 06',
          centro: 'Centro Agroturístico – Regional Santander',
        },
        {
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mario Morales Cabrera',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jair Enrique Coll Gallardo',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
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
