<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Ejemplo comercial aplicado


    .bg-full-width.bg-fondo-5
      .container
        .row.mb-5.justify-content-center.align-items-center.bg-color-8
          .col-lg-5.mb-4.mb-lg-0.p-0.col-md-12
            figure
              img(src="@/assets/curso/tema7/img01.png", data-aos="zoom-in")
          .col-lg-7.p-4.p-lg-2
            p.mb-0(data-aos="fade-right") El componente formativo presenta un ejemplo comercial aplicado, el cual tiene como propósito analizar la implementación de estrategias de exhibición, vitrinismo y <em>merchandising</em> dentro de un punto de venta real, permitiendo identificar la aplicación de elementos visuales, promocionales y logísticos orientados al fortalecimiento de la comunicación comercial y la experiencia del consumidor. Asimismo, busca relacionar los aspectos teóricos desarrollados en el componente formativo con situaciones prácticas presentes en establecimientos comerciales.

      .row.mb-0.justify-content-center.align-items-center
        .col-lg-10
          .tarjeta.bg-color-7.p-4
            .row.justify-content-around.align-items-center
                .col-md-12.col-lg-3.mb-4.mb-lg-0.text-center
                  img(src="@/assets/curso/tema7/img02.svg", style="max-width:120px !important").mx-auto
                .col-md-12.col-lg-6.mb-4.mb-lg-0.text-center.text-lg-start
                  h4.text-bold Estrategias de exhibición: Fashion Urban
                  p.mb-0 Lo invitamos a descargar el siguiente documento, el cual explica de manera detallada los diferentes componentes de un plan de negocios.
                .col-md-12.col-lg-3.text-center.text-lg-end
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/anexos/Anexo1_Estrategias_de_exhibición_Fashion_Urban.pdf')" target="_blank")
                    span Enlace
                    i.fas.fa-link


</template>

<script>
export default {
  name: 'Tema7',
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
