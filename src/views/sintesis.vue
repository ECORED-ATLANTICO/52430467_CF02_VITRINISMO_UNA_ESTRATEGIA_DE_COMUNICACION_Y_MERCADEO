<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo Estrategias de exhibición aborda las estrategias de venta y exhibición, la promoción visual y la relación entre <em>merchandising</em> y ventas; continúa con los elementos informativos, material publicitario y recursos visuales aplicados en vitrinas; y desarrolla servicios logísticos internos, externos y apoyo en montaje comercial. Asimismo, analiza tipos y sitios de exhibición comercial, incluyendo vitrinas, exhibiciones horizontales, verticales, abiertas, cerradas, promocionales y temáticas; y finaliza con la comunicación y el mercadeo visual mediante estrategias visuales, aplicación comercial, impacto en ventas y ejemplos comerciales aplicados.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El componente formativo Estrategias de exhibición aborda las estrategias de venta y exhibición, la promoción visual y la relación entre merchandising y ventas; continúa con los elementos informativos, material publicitario y recursos visuales aplicados en vitrinas; y desarrolla servicios logísticos internos, externos y apoyo en montaje comercial. Asimismo, analiza tipos y sitios de exhibición comercial, incluyendo vitrinas, exhibiciones horizontales, verticales, abiertas, cerradas, promocionales y temáticas; y finaliza con la comunicación y el mercadeo visual mediante estrategias visuales, aplicación comercial, impacto en ventas y ejemplos comerciales aplicados. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
