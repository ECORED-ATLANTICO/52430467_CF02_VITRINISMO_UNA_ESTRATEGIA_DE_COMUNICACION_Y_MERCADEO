<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width.bg-fondo-1.px-5.py-4
      .row.mb-5.justify-content-center.align-items-center
        .col-lg-5.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
          figure
            img(src="@/assets/curso/intro/img02.png", data-aos="zoom-in")
        .col-lg-7.order-2.order-lg-1

          .row.align-items-center.mb-4
            .col-lg-auto.d-none.d-lg-flex
              img.d-none.d-lg-flex(src="@/assets/curso/intro/img01.svg", style="").mx-auto
            .col-lg
              p.mb-0 El componente formativo Estrategias de exhibición aborda el estudio de las técnicas y herramientas utilizadas en la organización visual de productos y marcas dentro de espacios comerciales. En este contexto, las estrategias de exhibición permiten fortalecer la comunicación comercial, mejorar la experiencia del consumidor y favorecer el posicionamiento de productos mediante recursos visuales y promocionales aplicados al punto de venta.

          .bg-color-1.br-15.p-4.mb-0
            p.mb-0(data-aos="fade-left") A través del desarrollo de este componente se analizan conceptos relacionados con estrategias de venta y exhibición, elementos informativos, material publicitario y servicios logísticos aplicados al <em>merchandising</em> y la exhibición comercial. Asimismo, se estudian tipos de exhibición y espacios estratégicos utilizados en vitrinas y establecimientos comerciales para fortalecer la presentación visual de productos y marcas.

      p.mb-0 De igual manera, el componente integra estrategias de comunicación y mercadeo visual orientadas a mejorar el impacto comercial y fortalecer las decisiones de compra del consumidor. A lo largo del desarrollo temático se abordarán conceptos, herramientas y aplicaciones prácticas que contribuirán al diseño de exhibiciones comerciales más organizadas, atractivas y funcionales dentro del punto de venta.


</template>

<script>
export default {
  name: 'Introduccion',
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
