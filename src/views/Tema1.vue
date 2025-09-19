<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Transporte terrestre

    .cajon.color-secundario.p-4.mb-4.mb-lg-5
      p.mb-0 Se define como el conjunto de sistemas, infraestructuras y operaciones destinadas al desplazamiento de personas, mercancías y recursos a través de vías carreteras y ferroviarias. Su análisis se orienta al estudio de parámetros operativos como capacidad vehicular, tiempos de tránsito, trazabilidad de rutas, control de carga, eficiencia en la distribución y cumplimiento de normativas de seguridad vial.

    #t_1_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 1.1	Historia del transporte terrestre

    .row.align-items-center.justify-content-center.bg-color-acento-ac5.p-3.py-xl-0.mb-4
      .col-lg-5.ps-xl-0
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src='@/assets/curso/temas/tema1/1.png', alt='Imagen decorativa')
      .col-lg-7
        p.mb-0 El transporte desde los primeros tiempos de la civilización ha sido una necesidad fundamental. Es por ello por lo que inicialmente, los desplazamientos se realizaban a pie, seguidos por el uso de animales domesticados como medio de carga y transporte de la época. Con el tiempo, surgieron tecnologías como la rueda (alrededor del 3500 a.C.), lo que marcó un antes y un después en la capacidad de mover personas y movilizar las mercancías. Las civilizaciones antiguas, como la egipcia y la romana, desarrollaron redes de caminos que sirvieron de base para los sistemas de transporte terrestre que conocemos hoy.

    p.mb-4.mb-lg-5 Durante la Revolución Industrial, la necesidad de mover más carga hizo que el transporte tuviese una transformación radical con la invención de la locomotora de vapor, posteriormente, el automóvil y el avión, que permitieron laa conexiones más rápidas y globales (<em>Rodríguez</em>, J.-P. (2020)). En la actualidad, el transporte continúa evolucionando gracias a la digitalización, la electrificación y la movilidad inteligente, orientada a mejorar la eficiencia y sostenibilidad de los sistemas de desplazamiento.

    .row.justify-content-center.align-items-center.bg-secundario-s70.rounded-3.p-4
      .col-auto
        img(src="@/assets/curso/temas/tema1/2.svg")
      .col
        .row.justify-content-between.align-items-center
          .col.mb-3.mb-sm-0
            h5.mb-1.text-acento-contenido Historia de los medios de transportes terrestres
            p.mb-0.text-white Lo invitamos a ver el siguiente video de historia del transporte.
          .col-sm-auto
            a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=ZAysiezOSYQ" target="_blank")
              span Explorar video
              i.fab.fa-youtube.me-2

    Separador

    #t_1_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 1.2	Concepto del transporte terrestre

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
      h3 1.3	Tipología del transporte terrestre

    p.mb-4.mb-lg-5.z-2 Se clasifican según: medio físico, tipo de carga, espacio geográfico, gestión o propiedad, forma de organización.
    div.slider-wrapper
      .bg-orange
      .tarjeta.tarjeta--blanca.p-4.pt-5.z-2.mt-5
        SlyderA(tipo="b")
          .row.z-2.justify-content-center.align-items-center
            .col-lg-5
              h4.mb-4 Transporte según medio físico
              p.mb-3.mb-lg-0 Se refiere al tipo de infraestructura sobre la cual se desplaza el vehículo. Principalmente, está conformado por el transporte de carretera, donde los vehículos (automóviles, camiones, buses, motocicletas) se mueven sobre asfalto o caminos. Por otro lado, el transporte ferroviario utiliza rieles y está diseñado usualmente para movilizar grandes volúmenes de carga o pasajeros a lo largo de distancias extensas.
            .col-10.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/9.png', alt='Texto que describa la imagen')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-5
              h4.mb-4 Transporte según tipo de carga
              p.mb-3.mb-lg-0 Esta clasificación diferencia el transporte según lo que moviliza. Incluye el transporte de pasajeros (automóviles, taxis, vehículos particulares, colectivos, trenes de pasajeros) y el transporte de carga, que a su vez se subdivide según el volumen, peso o naturaleza de la mercancía.
            .col-10.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/10.png', alt='Texto que describa la imagen')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-5
              h4.mb-4 Transporte según espacio geográfico
              p.mb-3.mb-lg-0 Define el ámbito territorial de la operación. El transporte urbano se aplica a desplazamientos dentro de las ciudades (colectivos urbanos, taxis, metro). El interurbano se realiza entre diferentes ciudades de un mismo país.
            .col-10.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/11.png', alt='Texto que describa la imagen')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-5
              h4.mb-4 Transporte según la gestión o propiedad
              p.mb-3.mb-lg-0 Se basa en la naturaleza del operador y la regulación que lo rige. Puede ser de servicio público, que opera bajo permiso o concesión del Estado y está regulado para servir a la comunidad o privado, gestionado por empresas o individuos para sus propias necesidades o mediante contratos específicos.
            .col-10.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/12.png', alt='Texto que describa la imagen')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-5
              h4.mb-4 Transporte de forma de organización 
              p.mb-3.mb-lg-0 Este criterio se relaciona con el modelo de negocio o la estructura bajo la cual se presta el servicio. Ejemplos incluyen el transporte individual (vehículo particular), transporte colectivo (buses, trenes), transporte multimodal (combinación de varios modos), o servicios especializados (como transporte de valores o de mercancías peligrosas).
            .col-10.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/13.png', alt='Texto que describa la imagen')

    Separador

    #t_1_4(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 1.4	Normativa

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
            p.mb-4.text-center Exigencias relacionadas con el estado del vehículo, revisiones técnico-mecánicas, sistemas de seguridad y equipamiento.

          .tarjeta.tarjeta--secundario-s5.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema1/17.png' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Normas de tránsito
            p.mb-4.text-center Reglas para la circulación segura en las vías, como límites de velocidad, señalización, maniobras permitidas y uso obligatorio de elementos de seguridad.

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

    p.mb-4 Entidades encargadas de regular y controlar: en Colombia, por ejemplo; estas funciones están a cargo de:

    .row.justify-content-center.align-items-stretch.z-2
      .col-sm-6.col-xl-3.mb-3.mb-xl-0
        .p-3.bg-color-acento-ac20.rounded-3.h-100
          p.text-center.mb-0 Ministerio de Transporte.
      .col-sm-6.col-xl-3.mb-3.mb-xl-0
        .p-3.bg-color-acento-ac20.rounded-3.h-100
          p.text-center.mb-0 Superintendencia de Transporte.
      .col-sm-6.col-xl-3.mb-3.mb-xl-0
        .p-3.bg-color-acento-ac20.rounded-3.h-100
          p.text-center.mb-0 Direcciones de tránsito municipales o departamentales.
      .col-sm-6.col-xl-3.mb-3.mb-xl-0
        .p-3.bg-color-acento-ac20.rounded-3.h-100
          p.text-center.mb-0 Policía de Tránsito y Transporte.

    Separador
    .fullwidth-bg.fullwidth-bg--1
    #t_1_5(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 1.5	Medios de transporte
    
    p.mb-4.mb-lg-5.z-2 El transporte terrestre comprende todos aquellos vehículos que se movilizan por vías terrestres, como carreteras, autopistas, calles, senderos o vías férreas. Se clasifican principalmente en transporte de pasajeros y transporte de carga, y cada tipo presenta características técnicas y operativas específicas que deben ser consideradas en los procesos de planificación, seguimiento y evaluación. La clasificación del transporte terrestre está de la siguiente manera:

    .row.justify-content-center.mb-4.mb-lg-5.z-2
      .col-md-8.col-lg-6.mb-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/21.jpg", alt="Transporte público")
          .crd_hover_txt--body.text-center
            h5.mb-3 Transporte público
            p.mb-0 <small>Engloba buses, busetas, microbuses, taxis y colectivos que prestan servicio urbano o intermunicipal. Su propósito es movilizar grandes cantidades de personas de forma eficiente. En ciudades más grandes, se incluyen también sistemas integrados como Transmilenio, MIO, Metroplús y transporte masivo como el metro o tren ligero, donde existan. Generalmente es gestionado por entidades gubernamentales o empresas autorizadas. Su propósito es: dar accesibilidad y equidad social al transportar a las personas de una localidad dentro de la ciudad o hacia zonas rurales.</small>
      .col-md-8.col-lg-6.mb-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/22.jpg", alt="Transporte privado")
          .crd_hover_txt--body.text-center
            h5.mb-3 Transporte privado
            p.mb-0 <small>El transporte privado es el que se maneja a un ritmo personalizado. Este tipo de vehículos de propiedad personal o familiar, como un carro o una moto permite brindar autonomía y flexibilidad en el desplazamiento diario, representan un reto para la gestión del tráfico debido a su volumen y contribución a la congestión vial.</small>
      .col-md-8.col-lg-6.mb-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/23.jpg", alt="Transporte de carga")
          .crd_hover_txt--body.text-center
            h5.mb-3 Transporte de carga
            p.mb-0 <small>Es utilizado para movilizar mercancías, materias primas, alimentos u otros bienes. Está representado por vehículos como camiones, tractomulas, furgones, volquetas y remolques. El monitoreo en este tipo de transporte es esencial para controlar tiempos de entrega, condiciones de la carga y seguridad en la operación.</small>
      .col-md-8.col-lg-6.mb-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/24.jpg", alt="Transporte especial")
          .crd_hover_txt--body.text-center
            h5.mb-3 Transporte especial
            p.mb-0 <small>Este tipo de transporte especial está diseñado pensando en personas con necesidades específicas. Por ejemplo, los buses escolares, los vehículos que transportan a personas con discapacidad, buses corporativos, turísticos y ambulancias entre otros. Para ello este transporte requiere condiciones técnicas particulares y debe cumplir con normativas especiales para asegurar que cada usuario se desplace con seguridad y dignidad.</small>

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span Clasificación del transporte
        img.mb-1.d-sm-none(data-aos="fade-down")(src="@/assets/curso/temas/tema1/25-mob.svg", alt="En la figura 1 se describe la clasificación del transporte según su función. Autobuses públicos : facilitan el acceso equitativo al transporte urbano. Automóviles personales: brindan autonomía en el transporte diario. Vehículos personales de carga: ofrecen flexibilidad en el transporte privado. Camiones de carga: son esenciales para el transporte público de mercancías.")
        img.mb-1.d-none.d-md-block(data-aos="fade-down")(src="@/assets/curso/temas/tema1/25.svg", alt="En la figura 1 se describe la clasificación del transporte según su función. Autobuses públicos : facilitan el acceso equitativo al transporte urbano. Automóviles personales: brindan autonomía en el transporte diario. Vehículos personales de carga: ofrecen flexibilidad en el transporte privado. Camiones de carga: son esenciales para el transporte público de mercancías.")
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
