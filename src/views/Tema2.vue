<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Infraestructura vial

    figure
      img(data-aos="fade-up")(src="@/assets/curso/temas/tema2/1.png" alt="Imagen decorativa")

    Separador

    #t_2_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 2.1.	Definición

    p.mb-4 La infraestructura vial constituye un componente esencial para comprender el funcionamiento del sistema de movilidad. Se refiere al conjunto de elementos físicos construidos para permitir, facilitar y regular el tránsito de vehículos, peatones y otros medios de transporte sobre el territorio.
    .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8.mb-4.mb-lg-0
          .bloque-texto-a__texto.p-4
            p La infraestructura vial incluye carreteras, calles, avenidas, puentes, túneles, andenes, intersecciones, ciclovías, pasos peatonales y señalización, entre otros. Su calidad, diseño y mantenimiento influyen directamente en la seguridad vial, la eficiencia del transporte, el confort de los usuarios y el desarrollo económico de las regiones. Desde una perspectiva de monitoreo, el análisis de la infraestructura vial permite identificar puntos críticos, detectar fallas o riesgos, y proponer acciones correctivas o de mejora. Además, posibilita planificar con mayor precisión la operación de rutas, tiempos de recorrido, mantenimiento preventivo y asignación de recursos.
        .col-lg-4.mb-4.mb-lg-0
          figure
            img.mb-4.mb-lg-0(data-aos="fade-up")(src='@/assets/curso/temas/tema2/2.png', alt='Imagen decorativa')

    Separador

    #t_2_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 2.2.	Nomenclatura de la jurisdicción
  
    p.mb-4 Se refiere al nombre y tipo de entidad o nivel de autoridad que tiene competencia sobre un determinado territorio o vía terrestre. Esto es clave para saber quién tiene responsabilidad legal y operativa sobre la gestión, señalización, mantenimiento, control y monitoreo del transporte terrestre en cada zona.
    p Ejemplos de la jurisdicción en Colombia:

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
