<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src="@/assets/curso/intro.png" alt="Imagen decorativa")
      .col-lg-8
        p.mb-0 El componente formativo Movilidad Inteligente y Circulación Segura, abarca la integralidad del transporte terrestre, desde su historia y concepto hasta su tipología, la normativa que lo rige y los diversos medios de transporte utilizados. Asimismo, se profundiza en la infraestructura vial, detallando su definición, la nomenclatura de la jurisdicción, los riesgos viales del entorno, y las clases y aspectos técnicos de vías. Un pilar fundamental es la educación vial, que promueve principios, valores ciudadanos, la convivencia vial y hábitos seguros al desplazarse como conductor, peatón o pasajero. Por tal razón, se analiza el Código Nacional de Tránsito, sus principios, autoridades, registro de información de conductores, licencias y condiciones del vehículo, y los seguros y responsabilidades del vehículo, culminando con los estatus nacionales del transporte, las normas según tipo de transporte, límites de velocidad, tipos de infracción y sanciones.

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
