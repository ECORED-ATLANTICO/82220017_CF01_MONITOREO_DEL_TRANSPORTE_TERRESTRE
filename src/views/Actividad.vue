<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Vías Inteligentes, Ciudades Sostenibles.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> la relación entre infraestructura vial, movilidad urbana y sostenibilidad ambiental para fomentar, mediante el trabajo colaborativo y la simulación de entornos urbanos, soluciones innovadoras, seguras, tecnológicas y ecológicas que mejoren la circulación y reduzcan el impacto ambiental.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            'La bicicleta es un medio de transporte sostenible que no genera emisiones contaminantes.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 2,
          texto:
            'El uso compartido de vehículos ayuda a reducir la congestión y la contaminación en las ciudades.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 3,
          texto:
            'Los peatones no tienen responsabilidades en la vía, ya que siempre tienen prioridad.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 4,
          texto:
            'Los vehículos eléctricos no emiten gases contaminantes durante su uso.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 5,
          texto:
            'Solo los conductores de automóviles deben respetar las señales de tránsito.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 6,
          texto:
            'La movilidad sostenible busca reducir el uso del transporte público.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 7,
          texto:
            'Caminar o usar la bicicleta contribuye a mejorar la salud física y mental.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 8,
          texto:
            'El uso de motocicletas de combustión es una alternativa ecológica.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 9,
          texto:
            'El transporte público eficiente es un pilar clave de la movilidad sostenible.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 10,
          texto: 'Las ciclovías son espacios exclusivos para peatones.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 11,
          texto:
            'Los sistemas avanzados de asistencia al conductor (ADAS) ayudan a mejorar la seguridad vial.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 12,
          texto:
            'La planificación urbana sostenible considera el transporte, el medio ambiente y la calidad de vida.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 13,
          texto:
            'Las políticas públicas no tienen ningún papel en la promoción de la movilidad sostenible.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 14,
          texto:
            'El uso excesivo del automóvil particular contribuye al cambio climático.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 15,
          texto: 'La educación vial solo se debe enseñar a los conductores.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 16,
          texto:
            'El transporte de carga diésel es considerado una opción ecológica en la movilidad urbana.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 17,
          texto:
            'Los peatones deben usar los pasos de cebra y seguir las señales de tránsito.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 18,
          texto:
            'La movilidad compartida incluye opciones como bicicletas y autos compartidos.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 19,
          texto:
            'Las emisiones de gases del transporte no afectan la salud humana.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 20,
          texto:
            'Promover el uso de vehículos híbridos ayuda a reducir la contaminación ambiental.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
