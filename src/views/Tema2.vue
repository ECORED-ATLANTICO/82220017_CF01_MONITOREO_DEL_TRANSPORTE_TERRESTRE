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

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.factores-slider.z-2
      .d-none.d-xl-block.col-xl-4
        figure
          img(src='@/assets/curso/temas/tema2/3.png', alt='Imagen de un mecánico')(data-aos="fade-up")
      .col-xl-8.mb-3.mb-lg-0
        SlyderF(columnas="col-md-6")
          .tarjeta.tarjeta--secundario-s5.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-11
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema2/4.png' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Jurisdicción nacional
            p.mb-4.mb-5.text-center Vías nacionales a cargo del Instituto Nacional de Vías (INVIAS) o la Agencia Nacional de Infraestructura (ANI).

          .tarjeta.tarjeta--secundario-s5.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-11
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema2/5.png' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Jurisdicción departamental
            p.mb-4.text-center Vías y corredores gestionados por las gobernaciones o secretarías de infraestructura departamental.

          .tarjeta.tarjeta--secundario-s5.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-11
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema2/6.png' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Jurisdicción municipal o distrital
            p.mb-4.text-center Calles, avenidas urbanas y rutas locales a cargo de alcaldías o secretarías de movilidad.
            
    Separador

    .fullwidth-bg.fullwidth-bg--1
    #t_2_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 2.3.	Riesgos viales del entorno

    p.z-2 Se entienden como los elementos físicos, ambientales, sociales o de infraestructura presentes en el entorno vial que pueden provocar o aumentar la probabilidad de un accidente, afectar la movilidad o comprometer la seguridad de los usuarios en la vía.
    p.z-2.mb-4.mb-lg-5 Estos riesgos no dependen directamente del conductor, sino que están relacionados con las condiciones del entorno físico, urbano o rural por donde se transita. Identificarlos es una tarea clave del monitoreo del transporte terrestre, ya que permite prevenir incidentes y tomar decisiones para mitigar sus efectos.

    //- TODO: PUNTOS CALIENTES 
    .row.justify-content-center
      .col-md-10
        ImagenInfografica.color-acento-botones.time-line-info
          template(v-slot:imagen)
            figure
              img.mb-3.d-sm-none(src='@/assets/curso/temas/tema2/7-mob.png', alt='Imagen que muestra las vias en una ciudad')
              img.mb-3.d-none.d-sm-block(src='@/assets/curso/temas/tema2/7.png', alt='Imagen que muestra las vias en una ciudad')
              figcaption <strong>Fuente</strong>:  SENA, 2025.

          .tarjeta.tarjeta--blanca.p-3(x="27%" y="16%" numero="+")
            .row.justify-content-center.align-items-center.p-2
              .col-xl-7
                .h5.mb-4 Mal estado de la vía
                p Huecos, desniveles, pavimento deteriorado o falta de mantenimiento.
              .col-xl-5.d-none.d-xl-block
                figure
                  img(src='@/assets/curso/temas/tema2/8.png', alt='Ilustracion de acompañamiento')
          .tarjeta.tarjeta--blanca.p-3(x="60%" y="25%" numero="+")
            .row.justify-content-center.align-items-center.p-2
              .col-xl-7
                .h5.mb-4 Señalización deficiente o inexistente
                p Falta de señales verticales, horizontales o semáforos en puntos críticos.
              .col-xl-5.d-none.d-xl-block
                figure
                  img(src='@/assets/curso/temas/tema2/9.png', alt='Ilustracion de acompañamiento')
          .tarjeta.tarjeta--blanca.p-3(x="65%" y="55%" numero="+")
            .row.justify-content-center.align-items-center.p-2
              .col-xl-7
                .h5.mb-4 Iluminación inadecuada
                p Calles oscuras o con luminarias dañadas que dificultan la visibilidad nocturna.
              .col-xl-5.d-none.d-xl-block
                figure
                  img(src='@/assets/curso/temas/tema2/10.png', alt='Ilustracion de acompañamiento')
          .tarjeta.tarjeta--blanca.p-3(x="40%" y="60%" numero="+")
            .row.justify-content-center.align-items-center.p-2
              .col-xl-7
                .h5.mb-4 Condiciones climáticas adversas
                p Lluvias intensas, neblina, granizo o deslizamientos que afectan la transitabilidad.
              .col-xl-5.d-none.d-xl-block
                figure
                  img(src='@/assets/curso/temas/tema2/11.png', alt='Ilustracion de acompañamiento')
          .tarjeta.tarjeta--blanca.p-3(x="25%" y="70%" numero="+")
            .row.justify-content-center.align-items-center.p-2
              .col-xl-7
                .h5.mb-4 Cruces inseguros
                p Intersecciones mal diseñadas o pasos peatonales sin control adecuado.
              .col-xl-5.d-none.d-xl-block
                figure
                  img(src='@/assets/curso/temas/tema2/12.png', alt='Ilustracion de acompañamiento')
          .tarjeta.tarjeta--blanca.p-3(x="85%" y="78%" numero="+")
            .row.justify-content-center.align-items-center.p-2
              .col-xl-7
                .h5.mb-4 Zonas de alto flujo peatonal sin protección.
                p Falta de señalización, reductores de velocidad o barreras, lo que incrementa el riesgo de atropellos y accidentes graves.
              .col-xl-5.d-none.d-xl-block
                figure
                  img(src='@/assets/curso/temas/tema2/13.png', alt='Ilustracion de acompañamiento')
          .tarjeta.tarjeta--blanca.p-3(x="35%" y="40%" numero="+")
            .row.justify-content-center.align-items-center.p-2
              .col-xl-7
                .h5.mb-4 Obstáculos en la vía
                p Escombros, animales sueltos, vehículos mal estacionados o trabajos de obra sin señalizar.
              .col-xl-5.d-none.d-xl-block
                figure
                  img(src='@/assets/curso/temas/tema2/14.png', alt='Ilustracion de acompañamiento')
          .tarjeta.tarjeta--blanca.p-3(x="70%" y="10%" numero="+")
            .row.justify-content-center.align-items-center.p-2
              .col-xl-7
                .h5.mb-4 Entorno urbano conflictivo
                p altos niveles de congestión, zonas de alto riesgo de delincuencia o aglomeraciones.
              .col-xl-5.d-none.d-xl-block
                figure
                  img(src='@/assets/curso/temas/tema2/15.png', alt='Ilustracion de acompañamiento')
    
    Separador

    .fullwidth-bg.fullwidth-bg--1
    #t_2_4(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 2.4.	Clases y aspectos técnicos de vías

    h4.graph-title.my-5.z-2(data-aos="fade-right") Clases
    p.z-2 Las clases de vías corresponden a la categoría funcional o jerarquía que se le asigna a una vía dentro del sistema vial. Esta clasificación se basa en el tipo de servicio que presta y el nivel de conectividad que ofrece.

    h4.graph-title.my-5.z-2(data-aos="fade-right") Aspectos técnicos de vías
    p.mb-4.z-2 Los aspectos técnicos son las características físicas y de diseño que debe cumplir una vía para garantizar un tránsito seguro, eficiente y adecuado al tipo de vehículo que la usa. Estos aspectos se rigen por normas técnicas como el Manual de diseño geométrico de carreteras del INVIAS y otros estándares de infraestructura vial.
    p.z-2.mb-4 Los principales aspectos técnicos de las vías son:

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.factores-slider.z-2
      .d-none.d-xl-block.col-xl-4
        figure
          img(src='@/assets/curso/temas/tema2/16.png', alt='Imagen de un mecánico')(data-aos="fade-up")
      .col-xl-8.mb-3.mb-lg-0
        SlyderF(columnas="col-md-6")
          .tarjeta.tarjeta--secundario-s5.px-4.py-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema2/17.png' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Tipo de superficie
            p.mb-4.mb-5.text-center pavimentada (asfalto, concreto) o sin pavimentar (balastro, tierra).

          .tarjeta.tarjeta--secundario-s5.px-4.py-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema2/18.png' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Ancho de calzada y carriles
            p.mb-4.text-center definido según el tipo de vía y volumen vehicular.

          .tarjeta.tarjeta--secundario-s5.px-4.py-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema2/19.png' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Pendientes, curvas y peraltes
            p.mb-4.text-center influyen en la seguridad y velocidad del tránsito.

          .tarjeta.tarjeta--secundario-s5.px-4.py-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema2/20.png' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Drenajes y obras hidráulicas
            p.mb-4.text-center permiten el manejo adecuado de aguas lluvias para proteger la vía.

          .tarjeta.tarjeta--secundario-s5.px-4.py-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema2/21.png' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Señalización vial
            p.mb-4.text-center vertical y horizontal, indispensable para la orientación y seguridad del usuario.

          .tarjeta.tarjeta--secundario-s5.px-4.py-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema2/22.png' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Capacidad estructural
            p.mb-4.text-center relacionada con el tipo de vehículos que transitan y la resistencia del pavimento.
  
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
