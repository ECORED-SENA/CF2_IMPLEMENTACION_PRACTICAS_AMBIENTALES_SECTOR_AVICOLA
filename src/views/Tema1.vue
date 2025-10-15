<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Producción más limpia
    
    .fondo___color_2
      .px-5

        .row.align-items-center.m-0.mb-5
          .col-xl.style___box_2(data-aos="fade-right")
            p.mb-0 La Producción Más Limpia (PML) se define como la implementación de acciones ambientales de acuerdo con los procesos productivos con el fin de <strong>aumentar la eficiencia y minimizar los riesgos</strong> para las personas y el medioambiente (Organización de las Naciones Unidas para el Desarrollo Industrial, 2006).
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img2.png", alt="" ).m-auto 
        
        .row.justify-content-center
          .col-lg-10
            .row.align-items-center.m-0.style___box_3(data-aos="zoom-in")
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src="@/assets/curso/temas/img3.jpg", alt="" ).m-auto
              .col-xl
                h5 Entre los principales beneficios de la PML se encuentran:
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Uso eficiente de la materia prima, agua y energía.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Exclusión de materias primas tóxicas.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Reducción en cantidades de desechos y emisiones.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Disminución de impactos negativos a lo largo del ciclo de vida del producto.</li>
                </ul>

        <!-- BLOQUE 1 -->
        Separador
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 Elementos de la producción más limpia
        
        p.mb-5 Los elementos de la producción más limpia involucran diferentes aspectos que permiten implementar medidas de manejo a lo largo del ciclo de vida del producto. En el <strong>sector avícola</strong>, los elementos de la PML que se deben destacar son los siguientes:

        .fondo___slider
          .px-5
            .ajuste-slider(data-aos="zoom-in")
              SlyderA(tipo="b")
                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Reducción de residuos en la fuente
                    p.mb-0 Minimizar las cantidades de residuos que pueden generarse, ya sea en actividades de las granjas o en las plantas de sacrificio.
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img5.png', alt='' style="max-width: 500px").m-auto
                
                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Aprovechamiento de residuos
                    p.mb-0 El sector avícola genera grandes cantidades de residuos, principalmente orgánicos. Estos pueden ser incorporados en procesos de compostaje o en la producción de insumos pecuarios como concentrados.
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img6.png', alt='' style="max-width: 500px").m-auto

                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Uso de tecnologías limpias
                    p.mb-0 En las diferentes etapas de los procesos productivos, es posible implementar el uso de tecnologías de bajo impacto ambiental. Por ejemplo, en las granjas puede usarse tecnología para el manejo de olores, y en las plantas de sacrificio existen tecnologías para el uso eficiente del agua y para el aprovechamiento de residuos orgánicos.
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img7.png', alt='' style="max-width: 500px").m-auto
                
                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Sustitución de insumos
                    p.mb-0 Por condiciones de sanidad y estándares ambientales, deben suplirse materias primas y productos tóxicos por alternativas menos contaminantes o biodegradables.
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img8.png', alt='' style="max-width: 500px").m-auto

    <!-- BLOQUE 2 -->
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Buenas prácticas de operación
    
    p.mb-5 Teniendo en cuenta los procesos productivos que se desarrollan en el sector avícola, en pro de un adecuado manejo preventivo, pueden implementarse prácticas que contribuyen con el manejo ambiental. Entre las principales prácticas que se pueden implementar están las siguientes:

    .fondo___color_2
      .px-5

        .bg--img_03.mb-5
          .row.h-100.align-items-center
            .col-xl-auto
              figure(data-aos="fade-right").d-none.d-xl-block
                img(src="@/assets/curso/temas/img9.png", alt="" ).m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
                .row(titulo="Seguimiento del consumo de agua").ajuste-cajaAcordion
                  p.mb-3 Establecimiento de programas de seguimiento al consumo de agua, así como monitoreo y control de fugas.
                .row(titulo="Tratamiento de agua potable y residual").ajuste-cajaAcordion
                  p.mb-3  En granjas y plantas de sacrificio se debe garantizar el suministro de agua potable. Además, si se generan vertimientos, se debe implementar el tratamiento de aguas residuales.
                .row(titulo="Uso eficiente de la energía").ajuste-cajaAcordion
                  p.mb-3 Mantener en óptimas condiciones los equipos que consumen energía eléctrica. En plantas de sacrificio, prestar especial atención a los equipos y áreas que utilizan calentamiento y vapor de agua.
                .row(titulo="Manejo de residuos sólidos").ajuste-cajaAcordion
                  p.mb-3 Asegurar el adecuado manejo de los residuos para prevenir la proliferación de malos olores, la presencia de vectores y la contaminación de las áreas.

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img10.svg" style="max-width: 60px").m-auto
          .col
            h3 Importancia del manejo de residuos orgánicos en plantas de sacrificio
        
        p.mb-5 El manejo de residuos orgánicos en las plantas de sacrificio es fundamental. Según datos de la Federación Nacional de Avicultores de Colombia y el Fondo Nacional Avícola (2024), en el proceso de sacrificio:

        .row.justify-content-center
          .col-xl-6
            .row.justify-content-center
              .col-xl-6.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
                .estilo___tarjeta(data-aos="zoom-in")
                  .estilo___tarjeta_img
                    figure
                      img(src="@/assets/curso/temas/img11.svg", alt='' style="max-width: 110px").m-auto
                  .estilo___tarjeta_body
                    p.mb-0 La cantidad de sangre por pollo es de 0,08 kg.
              
              .col-xl-6.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
                .estilo___tarjeta(data-aos="zoom-in")
                  .estilo___tarjeta_img
                    figure
                      img(src="@/assets/curso/temas/img12.svg", alt='' style="max-width: 110px").m-auto
                  .estilo___tarjeta_body.ajuste___tarjeta_body
                    p.mb-0 La cantidad de plumas por pollo es de 0,13 kg.
 
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
