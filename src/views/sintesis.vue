<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src="@/assets/curso/intro.png" alt="Imagen decorativa")
      .col-lg-8
        p.mb-0 La transformación de las ciudades actuales y el crecimiento constante de la población han generado nuevos desafíos en cuanto a la forma en que nos desplazamos. En este sentido, la movilidad inteligente y la circulación segura se presentan como ejes fundamentales para mejorar la calidad de vida urbana, reducir los impactos ambientales y garantizar la seguridad de todos los actores viales. Este componente formativo tiene como propósito brindar los conocimientos necesarios para comprender y aplicar estrategias innovadoras que integren tecnología, sostenibilidad y responsabilidad ciudadana en los sistemas de transporte, promoviendo entornos más eficientes, accesibles y seguros para la comunidad. al aprendiz de fundamentos que le permitan interpretar su realidad empresarial con mayor claridad y proyección.

    .row.justify-content-center
      .col-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
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
