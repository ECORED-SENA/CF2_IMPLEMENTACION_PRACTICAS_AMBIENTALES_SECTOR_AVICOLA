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
      tema: 'Descripción de medidas de manejo ambiental en el sector avícola.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> comprender los aspectos relacionados con las medidas de producción más limpia y de manejo ambiental relacionados con el sector avícola.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            'La Producción Más Limpia en el sector avícola busca principalmente:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el uso de materias primas tóxicas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumentar la eficiencia y minimizar riesgos ambientales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir la temperatura en los galpones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar totalmente los residuos sólidos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: 'Antes de aplicar la gallinaza como abono, es necesario:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mezclarla con cal viva sin control.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Secarla al sol por 2 horas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mezclarla con residuos plásticos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Estabilizarla biológica, química y físicamente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes es un residuo inorgánico peligroso en una granja avícola?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Bandejas de cartón.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Papel de oficina usado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Jeringas y agujas usadas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cáscara de huevo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: 'Para el ahorro de agua en granjas avícolas se recomienda:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Lavar con mangueras sin control de presión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Usar pistolas de presión en las mangueras.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentar el tiempo de lavado sin restricción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar el uso de hidrolavadoras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'La sanitización de gallinaza o pollinaza tiene como finalidad:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar agentes infectocontagiosos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Mejorar el sabor de los huevos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incrementar la humedad del suelo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Facilitar la recolección de plumas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'Para disponer aves muertas en fosas, el fondo debe estar como mínimo:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '1 metro del nivel freático.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '10 metros del nivel freático.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'No se requiere distancia específica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '5 metros del nivel freático.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'La gestión integral de residuos aprovechables implica, entre otras acciones:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Entregar todos los residuos al relleno sanitario sin separación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Instalar puntos ecológicos con código de colores.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mezclar residuos peligrosos y orgánicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Quemar residuos plásticos en campo abierto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: 'Un indicador de eficiencia en el uso del recurso hídrico es:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Litros de agua por ave o m³ de agua consumidos/mes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Número de aves nacidas en el ciclo productivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cantidad de residuos sólidos generados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Temperatura promedio del galpón.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'En la limpieza y desinfección de plantas de beneficio, la temperatura mínima para desinfectar cuchillos y sierras es:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '60 °C.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '70 °C.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '82,5 °C.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '100 °C.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'El objetivo principal de la educación ambiental en el sector avícola es:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la producción de huevos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mejorar la velocidad de crecimiento de las aves.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Disminuir el consumo de alimento balanceado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Fortalecer las buenas prácticas ambientales del personal y la comunidad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
