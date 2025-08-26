<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Transporte terrestre

    #t_1_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 1.1.	Historia del transporte terrestre

    .row.align-items-center.justify-content-center.bg-color-acento-ac5.p-3.py-xl-0.mb-4
      .col-lg-5.ps-xl-0
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src='@/assets/curso/temas/tema1/1.png', alt='Imagen decorativa')
      .col-lg-7
        p.mb-0 El transporte desde los primeros tiempos de la civilización ha sido una necesidad fundamental. Es por ello por lo que inicialmente, los desplazamientos se realizaban a pie, seguidos por el uso de animales domesticados como medio de carga y transporte de la época. Con el tiempo, surgieron tecnologías como la rueda (alrededor del 3500 a.C.), lo que marcó un antes y un después en la capacidad de mover personas y movilizar las mercancías. Las civilizaciones antiguas, como la egipcia y la romana, desarrollaron redes de caminos que sirvieron de base para los sistemas de transporte terrestre que conocemos hoy.

    p.mb-4.mb-lg-5 Durante la Revolución Industrial la necesidad de mover más carga hizo que el transporte tuviese una transformación radical con la invención de la locomotora de vapor, posteriormente, el automóvil y el avión, que permitieron la conexiones más rápidas y globales (Rodriguez). En la actualidad, el transporte continúa evolucionando gracias a la digitalización, la electrificación y la movilidad inteligente, orientada a mejorar la eficiencia y sostenibilidad de los sistemas de desplazamiento.

    .row.justify-content-center.align-items-center.bg-secundario-s70.rounded-3.p-4
      .col-auto
        img(src="@/assets/curso/temas/tema1/2.svg")
      .col
        .row.justify-content-between.align-items-center
          .col.mb-3.mb-sm-0
            h5.mb-1.text-acento-contenido Historia de los Medios de Transportes Terrestres
            p.mb-0.text-white Lo invitamos a ver el siguiente video de historia del transporte.
          .col-sm-auto
            a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=ZAysiezOSYQ" target="_blank")
              span Ver video
              i.fab.fa-youtube.me-2

    Separador

    #t_1_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 1.2.	Concepto del transporte terrestre

    .row.justify-content-center.align-items-center
      .col-lg-1.d-none.d-xl-block
        figure
          img.mb-4.mb-xl-0(data-aos="fade-up")(src='@/assets/curso/temas/tema5/9.svg', alt='Imagen decorativa')
      .col-lg-7
        p.mb-4.mb-lg-0 El transporte terrestre se refiere al sistema de movilización de personas y/o mercancías, donde se movilizan sobre la superficie terrestre mediante un vehículo que circule por vías e infraestructura establecida, este tipo de transporte se divide principalmente en dos categorías: transporte por carretera que incluye todo tipo de vehículo terrestre; y los que se desplazan por rieles, lo que se conoce como transporte ferroviario. Es fundamental para la conectividad regional y nacional e incluso puede ser multimodal, permitiendo el desarrollo económico y logística de distribución; logrando el acceso relativamente rápido, flexible y directo entre puntos de origen y destino.
      .col-10.col-lg-4
        figure
          img(data-aos="fade-up")(src='@/assets/curso/temas/tema1/3.png', alt='Imagen decorativa')
    
    .fullwidth-bg.fullwidth-bg--1

    Separador

    #t_1_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 1.3.	Tipología del transporte terrestre

    p.mb-4.mb-lg-5.z-2 Se clasifican según: medio físico, tipo de carga, espacio geográfico, gestión o propiedad, forma de organización.
    div.slider-wrapper
      .bg-orange
      .tarjeta.tarjeta--blanca.p-4.pt-5.z-2.mt-5
        SlyderA(tipo="b")
          .row.z-2.justify-content-center.align-items-center
            .col-lg-5
              h4.mb-4 Transporte según medio físico
              p.mb-3.mb-lg-0 Está conformado por transporte de carretera y ferroviario: esto va a depender del terreno donde se desplaza en el caso de los vehículos donde se transportan sobre asfalto o caminos (automóviles, camiones, Transporte masivo, metro, motocicletas entre otros) en cambio en los transportes ferroviarios, circulan sobre los rieles, debido que usualmente transportan grandes volúmenes ya sea de carga o pasajeros de un lugar a otro.
            .col-10.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/9.png', alt='Texto que describa la imagen')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-5
              h4.mb-4 Transporte según tipo de carga
              p.mb-3.mb-lg-0 Entre los tipos de transporte nos encontramos los transportes de pasajeros: automóviles, taxis, vehículos particulares, colectivos y trenes de pasajeros. Sin embargo, de este tipo va a depender su carga a volumen, por ejemplo: camiones, trenes, furgonetas ente otros.
            .col-10.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/10.png', alt='Texto que describa la imagen')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-5
              h4.mb-4 Transporte según espacio geográfico
              p.mb-3.mb-lg-0 Se clasifica de acuerdo con el tipo de territorio en el que se realiza el desplazamiento de personas o mercancías. Los principales son: urbano, aplicado al transporte dentro de ciudades (colectivos urbanos, taxis, metro, etc.) rural, el cual se realiza en zonas alejadas de centros urbanos, con menor densidad poblacional. Los interurbanos son aquellos transportes que se realizan entre diferentes ciudades y los internacionales son aquellos buses que tienen el alcance de cruzar las fronteras de un país a otro.
            .col-10.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/11.png', alt='Texto que describa la imagen')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-5
              h4.mb-4 Transporte según la gestión o propiedad
              p.mb-3.mb-lg-0 Se clasifica atendiendo a quién posee, administra o controla el servicio o medio de transporte; ya sea de servicio público (depende del permiso del estado) o privado (taxis, flotas de camiones privados, servicio de transporte por aplicaciones).
            .col-10.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/12.png', alt='Texto que describa la imagen')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-5
              h4.mb-4 Trasporte de forma de organización 
              p.mb-3.mb-lg-0 Este tipo define la modalidad de ser usado ya sea para el uso individual o colectivo.
            .col-10.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/13.png', alt='Texto que describa la imagen')

    Separador

    #t_1_4(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 1.4.	Normativa

    p La normativa del transporte terrestre comprende el conjunto de leyes, decretos, resoluciones y reglamentos que regulan la prestación del servicio de transporte por vía terrestre, ya sea de pasajeros, carga o mixto. Estas normas buscan garantizar que el transporte se realice de manera segura, eficiente, ordenada, equitativa y sostenible, protegiendo tanto a los usuarios como a los operadores y al medio ambiente.
    p Los componentes claves de la normativa son los siguientes:

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.factores-slider.z-2
      .d-none.d-xl-block.col-xl-4
        figure
          img(src='@/assets/curso/temas/tema1/14.png', alt='Imagen de un mecánico')(data-aos="fade-up")
      .col-xl-8.mb-3.mb-lg-0
        SlyderF(columnas="col-md-6")
          .tarjeta.tarjeta--secundario-s5.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema1/15.png' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Licenciamiento y habilitación
            p.mb-4.mb-5.text-center Requisitos que deben cumplir empresas o personas para operar legalmente (licencias de conducción, tarjetas de operación, permisos de transporte especial, etc.).

          .tarjeta.tarjeta--secundario-s5.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema1/16.png' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Condiciones técnicas y mecánicas
            p.mb-4.text-center VExigencias relacionadas con el estado del vehículo, revisiones técnico-mecánicas, sistemas de seguridad y equipamiento.

          .tarjeta.tarjeta--secundario-s5.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema1/17.png' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Normas de tránsito
            p.mb-4.text-center Reglas para la circulación segura en las vías, como límites de velocidad, señalización, maniobras permitidas y uso obligatorio de elementos de seguridad

          .tarjeta.tarjeta--secundario-s5.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema1/15.png' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Clasificación del transporte
            p.mb-4.mb-5.text-center  Las normas definen tipos de transporte (público, privado, especial, escolar, de carga, etc.) y las condiciones particulares de operación para cada uno.

          .tarjeta.tarjeta--secundario-s5.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema1/16.png' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Control y sanciones
            p.mb-4.text-center Establecen los procedimientos para la vigilancia y el control, así como las sanciones ante el incumplimiento de las normas (multas, suspensiones, inmovilizaciones, etc.).

          .tarjeta.tarjeta--secundario-s5.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema1/17.png' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Jurisdicción municipal o distrital
            p.mb-4.text-center Calles, avenidas urbanas y rutas locales a cargo de alcaldías o secretarías de movilidad.

    p.mb-4 Entidades encargadas de regular y controlar: en Colombia, por ejemplo; estas funciones están a cargo de:

    .row.justify-content-center.z-2
      .col-sm-6.col-xl-3
        .p-3.bg-color-acento-ac20.rounded-3.mb-3
          p.text-center.mb-0 Ministerio de Transporte.
      .col-sm-6.col-xl-3
        .p-3.bg-color-acento-ac20.rounded-3.mb-3
          p.text-center.mb-0 Superintendencia de Transporte.
      .col-sm-6.col-xl-3
        .p-3.bg-color-acento-ac20.rounded-3.mb-3
          p.text-center.mb-0 Direcciones de tránsito municipales o departamentales.
      .col-sm-6.col-xl-3
        .p-3.bg-color-acento-ac20.rounded-3.mb-3
          p.text-center.mb-0 Policía de Tránsito y Transporte.

    Separador
    .fullwidth-bg.fullwidth-bg--1
    #t_1_5(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 1.5.	Medios de transporte
    
    p.mb-4.mb-lg-5.z-2 El transporte terrestre comprende todos aquellos vehículos que se movilizan por vías terrestres, como carreteras, autopistas, calles, senderos o vías férreas. Se clasifican principalmente en transporte de pasajeros y transporte de carga, y cada tipo presenta características técnicas y operativas específicas que deben ser consideradas en los procesos de planificación, seguimiento y evaluación. La clasificación del transporte terrestre esta de la siguiente manera:

    .row.justify-content-center.mb-4.mb-lg-5.z-2
      .col-md-8.col-lg-6.mb-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/21.jpg", alt="Transporte público")
          .crd_hover_txt--body.text-center
            h5.mb-3 Transporte público
            p.mb-0 <small>El transporte público incluye buses, taxis y sistemas masivos como transmilenio o transmetro, gestionados por entidades oficiales. Busca movilizar eficientemente a muchas personas, garantizando accesibilidad y equidad dentro de ciudades o hacia zonas rurales.</small>
      .col-md-8.col-lg-6.mb-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/22.jpg", alt="Transporte privado")
          .crd_hover_txt--body.text-center
            h5.mb-3 Transporte privado
            p.mb-0 <small>El transporte privado, como carros y motos personales, ofrece autonomía y flexibilidad en los desplazamientos diarios. Sin embargo, su alto volumen representa un desafío para la gestión del tráfico y contribuye a la congestión vial.</small>
      .col-md-8.col-lg-6.mb-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/23.jpg", alt="Transporte de carga")
          .crd_hover_txt--body.text-center
            h5.mb-3 Transporte de carga
            p.mb-0 <small>El transporte de carga moviliza mercancías, alimentos y materias primas mediante camiones, furgones o remolques. Su monitoreo es clave para controlar tiempos de entrega, condiciones de la carga y garantizar seguridad en la operación.</small>
      .col-md-8.col-lg-6.mb-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/24.jpg", alt="Transporte especial")
          .crd_hover_txt--body.text-center
            h5.mb-3 Transporte especial
            p.mb-0 <small>El transporte especial atiende personas con necesidades específicas, como: escolares, personas con discapacidad, turistas o pacientes. Requiere condiciones técnicas y normativas especiales para garantizar seguridad, accesibilidad y dignidad en cada desplazamiento.</small>

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span Clasificación del transporte
        img.mb-1.d-sm-none(data-aos="fade-down")(src="@/assets/curso/temas/tema1/25-mob.jpg", alt="se describe la clasificación del transporte según su función. Autobuses públicos: facilitan el acceso equitativo al transporte urbano. Automóviles personales: brindan autonomía en el transporte diario. Vehículos personales de carga: ofrecen flexibilidad en el transporte privado. Camiones de carga: son esenciales para el transporte publico de mercancías.")
        img.mb-1.d-none.d-md-block(data-aos="fade-down")(src="@/assets/curso/temas/tema1/25.jpg", alt="se describe la clasificación del transporte según su función. Autobuses públicos: facilitan el acceso equitativo al transporte urbano. Automóviles personales: brindan autonomía en el transporte diario. Vehículos personales de carga: ofrecen flexibilidad en el transporte privado. Camiones de carga: son esenciales para el transporte publico de mercancías.")
        figcaption <strong>Fuente:</strong> SENA, 2025.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
