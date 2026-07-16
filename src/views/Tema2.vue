<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Elementos informativos de exhibición


    .row.mb-5.justify-content-center.align-items-center.bg-color-7
      .col-lg-5.mb-4.mb-lg-0.p-0.col-md-8
        figure
          img(src="@/assets/curso/tema2/img01.png", data-aos="zoom-in")
      .col-lg-7
        p.mb-0(data-aos="fade-right") Los elementos informativos de exhibición corresponden a recursos visuales y comunicativos utilizados para transmitir información comercial dentro del punto de venta. Su aplicación permite orientar al consumidor, destacar productos y fortalecer estrategias promocionales mediante mensajes visuales organizados y atractivos.

    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Tipos de elementos informativos


    .row.align-items-center.mb-5.bg-color-2.p-4.br-15
      .col-lg-auto.d-none.d-lg-flex.order-lg-2
        img(src="@/assets/curso/tema2/img02.svg", style="").mx-auto
      .col-lg.order-lg-1
        p.mb-0 Los elementos informativos permiten comunicar características, promociones y beneficios de productos o servicios dentro de vitrinas y espacios comerciales. Estos recursos facilitan la interacción entre el consumidor y el establecimiento comercial, favoreciendo la experiencia de compra y la identificación visual de productos.

    p.mb-5 Entre los principales tipos de elementos informativos se encuentran:

    .bg-full-width.bg-fondo-4.px-5.pt-4.pb-4.mb-5.br-15
      .tarjeta.row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
          img(src='@/assets/curso/tema2/img04.png', alt='')
        .col-lg-7.col-md-12.p-3.order-2.order-lg-1
          SlyderA(tipo="b").bg-color-white.p-0.p-lg-4.tarjeta
            .row.justify-content-center.align-items-center.p-4.p-lg-3
              .col-lg-12
                h4.mb-3 Avisos comerciales
                p.mb-0 Recursos gráficos y textuales utilizados para transmitir información relevante sobre productos, servicios y promociones, facilitando la orientación del consumidor y reforzando la comunicación comercial de la marca.

            .row.justify-content-center.align-items-center.p-4.p-lg-3
              .col-lg-12
                h4.mb-3 Etiquetas informativas
                p.mb-0 Elementos que presentan datos esenciales sobre los productos, como precio, características, beneficios, referencias o instrucciones, facilitando la consulta, comparación y toma de decisiones del consumidor durante el proceso de compra.

            .row.justify-content-center.align-items-center.p-4.p-lg-3
              .col-lg-12
                h4.mb-3 Afiches promocionales
                p.mb-0 Piezas gráficas diseñadas para comunicar campañas, lanzamientos, eventos o promociones mediante mensajes visuales y textuales, fortaleciendo la difusión de información comercial y el reconocimiento de productos, servicios o marcas.

            .row.justify-content-center.align-items-center.p-4.p-lg-3
              .col-lg-12
                h4.mb-3 Pendones publicitarios
                p.mb-0 Soportes gráficos verticales que presentan información institucional, promocional o comercial de forma visible y organizada, contribuyendo a la difusión de campañas, el posicionamiento de la marca y la orientación del público.

            .row.justify-content-center.align-items-center.p-4.p-lg-3
              .col-lg-12
                h4.mb-3 Material POP
                p.mb-0 Conjunto de piezas informativas y promocionales ubicadas en el punto de venta para comunicar atributos, beneficios o campañas, fortalecer la presencia de la marca y apoyar la interacción del consumidor con los productos.


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        .bg-fondo-3.br-15.px-5.py-4
          p.mb-0 Estos elementos son utilizados en almacenes, supermercados y establecimientos comerciales para orientar el recorrido del consumidor y fortalecer la comunicación visual dentro del punto de venta.

    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Material publicitario para exhibición
  

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img05.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-3(data-aos="fade-right") El material publicitario corresponde al conjunto de recursos gráficos y promocionales utilizados para destacar productos, marcas y campañas comerciales dentro de espacios de exhibición. Su finalidad es captar la atención del consumidor y fortalecer el posicionamiento visual de los productos en el mercado.
        .bg-color-2.br-15.p-4.mb-3.shadow-sm(data-aos="fade-right")
          .row.align-items-center.mb-0
            .col-lg-auto.d-none.d-lg-flex.order-lg-2
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/img06.svg", style="").mx-auto
            .col-lg.order-lg-1
              p.mb-0 Las empresas utilizan diferentes materiales publicitarios según el tipo de producto, el espacio comercial y la estrategia de comunicación implementada. Una adecuada selección de recursos publicitarios contribuye a mejorar la presentación visual y aumentar el impacto comercial.
        p.mb-0 Entre los materiales publicitarios más utilizados se encuentran:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-4.mb-lg-0.col-md-8.order-2.order-lg-2
        figure
          img(src="@/assets/curso/tema2/img07.png", data-aos="zoom-in")
      .col-lg-8.order-1.order-lg-1.col-md-12.mb-4.mb-lg-0
        SlyderF(columnas="col-lg-6 col-xl-6 col-md-12 col-sm-12")
          .tarjeta.shadow-sm.p-4.h-100(style="box-shadow: 15px 15px 15px 15px #707070")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img08.svg' alt='', style="width: 100px; height: 100px; ").mx-auto
            h4.text-center Volantes promocionales
            p.text-center Material impreso de fácil distribución que comunica promociones, eventos, productos o servicios mediante información breve y atractiva, con el propósito de captar la atención del público y generar interés comercial.

          .tarjeta.shadow-sm.p-4.h-100(style="box-shadow: 15px 15px 15px 15px #707070")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img09.svg' alt='', style="width: 100px; height: 100px; ").mx-auto
            h4.text-center Carteles publicitarios
            p.text-center Piezas gráficas de mediano o gran formato que presentan mensajes comerciales de manera visible, utilizando imágenes y textos para informar, promocionar o fortalecer el reconocimiento de una marca.

          .tarjeta.shadow-sm.p-4.h-100(style="box-shadow: 15px 15px 15px 15px #707070")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img10.svg' alt='', style="width: 100px; height: 100px; ").mx-auto
            h4.text-center Exhibidores comerciales
            p.text-center Estructuras diseñadas para organizar y presentar productos de forma ordenada y atractiva, facilitando su visualización, acceso y destacando sus características dentro del punto de venta.

          .tarjeta.shadow-sm.p-4.h-100(style="box-shadow: 15px 15px 15px 15px #707070")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img11.svg' alt='', style="width: 100px; height: 100px; ").mx-auto
            h4.text-center Displays publicitarios
            p.text-center Estructuras gráficas o tridimensionales que exhiben productos o mensajes comerciales de manera llamativa, incrementando su visibilidad y fortaleciendo la comunicación de la marca en diferentes espacios comerciales.

    .bloque-texto-g.bg-color-6.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Por ejemplo, marcas como Coca-Cola utilizan material publicitario visual y exhibidores promocionales para fortalecer campañas comerciales y aumentar la visibilidad de sus productos en supermercados y tiendas.
            
    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Aplicación de elementos visuales en vitrinas


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img13.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-3(data-aos="fade-right") Los elementos visuales en vitrinas permiten organizar productos y comunicar mensajes comerciales mediante recursos como iluminación, color, señalización y decoración. Su adecuada aplicación favorece la percepción visual del consumidor y fortalece la experiencia comercial dentro del establecimiento.
        .bg-color-1.br-15.p-4.mb-3.shadow-sm(data-aos="fade-right")
          .row.align-items-center.mb-0
            .col-lg-auto.d-none.d-lg-flex.order-lg-2
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/img14.svg", style="").mx-auto
            .col-lg.order-lg-1
              p.mb-0 Las vitrinas comerciales utilizan elementos visuales para destacar productos estratégicos, fortalecer campañas promocionales y generar impacto visual en el consumidor. La combinación de colores, iluminación y organización visual influye directamente en la atención y comportamiento de compra de los clientes.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema2/img15.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1
    
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-31")
          div(titulo="Iluminación comercial")
            p.ms-5 Sistema de iluminación diseñado para resaltar productos, crear ambientes atractivos, dirigir la atención del consumidor y mejorar la percepción visual de la vitrina y sus elementos.

          div(titulo="Colores corporativos")
            p.ms-5 Conjunto de colores que representan la identidad visual de una marca, fortaleciendo su reconocimiento, diferenciación y coherencia en la comunicación gráfica y comercial de la vitrina.

          div(titulo="Señalización visual")
            p.ms-5 Elementos gráficos que orientan, informan o destacan áreas, productos y promociones mediante símbolos, colores y textos, facilitando la comprensión y el recorrido visual del consumidor.

          div(titulo="Elementos decorativos")
            p.ms-5 Objetos ornamentales utilizados para complementar la composición visual de la vitrina, reforzar la temática de exhibición y generar ambientes acordes con la identidad de la marca.

          div(titulo="Maniquíes y exhibidores")
            p.ms-5 Recursos utilizados para presentar productos de forma organizada y atractiva, permitiendo visualizar su uso, resaltar sus características y mejorar el impacto visual de la exhibición.

          div(titulo="Recursos gráficos promocionales")
            p.ms-5 Elementos visuales, como imágenes, ilustraciones, textos y símbolos, diseñados para comunicar campañas, promociones o mensajes comerciales que fortalecen la comunicación y el atractivo de la vitrina.


    .row.mb-0.justify-content-center.align-items-center
      .col-lg-10
        .tarjeta.bg-color-2.p-4
          .row.justify-content-around.align-items-center
            .col-md-12.col-lg-3.mb-4.mb-lg-0
              img(src="@/assets/curso/tema1/img27.svg", style="max-width:120px !important").mx-auto
            .col-md-12.col-lg-9
              .row.justify-content-center.align-items-center
                .col.mb-4.mb-lg-0
                  p.mb-0 Se invita a consultar el siguiente video donde se explican elementos informativos de exhibición, material publicitario y aplicación de recursos visuales en vitrinas y puntos de venta:
                .col-sm-auto.text-align-last
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=iW35vsn1lc0" target="_blank")
                    span Ver video
                    i.fas.fa-play

    



</template>

<script>
export default {
  name: 'Tema2',
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
