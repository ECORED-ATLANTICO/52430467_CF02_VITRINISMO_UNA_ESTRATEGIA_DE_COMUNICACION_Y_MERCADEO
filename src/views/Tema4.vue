<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Tipos de exhibición comercial



    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/img01.png", data-aos="zoom-in")
      .col-lg-7
        p.mb-3(data-aos="fade-right") Los tipos de exhibición comercial corresponden a las diferentes formas de organizar y presentar productos dentro de vitrinas, estanterías y espacios comerciales. 
        .bg-color-2.br-15.p-4.mb-3(data-aos="fade-right")
          .row.align-items-center.mb-0
            .col-lg-auto.d-none.d-lg-flex.order-lg-2
              img.d-none.d-lg-flex(src="@/assets/curso/tema4/img02.svg", style="").mx-auto
            .col-lg.order-lg-1
              p.mb-0 Su aplicación permite mejorar la visibilidad de los productos, fortalecer la comunicación visual y favorecer las decisiones de compra del consumidor dentro del punto de venta.

    separador
    
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Exhibición horizontal y vertical

    .bg-full-width.bg-fondo-6
      .row.mb-5.justify-content-center.align-items-center
        .col-lg-4.col-md-8.mb-4.mb-lg-0.order-lg-2
          figure
            img(src="@/assets/curso/tema4/img03.png", data-aos="zoom-in")
        .col-lg-8.order-lg-1
          p.mb-3(data-aos="fade-right") La exhibición horizontal consiste en organizar los productos de manera lateral dentro de estanterías o vitrinas, permitiendo que el consumidor observe varias referencias en un mismo nivel visual. Esta estrategia facilita la comparación de productos y mejora la percepción visual dentro del espacio comercial. 
        
          .bg-color-1.br-15.p-4.mb-3(data-aos="fade-right")
            .row.align-items-center.mb-0
              .col-lg-auto.d-none.d-lg-flex.order-lg-1
                img.d-none.d-lg-flex(src="@/assets/curso/tema4/img02.svg", style="").mx-auto
              .col-lg.order-lg-2
                p.mb-0 Por su parte, la exhibición vertical organiza los productos de arriba hacia abajo, permitiendo destacar marcas o categorías específicas dentro del punto de venta. Esta técnica favorece el recorrido visual del consumidor y facilita la identificación de productos en diferentes niveles de exhibición.

          p.mb-0 Entre las principales características de estas exhibiciones se encuentran:


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-md-12.mb-0.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-3
          h5 
            b Tabla 1.
          span Características de la exhibición horizontal y vertical
        .tabla-a.tb-custom.mb-0
          table
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th Característica
                th Exhibición horizontal
                th Exhibición vertical
                th Ejemplo
            tbody
              tr
                td Organización de productos
                td Los productos se disponen de forma continua sobre una misma repisa o nivel, facilitando la comparación entre referencias similares.
                td Los productos se organizan de arriba hacia abajo, agrupando una misma categoría o marca en diferentes niveles del exhibidor.
                td En un supermercado, una línea de cereales se exhibe horizontalmente; una marca de bebidas ocupa una columna completa de estantería.
              tr
                td Visibilidad
                td Favorece la visualización simultánea de diferentes referencias o presentaciones ubicadas en un mismo plano.
                td Incrementa la visibilidad de una marca o categoría, ya que permanece dentro del campo visual durante todo el recorrido del exhibidor.
                td En una góndola de productos de higiene, varias presentaciones se ubican horizontalmente; una marca de shampoo ocupa toda una columna vertical.
              tr
                td Aprovechamiento del espacio
                td Optimiza el uso del espacio longitudinal de estantes o góndolas, permitiendo exhibir mayor variedad de productos.
                td Aprovecha la altura del mobiliario para distribuir los productos de forma organizada y accesible.
                td En una tienda de conveniencia, los snacks se distribuyen horizontalmente; las bebidas energéticas se organizan verticalmente.
              tr
                td Experiencia del consumidor
                td Facilita la comparación de precios, tamaños y características entre productos similares durante la compra.
                td Facilita la identificación rápida de marcas o categorías, reduciendo el tiempo de búsqueda del consumidor.
                td En una tienda de tecnología, diferentes modelos de audífonos se comparan horizontalmente; una marca ocupa una columna vertical completa.
              tr
                td Aplicación comercial
                td Se utiliza cuando se busca destacar la variedad de productos y favorecer la comparación entre alternativas.
                td Se emplea para fortalecer la presencia de una marca o categoría y mejorar su reconocimiento dentro del punto de venta.
                td En una tienda de ropa, las camisetas de distintos colores se exhiben horizontalmente; una colección completa de una marca se organiza verticalmente.

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-6.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img05.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Por ejemplo, supermercados como Éxito utilizan exhibiciones horizontales y verticales para organizar productos de consumo masivo y facilitar el recorrido del consumidor dentro de los pasillos comerciales.

    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Exhibición abierta y cerrada



    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-lg-1
        figure
          img(src="@/assets/curso/tema4/img06.png", data-aos="zoom-in")
      .col-lg-8.order-lg-2
        p.mb-3(data-aos="fade-right") La exhibición abierta corresponde a la presentación de productos con acceso directo para el consumidor, permitiendo observar, manipular y seleccionar artículos libremente dentro del punto de venta. Esta estrategia favorece la interacción con los productos y estimula la compra impulsiva. 
        .bg-color-2.br-15.p-4.mb-3(data-aos="fade-right")
          .row.align-items-center.mb-0
            .col-lg-auto.d-none.d-lg-flex.order-lg-2
              img.d-none.d-lg-flex(src="@/assets/curso/tema4/img07.svg", style="").mx-auto
            .col-lg.order-lg-1
              p.mb-0 La exhibición cerrada utiliza vitrinas, separaciones físicas o sistemas de protección para resguardar productos de alto valor, delicados o exclusivos. Su aplicación permite fortalecer la seguridad y mantener una adecuada organización visual dentro del establecimiento comercial.

        p.mb-0 Entre las características de estas exhibiciones se destacan:


    
    .bg-full-width.bg-fondo-4.px-5.pt-4.pb-4.mb-5.br-15
      .tarjeta.row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
          img(src='@/assets/curso/tema4/img08.png', alt='')
        .col-lg-7.col-md-12.p-3.order-2.order-lg-1
          SlyderA(tipo="b").bg-color-white.p-0.p-lg-4.tarjeta
            .row.justify-content-center.align-items-center.p-4.p-lg-3
              .col-lg-12
                h4.mb-3 Acceso al producto
                p.mb-0 Facilita que el consumidor observe, manipule y seleccione los productos de manera rápida y cómoda.

            .row.justify-content-center.align-items-center.p-4.p-lg-3
              .col-lg-12
                h4.mb-3 Protección del producto
                p.mb-0 Resguarda los productos frente a daños, contaminación, manipulación indebida o posibles pérdidas.

            .row.justify-content-center.align-items-center.p-4.p-lg-3
              .col-lg-12
                h4.mb-3 Presentación comercial
                p.mb-0 Mejora la apariencia de los productos para comunicar orden, calidad y atractivo visual.

            .row.justify-content-center.align-items-center.p-4.p-lg-3
              .col-lg-12
                h4.mb-3 Organización visual
                p.mb-0 Distribuye los productos de forma lógica para facilitar su identificación y mejorar la experiencia de compra.

            .row.justify-content-center.align-items-center.p-4.p-lg-3
              .col-lg-12
                h4.mb-3 Adaptabilidad de la exhibición
                p.mb-0 Permite ajustar la exhibición según las características, dimensiones y necesidades de cada producto.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        .bg-fondo-3.br-15.px-5.py-4
          p.mb-0 Por ejemplo, tiendas de tecnología como Apple Store utilizan exhibiciones abiertas para productos de interacción directa y exhibiciones cerradas para accesorios o equipos de mayor valor comercial.

    separador
    
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Exhibiciones promocionales y temáticas

    .bg-full-width.bg-fondo-5
      .row.mb-5.justify-content-center.align-items-center
        .col-lg-4.col-md-8.mb-4.mb-lg-0.order-lg-1
          figure
            img(src="@/assets/curso/tema4/img09.png", data-aos="zoom-in")
        .col-lg-8.order-lg-2
          p.mb-3(data-aos="fade-right") Las exhibiciones promocionales se utilizan para destacar productos en oferta, lanzamientos o campañas comerciales dentro del punto de venta. Estas exhibiciones buscan captar la atención del consumidor mediante colores llamativos, señalización comercial y material publicitario estratégico.
          .bg-color-3.br-15.p-4.mb-3(data-aos="fade-right")
            .row.align-items-center.mb-0
              .col-lg-auto.d-none.d-lg-flex.order-lg-2
                img.d-none.d-lg-flex(src="@/assets/curso/tema4/img10.svg", style="").mx-auto
              .col-lg.order-lg-1
                p.mb-0 Las exhibiciones temáticas corresponden a montajes visuales desarrollados según temporadas, celebraciones o eventos especiales. Su finalidad es generar experiencias visuales atractivas y fortalecer la comunicación comercial mediante ambientaciones relacionadas con fechas o campañas específicas.
          p.mb-0 Entre las principales características de estas exhibiciones se encuentran:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema4/img11.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1
    
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-31")
          div(titulo="Promoción comercial")
            p.ms-1.ms-lg-5 Resalta productos, lanzamientos o promociones mediante recursos visuales que incrementan su visibilidad, atraen la atención del consumidor y favorecen el cumplimiento de los objetivos comerciales.

          div(titulo="Apoyo a campañas")
            p.ms-1.ms-lg-5 Refuerza campañas comerciales y temporadas especiales mediante elementos gráficos y exhibiciones temáticas que comunican mensajes coherentes con las estrategias de mercadeo de la organización.

          div(titulo="Impacto visual")
            p.ms-1.ms-lg-5 Capta la atención del consumidor mediante la combinación de colores, iluminación, formas y recursos gráficos que generan una impresión atractiva y favorecen el interés por los productos.

          div(titulo="Experiencia de compra")
            p.ms-1.ms-lg-5 Contribuye a crear un ambiente organizado, atractivo y funcional que facilita el recorrido del consumidor y mejora su interacción con los productos y la marca.

          div(titulo="Posicionamiento de marca")
            p.ms-1.ms-lg-5 Fortalece el reconocimiento y la recordación de la marca mediante una exhibición coherente con su identidad visual, diferenciándola de la competencia y reforzando su presencia comercial.

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-6.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Por ejemplo, almacenes como Falabella y Pepe Ganga implementan exhibiciones promocionales y temáticas durante temporadas escolares, navideñas y campañas comerciales especiales para incrementar las ventas y fortalecer la experiencia del consumidor.











</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
