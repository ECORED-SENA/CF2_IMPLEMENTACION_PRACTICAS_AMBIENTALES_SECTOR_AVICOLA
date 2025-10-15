<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Prácticas ambientales
    
    .fondo___color_2
      .px-5

        .row.align-items-center.m-0.mb-5
          .col-xl.style___box_2(data-aos="fade-right")
            p.mb-0 Buscando que los impactos ambientales generados en los procesos y sistemas productivos avícolas sean controlados y se eviten consecuencias negativas para las personas y el ambiente, es posible implementar <strong>prácticas ambientales</strong> asociadas a los diferentes componentes de la producción.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img13.png", alt="" ).m-auto 

        <!-- BLOQUE 1 -->
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1 Manejo de residuos

        p.mb-5 En el sector avícola se generan residuos orgánicos e inorgánicos, tanto aprovechables como no aprovechables. La gestión adecuada de estos residuos es fundamental para reducir impactos ambientales y sanitarios.

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img10.svg" style="max-width: 60px").m-auto
          .col
            h3 Manejo de residuos orgánicos
        
        p.mb-5 Existen diferentes alternativas para el manejo de los residuos orgánicos generados en el sector avícola. Entre las más aplicadas se encuentran, según Pérez y Villegas (2009):

        .row.justify-content-center.mb-5
          .col-xl-10
            .row.justify-content-center
              .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
                .estilo___tarjeta(data-aos="zoom-in")
                  .estilo___tarjeta_img
                    figure
                      img(src="@/assets/curso/temas/img14.svg", alt='' style="max-width: 110px").m-auto
                  .estilo___tarjeta_body_1
                    h5 Fuente de alimento animal
                    p.mb-0 Gallinaza, plumas, sangre, hueso.
              
              .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
                .estilo___tarjeta(data-aos="zoom-in")
                  .estilo___tarjeta_img
                    figure
                      img(src="@/assets/curso/temas/img15.svg", alt='' style="max-width: 110px").m-auto
                  .estilo___tarjeta_body_1
                    h5 Fuente energética y de proteínas
                    p.mb-0 Gallinaza, sangre, plumas, hueso, grasas.

              .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
                .estilo___tarjeta(data-aos="zoom-in")
                  .estilo___tarjeta_img
                    figure
                      img(src="@/assets/curso/temas/img16.svg", alt='' style="max-width: 110px").m-auto
                  .estilo___tarjeta_body_1
                    h5 Fuente para abonos
                    p.mb-0 Gallinaza, cáscara.

    h4.mb-4.caja-titulos-cuarto-nivel(data-aos="fade-right") Características y tratamiento de residuos orgánicos avícolas

    p.mb-5 En el sector avícola se generan diversos tipos de residuos orgánicos que, si se manejan adecuadamente, pueden ser aprovechados como insumos en otros sectores productivos. A continuación, se describen sus características y las recomendaciones para su tratamiento o disposición final.

    .row.align-items-center.mb-5
      .col-xl
        h4.mb-4.caja-titulos-cuarto-nivel(data-aos="fade-right") Gallinaza
        p.mb-0 La gallinaza es una mezcla compuesta por los residuos de la cama (viruta, cascarilla u otro material absorbente), las deposiciones sólidas y líquidas de las aves. Su uso es frecuente en el sector agrícola debido a su alto contenido de nitrógeno, fósforo y otros nutrientes esenciales, así como por la presencia de microorganismos beneficiosos que ayudan a la restitución de la materia orgánica en los suelos.
      .col-xl-auto
        figure.d-none.d-xl-block(data-aos="fade-left")
          img(src="@/assets/curso/temas/img17.png", alt='' style="max-width: 500px").m-auto
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .row.align-items-center.m-0.style___box_3(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img18.jpg", alt="" ).m-auto
          .col-xl
            h5 Precaución
            p.mb-0 Antes de aplicar la gallinaza al suelo, esta debe ser estabilizada biológica, química y físicamente. Si no se realiza este tratamiento, su uso puede provocar contaminación del aire, del suelo y de fuentes hídricas cercanas.

    h4.mb-4.caja-titulos-cuarto-nivel(data-aos="fade-right") Plumas, sangre y huesos

    p.mb-5 Estos residuos son generados en grandes volúmenes en las <strong>plantas de beneficio</strong> y constituyen una materia prima importante para la producción de <strong>harinas proteicas</strong>, utilizadas en la elaboración de concentrados para alimentación animal. A continuación, se presenta un resumen de los procesos aplicados para el aprovechamiento de estos residuos:

    .row.align-items-center.mb-5
      .col-xl
        .row.align-items-center.mb-2.m-0.style___box_4(data-aos="fade-right")
          .col-xl-2
            h4 Plumas
          .col-xl-10
            p.mb-0 Recolección → Lavado → Hidrolización → Secado → Molienda.
        .row.align-items-center.mb-2.m-0.style___box_4(data-aos="fade-right")
          .col-xl-2
            h4 Sangre
          .col-xl-10
            p.mb-0 Coagulación → Deshidratación → Molienda.
        .row.align-items-center.mb-2.m-0.style___box_4(data-aos="fade-right")
          .col-xl-6
            h4 Residuos de carne, vísceras y huesos
          .col-xl-6
            p.mb-0 Cocción → Extracción de grasas → Molienda.
        p.mb-0.style___box_5(data-aos="fade-right") Estos procesos permiten <strong>recuperar el contenido proteico</strong> de los residuos para formular productos alimenticios pecuarios, promoviendo así el <strong>aprovechamiento sostenible</strong> dentro del mismo sector productivo.
      .col-xl-auto
        figure.d-none.d-xl-block(data-aos="fade-left")
          img(src="@/assets/curso/temas/img19.png", alt='' style="max-width: 500px").m-auto

    h4.mb-4.caja-titulos-cuarto-nivel(data-aos="fade-right") Aves muertas

    p.mb-5 Las aves muertas representan un tipo de residuo orgánico que debe manejarse con estricto control sanitario y ambiental para evitar la proliferación de vectores, olores ofensivos y la contaminación del entorno. Algunas recomendaciones para su disposición en granjas son: 

    .row.justify-content-center.mb-5
      .col-lg-10
        .row.align-items-center.m-0.style___box_3(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img20.jpg", alt="" ).m-auto
          .col-xl
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Disponer de zonas especiales para el entierro de los cadáveres (fosas).</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Restringir el acceso a animales y personas ajenas a la granja.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Ubicar las fosas alejadas de áreas pobladas y fuentes de agua.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Asegurar que las zonas de disposición estén señalizadas y cercadas correctamente.</li>
            </ul>
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img10.svg" style="max-width: 60px").m-auto
      .col
        h3 Manejo de residuos inorgánicos
    
    p.mb-5 En las labores avícolas se generan <strong>residuos inorgánicos aprovechables, ordinarios y peligrosos</strong>, cuya correcta identificación y manejo es fundamental para evitar impactos ambientales y sanitarios. A continuación, se presenta una tabla con el resumen de <strong>las fuentes, actividades, tipos de residuos y su clasificación</strong>:

    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 1.
          span Tipos de residuos inorgánicos
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla Fuente
                th.ajuste-border-tabla Actividad
                th.ajuste-border-tabla Residuo
                th Clasificación
            tbody
              tr
                td.ajuste-border-tabla.texto-left Granjas - Granjas abuelas
                td.ajuste-border-tabla.texto-left Bolsas de alimentos.
                td.ajuste-border-tabla.texto-left Residuos plásticos.
                td.texto-left Si las bolsas y envases plásticos están limpios y no generan peligro, pueden ser <strong>aprovechables.</strong>
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Granjas
                td.ajuste-border-tabla.texto-left Aplicación de plaguicidas / mantenimiento de galpones.
                td.ajuste-border-tabla.texto-left Envases vacíos.
                td.texto-left <strong>Residuo peligroso</strong>.
              tr
                td.ajuste-border-tabla.texto-left Galpón de gallinas ponedoras
                td.ajuste-border-tabla.texto-left Recolección de huevo.
                td.ajuste-border-tabla.texto-left Bandejas de cartón.
                td.texto-left <strong>Residuo aprovechable</strong>.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Galpón de gallinas ponedoras
                td.ajuste-border-tabla.texto-left Sanidad y vacunación.
                td.ajuste-border-tabla.texto-left Jeringas y agujas.
                td.texto-left <strong>Residuo peligroso</strong>.
              tr
                td.ajuste-border-tabla.texto-left Oficinas y administración
                td.ajuste-border-tabla.texto-left Labores administrativas.
                td.ajuste-border-tabla.texto-left Utensilios gastados, papel de oficina usado.
                td.texto-left <strong>Residuo aprovechable</strong>.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Sanitarios y duchas
                td.ajuste-border-tabla.texto-left Actividades de aseo personal.
                td.ajuste-border-tabla.texto-left Papel sanitario usado.
                td.texto-left <strong>Residuo no aprovechable</strong>.
              tr
                td.ajuste-border-tabla.texto-left Granjas y plantas de sacrificio
                td.ajuste-border-tabla.texto-left Aplicación de medicamentos veterinarios / labores de mantenimiento.
                td.ajuste-border-tabla.texto-left Envolturas plásticas contaminadas.
                td.texto-left <strong>Residuo no aprovechable</strong>.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Transporte de aves / iluminación / mantenimiento de maquinaria
                td.ajuste-border-tabla.texto-left Reposición de bombillas / mantenimiento.
                td.ajuste-border-tabla.texto-left Aceite usado, luminarias.
                td.texto-left <strong>Residuo peligroso</strong>.
    
    .fondo___color_2
      .px-5

        h4.mb-4.caja-titulos-cuarto-nivel(data-aos="fade-right") Almacenamiento temporal de residuos

        p.mb-5 Para el almacenamiento temporal de estos residuos se debe contar con <strong>un área específica</strong>, la cual debe cumplir con los siguientes criterios:

        .row.justify-content-center.mb-5
          .col-xl-6
            .row.justify-content-center
              .col-xl-6.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
                .estilo___tarjeta(data-aos="zoom-in")
                  .estilo___tarjeta_img
                    figure
                      img(src="@/assets/curso/temas/img21.svg", alt='' style="max-width: 110px").m-auto
                  .estilo___tarjeta_body
                    p.mb-0 Identificación clara de los tipos de residuos.
              
              .col-xl-6.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
                .estilo___tarjeta(data-aos="zoom-in")
                  .estilo___tarjeta_img
                    figure
                      img(src="@/assets/curso/temas/img22.svg", alt='' style="max-width: 110px").m-auto
                  .estilo___tarjeta_body.ajuste___tarjeta_body
                    p.mb-0 Etiquetado adecuado conforme al código de colores establecido en Colombia.
        
        p.mb-5 Este código permite una separación eficaz y coherente con la normatividad nacional.

        .row.justify-content-center.mb-5
          .col-xl-10
            .row.justify-content-center
              .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
                .estilo___tarjeta(data-aos="zoom-in")
                  .estilo___tarjeta_img
                    figure
                      img(src="@/assets/curso/temas/img23.png", alt='' style="max-width: 130px").m-auto
                  .estilo___tarjeta_body_2.ajuste___tarjeta_body_1
                    h5 Residuos aprovechables
                    p.mb-0 Plástico, cartón, vidrio, papel, metales.
              
              .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
                .estilo___tarjeta(data-aos="zoom-in")
                  .estilo___tarjeta_img
                    figure
                      img(src="@/assets/curso/temas/img24.png", alt='' style="max-width: 130px").m-auto
                  .estilo___tarjeta_body_2
                    h5 Residuos orgánicos aprovechables
                    p.mb-0 Restos de comida, desechos agrícolas.

              .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
                .estilo___tarjeta(data-aos="zoom-in")
                  .estilo___tarjeta_img
                    figure
                      img(src="@/assets/curso/temas/img25.png", alt='' style="max-width: 130px").m-auto
                  .estilo___tarjeta_body_2.ajuste___tarjeta_body_2
                    h5 Residuos no aprovechables
                    p.mb-0 Papel higiénico, servilletas, papeles y cartones contaminados con comida, papeles metalizados.

    h4.mb-4.caja-titulos-cuarto-nivel(data-aos="fade-right") Disposición de residuos ordinarios

    p.mb-5 Los residuos ordinarios deben ser entregados a la ruta de recolección establecida por el municipio, teniendo en cuenta el plan de gestión integral de residuos vigente en la zona.

    .row.justify-content-center.mb-5
      .col-lg-10
        .row.align-items-center.m-0.style___box_3(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img26.jpg", alt="" ).m-auto
          .col-xl
            p.mb-0 En caso de que no se cuente con dicha ruta, el productor avícola deberá garantizar la adecuada gestión de estos residuos, evitando con ello la generación de focos de contaminación.

    .fondo___color_2
      .px-5
    
        h4.mb-4.caja-titulos-cuarto-nivel(data-aos="fade-right") Disposición de residuos peligrosos

        p.mb-5 Respecto a los residuos peligrosos, su gestión debe realizarse exclusivamente a través de un gestor autorizado, quien será responsable de:

        .row.justify-content-center.mb-5
          .col-xl-10
            .row.justify-content-center
              .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
                .estilo___tarjeta(data-aos="zoom-in")
                  .estilo___tarjeta_img
                    figure
                      img(src="@/assets/curso/temas/img27.svg", alt='' style="max-width: 110px").m-auto
                  .estilo___tarjeta_body_3
                    h5 La recolección
              
              .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
                .estilo___tarjeta(data-aos="zoom-in")
                  .estilo___tarjeta_img
                    figure
                      img(src="@/assets/curso/temas/img28.svg", alt='' style="max-width: 110px").m-auto
                  .estilo___tarjeta_body_3
                    h5 El transporte

              .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
                .estilo___tarjeta(data-aos="zoom-in")
                  .estilo___tarjeta_img
                    figure
                      img(src="@/assets/curso/temas/img29.svg", alt='' style="max-width: 110px").m-auto
                  .estilo___tarjeta_body_3
                    h5 La disposición final de los residuos
        
        p.mb-0 Cada vez que el gestor autorizado realice una recolección, debe entregar el acta correspondiente. Este documento es fundamental como constancia de la disposición adecuada de los residuos peligrosos.

        <!-- BLOQUE 2 -->
        Separador
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2 Ahorro de agua

        p.mb-5 Tanto en las granjas como en las plantas de sacrificio, se requiere del uso continuo de agua, siendo este un recurso clave en las operaciones avícolas. Por lo tanto, es fundamental implementar medidas enfocadas en el uso eficiente y el ahorro de agua, a través de acciones preventivas, tecnológicas y educativas. Las acciones recomendadas para el uso eficiente del agua son:

        .fondo___slider
          .px-5
            .ajuste-slider(data-aos="zoom-in")
              SlyderA(tipo="b")
                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Contar con micromedidores de consumo de agua
                    p.mb-0 Estos dispositivos permiten llevar un seguimiento periódico y preciso del consumo, facilitando la detección de variaciones anómalas y el ajuste de prácticas.
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img30.png', alt='' style="max-width: 500px").m-auto
                
                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Realizar inspecciones periódicas
                    p.mb-0 Se deben efectuar revisiones constantes para identificar fugas en el sistema de distribución, evitando pérdidas y posibles contaminaciones.
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img31.png', alt='' style="max-width: 500px").m-auto

                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Capacitar al personal
                    p.mb-0 Es importante instruir a los trabajadores sobre el uso eficiente del agua, promoviendo la conciencia ambiental y la responsabilidad en el manejo del recurso.
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img32.png', alt='' style="max-width: 500px").m-auto
                
                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Instalar dispositivos de bajo consumo
                    p.mb-0 El uso de equipos y accesorios con tecnologías que reducen el caudal de agua contribuye de forma significativa al ahorro.
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img33.png', alt='' style="max-width: 500px").m-auto

                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Implementar sistemas de control del flujo
                    p.mb-0 Se recomienda el uso de sistemas para elevar la presión del agua en mangueras o de dispositivos con cierre automático del paso de agua, minimizando el uso innecesario.
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img34.png', alt='' style="max-width: 500px").m-auto

    <!-- BLOQUE 3 -->
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Eficiencia energética
    
    p.mb-5 En los procesos productivos que se desarrollan tanto en granjas como en plantas de sacrificio, se requiere del consumo continuo de energía eléctrica. Para garantizar un uso racional de este recurso, es necesario implementar estrategias orientadas a la eficiencia energética, que optimicen el funcionamiento de los sistemas y reduzcan los costos operativos. Las acciones recomendadas para mejorar la eficiencia energética son:

    .bg--img_03
      .row.h-100.align-items-center
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/temas/img35.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Realizar mantenimiento a los equipos de escaldado").ajuste-cajaAcordion
              p.mb-3 El mantenimiento periódico asegura un funcionamiento óptimo y eficiente de estos equipos, reduciendo pérdidas de energía.
            .row(titulo="Controlar los niveles de agua en las calderas").ajuste-cajaAcordion
              p.mb-3 Un control adecuado de los niveles de agua permite mantener rendimientos energéticos estables y evita sobrecargas en el sistema.
            .row(titulo="Aprovechar los condensados de vapor").ajuste-cajaAcordion
              p.mb-3 El aprovechamiento de los condensados permite reutilizar el calor residual, reduciendo la necesidad de energía adicional.
            .row(titulo="Realizar una distribución adecuada de fases").ajuste-cajaAcordion
              p.mb-3 Una distribución equilibrada entre las fases eléctricas mejora el desempeño de los motores y disminuye el consumo energético.
            .row(titulo="Manejo eficiente de los cuartos fríos").ajuste-cajaAcordion
              p.mb-3 Se debe controlar la apertura de puertas, el mantenimiento de sellos y la temperatura interna para minimizar las pérdidas energéticas.
            .row(titulo="Efectuar seguimiento de consumos versus productividad").ajuste-cajaAcordion
              p.mb-3 Monitorear el consumo de energía en relación con la producción permite identificar desviaciones y áreas de mejora, optimizando los procesos.

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
