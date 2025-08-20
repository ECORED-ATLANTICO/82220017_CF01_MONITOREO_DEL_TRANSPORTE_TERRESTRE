<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src="@/assets/curso/intro.png" alt="Imagen decorativa")
      .col-lg-8
        p.mb-0 La transformación de las ciudades actuales y el crecimiento constante de la población han generado nuevos desafíos en cuanto a la forma en que nos desplazamos. En este sentido, la movilidad inteligente y la circulación segura se presentan como ejes fundamentales para mejorar la calidad de vida urbana, reducir los impactos ambientales y garantizar la seguridad de todos los actores viales. Este componente formativo tiene como propósito brindar los conocimientos necesarios para comprender y aplicar estrategias innovadoras que integren tecnología, sostenibilidad y responsabilidad ciudadana en los sistemas de transporte, promoviendo entornos más eficientes, accesibles y seguros para la comunidad. al aprendiz de fundamentos que le permitan interpretar su realidad empresarial con mayor claridad y proyección.

    .video.mb-2
      iframe(width="560" height="315" src="https://www.youtube.com/embed/hCZxnw4K5cw" title="Movilidad inteligente y circulación segura" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen)
    figcaption <strong>Video:</strong> Movilidad inteligente y circulación segura.

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
