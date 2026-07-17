<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Comunicación y mercadeo visual


    .bg-fondo-2.px-5.py-4
      img(src="@/assets/curso/tema6/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-11(data-aos="fade-right")
        p.banner-text La comunicación y el mercadeo visual corresponden al conjunto de estrategias utilizadas para transmitir mensajes comerciales mediante recursos gráficos, colores, iluminación, imágenes y elementos visuales dentro del punto de venta. Su aplicación permite fortalecer la identidad de marca, mejorar la experiencia del consumidor y aumentar el impacto comercial de productos y servicios.

    separador
    
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Estrategias visuales

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-lg-1
        figure
          img(src="@/assets/curso/tema6/img02.png", data-aos="zoom-in")
      .col-lg-8.order-lg-2
        p.mb-3(data-aos="fade-right") Las estrategias visuales son acciones orientadas a captar la atención del consumidor y fortalecer la presentación de productos mediante recursos gráficos y visuales organizados estratégicamente. Estas estrategias permiten comunicar promociones, destacar productos y generar experiencias comerciales más atractivas dentro del establecimiento.
        .bg-color-1.br-15.p-4.mb-3.shadow-sm(data-aos="fade-right")
          .row.align-items-center.mb-0
            .col-lg-auto.d-none.d-lg-flex.order-lg-2
              img.d-none.d-lg-flex(src="@/assets/curso/tema6/img03.svg", style="").mx-auto
            .col-lg.order-lg-1
              p.mb-0 Las empresas implementan estrategias visuales para fortalecer la percepción de marca y mejorar la interacción del consumidor con los espacios comerciales. La adecuada combinación de colores, iluminación, distribución y señalización contribuye a mejorar la organización visual del punto de venta.
        p.mb-0 Entre las principales estrategias visuales se encuentran:


    .bg-full-width.bg-fondo-5
      .row.mb-5.justify-content-center.align-items-center
        .col-lg-4.mb-4.mb-lg-0.col-md-8.order-2.order-lg-2
          figure
            img(src="@/assets/curso/tema6/img04.png", data-aos="zoom-in")
        .col-lg-8.order-1.order-lg-1.col-md-12.mb-4.mb-lg-0
          SlyderF(columnas="col-lg-6 col-xl-6 col-md-12 col-sm-12")
            .tarjeta.tarjeta--blanca.shadow-sm.p-0.h-100
              img(src='@/assets/curso/tema6/img05.png' alt='').mx-auto
              .p-4
                h4.text-center Uso de iluminación comercial
                p.text-center Emplea diferentes tipos de iluminación para resaltar productos, crear ambientes atractivos y dirigir la atención del consumidor hacia áreas estratégicas del punto de venta.
                p.text-center.mb-0 <strong>Ejemplo:</strong> iluminación LED focal sobre una vitrina de calzado deportivo para destacar una nueva colección.
            .tarjeta.tarjeta--blanca.shadow-sm.p-0.h-100
              img(src='@/assets/curso/tema6/img06.png' alt='').mx-auto
              .p-4
                h4.text-center Aplicación de colores corporativos
                p.text-center Incorpora los colores institucionales de la marca en la exhibición para fortalecer su identidad visual, facilitar el reconocimiento y mantener coherencia en la comunicación comercial.
                p.text-center.mb-0 <strong>Ejemplo:</strong> una tienda de Colgate utiliza el color rojo en exhibidores, señalización y material promocional.
            .tarjeta.tarjeta--blanca.shadow-sm.p-0.h-100
              img(src='@/assets/curso/tema6/img07.png' alt='').mx-auto
              .p-4
                h4.text-center Distribución estratégica de productos
                p.text-center Organiza los productos según criterios comerciales, categorías o niveles de visibilidad para optimizar el recorrido del consumidor y favorecer la compra.
                p.text-center.mb-0 <strong>Ejemplo:</strong> los productos de mayor rotación se ubican a la altura de los ojos en las góndolas.
            .tarjeta.tarjeta--blanca.shadow-sm.p-0.h-100
              img(src='@/assets/curso/tema6/img08.png' alt='').mx-auto
              .p-4
                h4.text-center Implementación de vitrinas temáticas
                p.text-center Diseña vitrinas basadas en campañas, temporadas o conceptos comerciales que integran productos y elementos decorativos para atraer la atención del público.
                p.text-center.mb-0 <strong>Ejemplo:</strong> una vitrina navideña exhibe regalos, decoración y productos de temporada con ambientación alusiva.
            .tarjeta.tarjeta--blanca.shadow-sm.p-0.h-100
              img(src='@/assets/curso/tema6/img09.png' alt='').mx-auto
              .p-4
                h4.text-center Uso de señalización comercial
                p.text-center Utiliza elementos gráficos e informativos para orientar al consumidor, identificar categorías, comunicar promociones y facilitar la ubicación de productos dentro del establecimiento.
                p.text-center.mb-0 <strong>Ejemplo:</strong> señales suspendidas indican las secciones de alimentos, aseo, bebidas y productos en oferta.
            .tarjeta.tarjeta--blanca.shadow-sm.p-0.h-100
              img(src='@/assets/curso/tema6/img10.png' alt='').mx-auto
              .p-4
                h4.text-center Aplicación de material gráfico promocional
                p.text-center Integra afiches, pendones, carteles y otros recursos gráficos para comunicar campañas, promociones y beneficios, fortaleciendo la visibilidad de productos y marcas.
                p.text-center.mb-0 <strong>Ejemplo:</strong> pendones y afiches anuncian descuentos especiales durante una campaña de aniversario del almacén.


    .bloque-texto-g.bg-color-6.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/img11.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Por ejemplo, marcas como Apple y Samsung utilizan estrategias visuales organizadas y minimalistas para fortalecer la percepción de innovación y tecnología dentro de sus establecimientos comerciales.

    separador
    
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Aplicación de estrategias comerciales    

    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema6/img12.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.br-15.p-4.mb-3.shadow-sm(data-aos="fade-right")
          p.mb-0 La aplicación de estrategias comerciales permite integrar técnicas de exhibición, promoción visual y organización de productos para fortalecer las ventas y mejorar la experiencia del consumidor dentro del punto de venta. Estas estrategias buscan aumentar la visibilidad de productos y favorecer el posicionamiento comercial de las marcas. Las empresas desarrollan estrategias comerciales según el tipo de producto, comportamiento del consumidor y objetivos de venta establecidos dentro de la organización. La adecuada aplicación de estas estrategias permite optimizar espacios comerciales y fortalecer la comunicación visual con los clientes.


    p.mb-5 Entre las principales aplicaciones de estrategias comerciales se encuentran:

    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10.col-md-12.mb-0.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-3
          h5 
            b Tabla 2.
          span Aplicaciones de estrategias comerciales
        .tabla-a.color-acento-contenido.mb-0
          table
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th Aplicación de la estrategia comercial
                th Concepto
                th Ejemplo
            tbody
              tr
                td.text-bold Promoción de productos estratégicos
                td Consiste en destacar productos prioritarios mediante exhibiciones, promociones y recursos visuales que incrementan su visibilidad y favorecen el cumplimiento de los objetivos comerciales.
                td Una cabecera de góndola exhibe productos de alta rotación con descuentos y señalización promocional.
              tr
                td.text-bold Implementación de campañas visuales
                td Integra elementos gráficos, colores, iluminación y mensajes promocionales para comunicar campañas comerciales de manera coherente y fortalecer la interacción con el consumidor.
                td Una campaña de regreso a clases utiliza afiches, pendones y vitrinas con productos escolares.
              tr
                td.text-bold Organización de espacios promocionales
                td Distribuye estratégicamente áreas de exhibición para presentar promociones, facilitar el recorrido del consumidor y optimizar la visibilidad de los productos destacados.
                td Una isla promocional reúne productos relacionados con una temporada especial en el centro del almacén.
              tr
                td.text-bold Ubicación estratégica de productos
                td Organiza los productos según su rotación, rentabilidad o demanda para aumentar su exposición y facilitar su identificación durante el proceso de compra.
                td Los productos de mayor margen comercial se ubican a la altura de los ojos en las góndolas.
              tr
                td.text-bold Desarrollo de exhibiciones temáticas
                td Diseña exhibiciones basadas en temporadas, eventos o campañas comerciales para comunicar un concepto visual atractivo y fortalecer la experiencia del consumidor.
                td Una vitrina temática de Halloween integra decoración, iluminación y productos alusivos a la temporada.
              tr
                td.text-bold Fortalecimiento de la identidad visual de marca
                td Aplica de forma coherente los elementos visuales de la marca para mejorar su reconocimiento, diferenciación y posicionamiento dentro del establecimiento comercial.
                td Una zona exclusiva de una marca utiliza sus colores, logotipo, mobiliario y señalización corporativa.


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .bg-fondo-3.br-15.px-5.py-4
          p.mb-0 Por ejemplo, almacenes como Falabella y Homecenter desarrollan campañas visuales y promociones estratégicas para fortalecer temporadas comerciales y aumentar el flujo de consumidores dentro de sus establecimientos.
          
    separador
    
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.3 Impacto en ventas

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-lg-1
        figure
          img(src="@/assets/curso/tema6/img13.png", data-aos="zoom-in")
      .col-lg-8.order-lg-2
        p.mb-3(data-aos="fade-right") El impacto visual dentro del punto de venta influye directamente en las decisiones de compra y en el comportamiento del consumidor. Una adecuada organización visual permite captar la atención, destacar promociones y generar experiencias comerciales que favorecen el incremento de ventas y el posicionamiento de productos y marcas.
        .bg-color-2.br-15.p-4.mb-0.shadow-sm(data-aos="fade-right")
          .row.align-items-center.mb-0
            .col-lg-auto.d-none.d-lg-flex.order-lg-2
              img.d-none.d-lg-flex(src="@/assets/curso/tema6/img14.svg", style="").mx-auto
            .col-lg.order-lg-1
              p.mb-0 Las estrategias de comunicación y mercadeo visual contribuyen al aumento de la rentabilidad comercial debido a que fortalecen la percepción del consumidor y mejoran la presentación de los productos dentro del establecimiento. La combinación de recursos visuales y promocionales permite generar ambientes comerciales más atractivos y funcionales.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.col-md-8.mb-4.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema6/img15.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        p.mb-3(data-aos="fade-right") Entre los principales beneficios del impacto visual en ventas se encuentran:

        ul.lista-ul--color.mb-3
          li 
            i.fas.fa-circle-check
            | Aumento de visibilidad de productos.
          li 
            i.fas.fa-circle-check
            | Incremento de compras impulsivas.
          li 
            i.fas.fa-circle-check
            | Mejora de la experiencia del consumidor.
          li 
            i.fas.fa-circle-check
            | Fortalecimiento del posicionamiento de marca.
          li 
            i.fas.fa-circle-check
            | Mayor atracción de clientes al establecimiento.
          li 
            i.fas.fa-circle-check
            | Incremento de ventas comerciales.


        .bg-fondo-3.br-15.p-4
          p.mb-0 Por ejemplo, supermercados como Carulla utilizan estrategias visuales y exhibiciones organizadas para destacar productos premium y fortalecer la experiencia de compra de los consumidores.
    
    .bg-full-width.bg-fondo-5
      .container
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10.order-lg-1
            .row.bg-color-18.align-items-center.justify-content-center.br-15.p-4
              .col-md-6.col-lg-4.mb-3.mb-lg-0.order-2.order-md-2.order-lg-1
                figure
                  img(src="@/assets/curso/tema5/img16.svg", data-aos="fade-right")
              .col-lg-8.order-1.order-md-1.order-lg-2.p-4.p-lg-3
                p(data-aos="fade-left").mb-4.text-white Se invita al pódcast “Comunicación visual”, estrategias de marketing y mercadeo visual aplicados al posicionamiento de marcas y exhibición comercial.
                TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
                  texto="Comunicación visual"
                  tiempo
                  :audio="require('@/assets/curso/audio/2.mp3')"
                )







</template>

<script>
export default {
  name: 'Tema6',
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
