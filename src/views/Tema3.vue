<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Medidas de manejo ambiental
    
    .fondo___color_2
      .px-5

        p.mb-5 Con el fin de establecer medidas orientadas a la <strong>prevención, compensación o mitigación</strong> de los impactos ambientales generados en el sector avícola, se plantean las siguientes estrategias de manejo ambiental.

        <!-- BLOQUE 1 -->
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.1 Gestión integral de residuos orgánicos
        
        p.mb-5 Se presentan a continuación las acciones dirigidas a la adecuada <strong>gestión de los residuos orgánicos</strong> que pueden generarse durante los diferentes procesos productivos avícolas.

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img10.svg" style="max-width: 60px").m-auto
          .col
            h3 Sanitización de gallinaza o pollinaza
        
        p.mb-5 Según la Guía Ambiental del Subsector Avícola de la <strong>Federación Nacional de Avicultores de Colombia</strong> y el Fondo Nacional Avícola (2013):

        .row.justify-content-center.mb-5
          .col-lg-10
            .row.align-items-center.m-0.style___box_3(data-aos="zoom-in")
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src="@/assets/curso/temas/img36.jpg", alt="" ).m-auto
              .col-xl
                p.mb-0 "La sanitización hace referencia al conjunto de operaciones físicas, químicas o biológicas, o la mezcla de estas, a las que se somete la gallinaza o pollinaza para garantizar la eliminación de agentes infecto-contagiosos para las aves, otros animales y para los seres humanos, antes de ser retirada del galpón de origen, con el fin de garantizar la bioseguridad de la industria avícola nacional." (p. 120).
        
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img10.svg" style="max-width: 60px").m-auto
          .col
            h3 Ficha de manejo ambiental - Sanitización de gallinaza o pollinaza
        
        p.mb-5 La sanitización de la gallinaza o pollinaza debe realizarse bajo criterios técnicos con el fin de <strong>controlar impactos ambientales</strong> como cambios en las características biológicas y físicas del suelo, así como la generación de olores ofensivos.

    .row.mb-5
      .col-lg-4(data-aos="zoom-in")
        .tarjeta--boton.p-4.h-100
          .row.justify-content-center.mb-3
            .col-12.mb-3
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img37.png', alt="").m-auto
          h3.text-center Objetivo
          p.mb-0 Realizar la sanitización de la gallinaza o pollinaza de acuerdo con criterios técnicos establecidos.
      .col-lg-4(data-aos="zoom-in").espacio___movil_3
        .tarjeta--boton.p-4.h-100
          .row.justify-content-center.mb-3
            .col-12.mb-3
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img38.png', alt="").m-auto
          h3.text-center Impactos a controlar
          <ul class="fa-ul estilo___ul mb-0">
            <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Alteración de las características biológicas y físicas del suelo.</li>
            <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Incremento en la concentración de contaminantes generadores de olores ofensivos.</li>
          </ul>
      .col-lg-4(data-aos="zoom-in").espacio___movil_3
        .tarjeta--boton.p-4.h-100
          .row.justify-content-center.mb-3
            .col-12.mb-3
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img39.png', alt="").m-auto
          h3.text-center Meta
          p.mb-0 Alcanzar la <strong>estabilización del 100 %</strong> de la gallinaza o pollinaza generada en la granja o galpón.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img10.svg" style="max-width: 60px").m-auto
      .col
        h3 Acciones recomendadas
    
    p.mb-5 Para ejecutar adecuadamente la sanitización de la gallinaza o pollinaza, deben seguirse las siguientes acciones:

    .fondo___img
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img41.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img42.svg' style="max-width: 90px").m-auto
                p.mb-0 Retirar comederos, bebederos y demás indumentaria del galpón, y proceder a remover la cama para homogenizar el material.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img43.svg' style="max-width: 90px").m-auto
                p.mb-0 Armar pilas con una altura aproximada de <strong>1,50 metros</strong>.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img44.svg' style="max-width: 90px").m-auto
                p.mb-0 Humedecer la gallinaza o pollinaza durante el armado de la pila hasta alcanzar un <strong>40 % de humedad</strong>, evitando la sobrehumectación para prevenir la proliferación de vectores.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img45.svg' style="max-width: 90px").m-auto
                p.mb-0 Cubrir la pila con <strong>plástico negro</strong> para conservar la temperatura y asegurar el plástico en la base con piedras o ladrillos.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img46.svg' style="max-width: 90px").m-auto
                p.mb-0 Encortinar el galpón durante el proceso de sanitización, que debe durar entre <strong>3 y 5 días</strong>.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img47.svg' style="max-width: 90px").m-auto
                p.mb-0 Monitorear la <strong>temperatura tres veces al día</strong> a diferentes profundidades hasta alcanzar los <strong>55 °C</strong>.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img48.svg' style="max-width: 90px").m-auto
                p.mb-0 Al finalizar, retirar el plástico y desmontar las pilas con ayuda de palas.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img49.svg' style="max-width: 90px").m-auto
                p.mb-0 Dejar reposar el material entre <strong>2 y 3 días</strong> y posteriormente empacar.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img50.svg' style="max-width: 90px").m-auto
                p.mb-0 Lavar la instalación del galpón, dejar secar completamente y aplicar <strong>cal hidratada</strong>.
        
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img10.svg" style="max-width: 60px").m-auto
          .col
            h3 Indicador de seguimiento
        
        p.mb-5 El indicador utilizado para evaluar la efectividad de este proceso es el <strong>porcentaje de gallinaza o pollinaza estabilizada</strong>, expresado en porcentaje (%). La fórmula para calcularlo es:

    .row.justify-content-center.mb-5
      .col-xl-6(data-aos="zoom-in")
        .formula
          .fraction
            h5.numerator.mb-2 Toneladas de gallinaza - pollina estabilizada
            h5.denominator Toneladas de gallinaza - pollina producida
          h5.multiply X 100
    
    p.mb-5 Las <strong>variables</strong> necesarias para este cálculo son:
    
    .fondo___color_2
      .px-5

        .row.justify-content-center.mb-5
          .col-lg-10
            .row.align-items-center.m-0.style___box_3(data-aos="zoom-in")
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src="@/assets/curso/temas/img51.jpg", alt="" ).m-auto
              .col-xl
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-3"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>Peso de la gallinaza o pollinaza producida</strong>: cantidad total generada en un periodo determinado, medida en kilogramos (kg).</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>Gallinaza o pollinaza estabilizada</strong>: cantidad del material que ha sido tratada mediante compost, ensilaje o apilado, también medida en kilogramos (kg).</li>
                </ul>
        
        p.mb-4 Como <strong>restricción</strong>, se requiere contar con una báscula que permita pesar tanto el material crudo como el producto estabilizado.

        p.mb-0 El responsable es el administrador de la granja es el encargado de implementar las acciones de sanitización, realizar el seguimiento del proceso y garantizar su cumplimiento.

        <!-- BLOQUE 2 -->
        Separador
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.2 Manejo de la mortandad

        p.mb-5 Cuando se presentan mortalidades de aves en las granjas avícolas, es necesario seguir un procedimiento técnico y sanitario que evite la generación de focos de contaminación, tanto para los recursos naturales como para las comunidades aledañas. Por tal razón, se recomienda implementar las acciones descritas en la siguiente ficha de manejo ambiental.

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img10.svg" style="max-width: 60px").m-auto
          .col
            h3 Ficha de manejo ambiental - Mortandad de aves en el sector avícola
        
        p.mb-5 La siguiente ficha resume los <strong>objetivos, impactos, metas y acciones</strong> para el adecuado manejo, tratamiento y disposición final de las aves muertas en granjas avícolas:
    
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Objetivo principal
                p.mb-3 Estructurar las acciones y procedimientos ambientales necesarios para el manejo, tratamiento y disposición final de las aves muertas en las granjas avícolas, con el fin de: 
                <ul class="fa-ul estilo___ul_1 mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Prevenir la contaminación ambiental. </li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Reducir los riesgos sanitarios. </li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Controlar la proliferación de vectores. </li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Cumplir con la normatividad ambiental y sanitaria vigente.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img52.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Impactos a controlar
                <ul class="fa-ul estilo___ul_1 mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Cambios en las características biológicas y físicas del suelo.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Aumento en la concentración de contaminantes generadores de olores ofensivos.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Conflictos entre actores públicos y privados.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Posible contaminación de fuentes hídricas superficiales o acuíferos.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img53.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Meta
                p.mb-0 Disponer adecuadamente el <strong>100 % de las aves muertas</strong>.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img54.png', alt='' style="max-width: 500px").m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img10.svg" style="max-width: 60px").m-auto
      .col
        h3 Alternativas para el manejo de la mortandad
    
    p.mb-5 A continuación, se presentan las principales alternativas técnicas para la disposición de aves muertas, con sus respectivas condiciones y recomendaciones:

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0.mb-3.style___box_6(data-aos="zoom-in")
          .col-xl
            h4.mb-4.caja-titulos-cuarto-nivel(data-aos="fade-right") Enterramiento
            <ul class="fa-ul estilo___ul mb-4">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Fosa ubicada a al menos <strong>5 m del nivel freático</strong>.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Borde libre de <strong>2 m</strong> desde la superficie.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Ancho máximo: <strong>3 m</strong>.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Capacidad estimada: <strong>180 aves/m³</strong>.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Suelo preferiblemente <strong>arcilloso</strong> o impermeabilizado con <strong>geomembrana</strong>.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Aplicar <strong>cal viva</strong> (3 - 5 cm) antes y después de colocar las aves.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Cubrir con tierra sin compactar.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Cumplir con lo establecido en la <strong>Resolución 30292 de 2017 del ICA</strong>.</li>
            </ul>
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 1.
              span Estructura de fosa para enterramiento de aves
            figure(data-aos="zoom-in").mb-2
              img(src='@/assets/curso/temas/img55.svg', alt='En la imagen se detalla las dimensiones recomendadas para una fosa de disposición de aves muertas.').m-auto
            figcaption(data-aos="zoom-in") Fuente: Federación Nacional de Avicultores de Colombia y el Fondo Nacional Avícola (2021). Cartilla recomendaciones para contingencias ambientales en el sector avícola.

        .row.align-items-center.m-0.mb-3.style___box_6(data-aos="zoom-in")
          .col-xl  
            h4.mb-4.caja-titulos-cuarto-nivel(data-aos="fade-right") Incineración controlada
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Requiere <strong>autorización de la Autoridad Ambiental</strong>.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Realizar en espacio abierto, alejado de viviendas, combustibles e infraestructuras.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Considerar dirección y velocidad del viento.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Equipos: <strong>EPP completo y extintor</strong>.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Técnica: Apilar en forma de pirámide con material seco; usar <strong>ACPM o aceite</strong> (nunca gasolina).</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Supervisar el proceso hasta su completa finalización.</li>
            </ul>
        
        .row.align-items-center.m-0.mb-3.style___box_6(data-aos="zoom-in")
          .col-xl  
            h4.mb-4.caja-titulos-cuarto-nivel(data-aos="fade-right") Compostaje (Resolución 30292 de 2017)
            p.mb-4 Requiere espacio, insumos y control para evitar contaminación en galpones u otras áreas. El proceso debe ser estrictamente <strong>aeróbico</strong>. 
            TabsA.color-acento-botones(data-aos="zoom-in")
              .tarjeta.color-acento-botones--borde.p-4(titulo="Método 1 (pequeña escala)")
                .row.align-items-center
                  .col-lg
                    h4 Método 1 (pequeña escala)
                    <ul class="fa-ul estilo___ul mb-0">
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Pilas de <strong>3 x 3 m</strong>, separadas <strong>1 m</strong>.</li>
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Base de <strong>50 cm</strong> de mezcla de gallinaza y material vegetal, humedecida.</li>
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Colocar capa de aves, cubrir con la mezcla humedecida al <strong>40 - 60 %</strong>.</li>
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Repetir hasta alcanzar <strong>2 m de altura</strong>.</li>
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Monitorear temperatura con <strong>termómetro de punzón</strong>.</li>
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Reposar la pila durante <strong>45 días</strong>.</li>
                    </ul>
              .tarjeta.color-acento-botones--borde.p-4(titulo="Método 2 (gran volumen)")
                .row.align-items-center
                  .col-lg
                    h4 Método 2 (gran volumen)
                    <ul class="fa-ul estilo___ul mb-0">
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Pila armada en el centro del galpón con <strong>minicargador</strong>.</li>
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Base de <strong>4 m de ancho y 2 m de alto</strong>.</li>
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Misma técnica de apilado y mezcla del Método 1.</li>
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Monitoreo y reposo igualmente por <strong>45 días</strong>.</li>
                    </ul>
              .tarjeta.color-acento-botones--borde.p-4(titulo="Método 3 (con cal)")
                .row.align-items-center
                  .col-lg
                    h4 Método 3 (con cal)
                    <ul class="fa-ul estilo___ul mb-0">
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Aplicación progresiva de <strong>cal</strong> durante el armado de la pila.</li>
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Favorece la <strong>hidrólisis química</strong>, deshidratación de tejidos, eliminación de patógenos y control de olores.</li>
                    </ul>

        .row.align-items-center.m-0.mb-3.style___box_6(data-aos="zoom-in")
          .col-xl  
            h4.mb-4.caja-titulos-cuarto-nivel(data-aos="fade-right") <em>Rendering</em>
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Entrega de aves muertas a <strong>plantas <em>rendering</em> autorizadas</strong> para transformar subproductos animales en proteína y grasa.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Las plantas deben estar registradas ante el <strong>ICA</strong>.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>La entrega debe hacerse en máximo <strong>48 horas <em>post-mortem</em></strong>.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Según <strong>Ángel Ruiz (2025)</strong>, esta práctica contribuye al <strong>aprovechamiento responsable</strong> de los residuos de sacrificio animal.</li>
            </ul>    

    .fondo___color_2
      .px-5
        
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img10.svg" style="max-width: 60px").m-auto
          .col
            h3 Indicadores de seguimiento
        
        p.mb-5 Para evaluar el desempeño en el manejo de la mortandad, se utilizan los siguientes indicadores:

        .row.justify-content-center.mb-5
          .col-xl-9
            .row.m-0.mb-3(data-aos="zoom-in")
              .col-xl-4.style___box_7
                h5.mb-0 Porcentaje de aves muertas en el periodo
              .col-xl.formula.ajuste___formula
                .fraction
                  h5.numerator.mb-2 Número  de aves muertas
                  h5.denominator Número de aves que inician su ciclo productivo
                h5.multiply X 100
            .row.m-0(data-aos="zoom-in")
              .col-xl-4.style___box_7
                h5.mb-0 Porcentaje de aves muertas con disposición final adecuada
              .col-xl.formula.ajuste___formula
                .fraction
                  h5.numerator.mb-2 Número  de aves muertas con disposición final
                  h5.denominator Número total de aves muertas
                h5.multiply X 100
        
        .row.justify-content-center.mb-5
          .col-lg-10
            .row.align-items-center.m-0.style___box_3(data-aos="zoom-in")
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src="@/assets/curso/temas/img56.jpg", alt="" ).m-auto
              .col-xl
                h5 Variables necesarias:
                <ul class="fa-ul estilo___ul mb-3">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Número total de aves muertas en el periodo.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Número inicial de aves en el ciclo productivo.</li>
                </ul>
                p.mb-0 Nota. Como alternativa más precisa, también se puede realizar la medición en función del <strong>peso</strong> de las aves muertas.
        
        p.m-0 El responsable de implementar las acciones y realizar el seguimiento correspondiente es el administrador de la granja.
                
        <!-- BLOQUE 3 -->
        Separador
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.3 Gestión integral de residuos aprovechables, ordinarios y peligrosos

    p.mb-5 La gestión de los residuos sólidos de tipo aprovechable, ordinario y peligroso se debe realizar de acuerdo con lo descrito en la siguiente ficha de manejo ambiental, la cual establece los procedimientos y criterios para su correcta separación, almacenamiento, recolección y disposición final.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img10.svg" style="max-width: 60px").m-auto
      .col
        h3 Ficha de manejo ambiental - Gestión de residuos
    
    p.mb-5 A continuación, se presentan los elementos clave de la ficha de manejo ambiental correspondiente a la gestión de residuos en las granjas y plantas de beneficio del sector avícola:

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Objetivo
                p.mb-3 Implementar procedimientos para la separación, almacenamiento, recolección y disposición adecuada de los residuos <strong>aprovechables, ordinarios y peligrosos</strong> generados en los procesos productivos avícolas.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img57.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Impactos a controlar
                <ul class="fa-ul estilo___ul_1 mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Cambios en las características biológicas del suelo.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Cambios en las características físicas del suelo.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Contaminación de fuentes hídricas.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img58.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Meta
                p.mb-0 Implementar la gestión integral de residuos sólidos en los diferentes procesos productivos del sector avícola.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img59.png', alt='' style="max-width: 500px").m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img10.svg" style="max-width: 60px").m-auto
      .col
        h3 Acciones recomendadas
    
    p.mb-5 A continuación, se presenta un pódcast que expone las acciones recomendadas para una gestión adecuada de los residuos en unidades de producción avícola, destacando prácticas clave para garantizar la sostenibilidad ambiental y el cumplimiento normativo en el sector.

    .row.align-items-center.m-0.mb-5
      .col-xl
        .row.align-items-center.style___box_8(data-aos="zoom-in")
          .col-auto
            figure.d-none.d-xl-block(data-aos="fade-right")
              img(src="@/assets/curso/temas/img60.svg" style="max-width: 220px").m-auto
          .col
            h4.mb-4 Lo invitamos a escuchar el siguiente Pódcast:
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="Gestión integral de residuos en unidades de producción avícola"
              :audio="require('@/assets/componentes/audios/Implementacion_practicas_ambientales_sector_avicola.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
      .col-xl-auto
        figure(data-aos="fade-left").d-none.d-xl-block
          img(src="@/assets/curso/temas/img61.png" style="max-width: 400px").m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img10.svg" style="max-width: 60px").m-auto
      .col
        h3 Indicadores de seguimiento
    
    p.mb-5 Los siguientes indicadores permiten evaluar la eficiencia en la gestión de residuos sólidos generados en el proceso avícola:

    .fondo___color_2
      .px-5
        
        .row.justify-content-center.mb-5
          .col-xl-10
            .row.mb-3.m-0(data-aos="fade-right")
              .col-lg-4.style___box_9
                .row.align-items-center
                  .col-xl-auto
                    figure.d-none.d-xl-block
                      img(src="@/assets/curso/temas/img62.svg" style="max-width: 90px").m-auto
                  .col-xl
                    h5.mb-0 % de residuos recuperables
              .col-lg.style___box_10
                p.mb-0 (Peso de residuos recuperables / Peso total de residuos) x 100.
            .row.mb-3.m-0(data-aos="fade-right")
              .col-lg-4.style___box_9
                .row.align-items-center
                  .col-xl-auto
                    figure.d-none.d-xl-block
                      img(src="@/assets/curso/temas/img63.svg" style="max-width: 90px").m-auto
                  .col-xl
                    h5.mb-0 % de residuos ordinarios
              .col-lg.style___box_10
                p.mb-0 (Peso de residuos ordinarios / Peso total de residuos) x 100.
            .row.mb-0.m-0(data-aos="fade-right")
              .col-lg-4.style___box_9
                .row.align-items-center
                  .col-xl-auto
                    figure.d-none.d-xl-block
                      img(src="@/assets/curso/temas/img64.svg" style="max-width: 90px").m-auto
                  .col-xl
                    h5.mb-0 % de residuos peligrosos
              .col-lg.style___box_10
                p.mb-0 (Peso de residuos peligrosos / Peso total de residuos) x 100.
        
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img10.svg" style="max-width: 60px").m-auto
          .col
            h3 Variables y restricciones
        
        p.mb-5 Para el cálculo de los indicadores, deben considerarse las siguientes variables y posibles limitaciones:

        .row.justify-content-center
          .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            .estilo___tarjeta(data-aos="zoom-in")
              .estilo___tarjeta_img
                figure
                  img(src="@/assets/curso/temas/img65.svg", alt='' style="max-width: 110px").m-auto
              .estilo___tarjeta_body_4
                h5.ajuste___espacio_h5 Total de residuos sólidos
                p.mb-0 Cantidad total de residuos generados en el proceso avícola, en un periodo determinado (kg).
          
          .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            .estilo___tarjeta(data-aos="zoom-in")
              .estilo___tarjeta_img
                figure
                  img(src="@/assets/curso/temas/img66.svg", alt='' style="max-width: 110px").m-auto
              .estilo___tarjeta_body_4
                h5.ajuste___espacio_h5_1 Residuos sólidos recuperables reciclados
                p.mb-0 Cantidad de residuos aprovechables efectivamente reciclados en el mismo periodo (kg).

          .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            .estilo___tarjeta(data-aos="zoom-in")
              .estilo___tarjeta_img
                figure
                  img(src="@/assets/curso/temas/img67.svg", alt='' style="max-width: 110px").m-auto
              .estilo___tarjeta_body_4
                h5.ajuste___espacio_h5 Restricción
                p.mb-0 Puede haber distorsión en los datos según el tipo de presentación de los productos.
                
        <!-- BLOQUE 4 -->
        Separador
        #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.4 Gestión integral de recurso hídrico
    
    p.mb-5 El consumo de agua es un aspecto ambiental clave en los procesos productivos avícolas. Tanto en granjas como en plantas de beneficio se recomienda el uso de <strong>agua potable</strong>, ya que garantiza condiciones sanitarias adecuadas para los productos alimenticios. Para ello, se deben implementar las siguientes medidas de manejo ambiental.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img10.svg" style="max-width: 60px").m-auto
      .col
        h3 Ficha de manejo ambiental - Gestión del recurso hídrico
    
    p.mb-5 A continuación, se presenta la ficha de manejo correspondiente a la gestión del recurso hídrico en el sector avícola:

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Objetivo
                p.mb-0 Establecer prácticas y procedimientos para el <strong>uso eficiente del recurso hídrico</strong> en los procesos productivos avícolas, promoviendo su <strong>aprovechamiento responsable</strong> y el cumplimiento de la <strong>normatividad ambiental vigente</strong>.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img68.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Impactos a controlar
                <ul class="fa-ul estilo___ul_1 mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Contaminación de fuentes hídricas.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Uso ineficiente del agua.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Contaminación del suelo.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img69.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Meta
                <ul class="fa-ul estilo___ul_1 mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Implementar alternativas de uso eficiente del agua en el <strong>100 %</strong> de los procesos productivos avícolas.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Implementar sistemas de tratamiento de agua residual según las necesidades.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img70.png', alt='' style="max-width: 500px").m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img10.svg" style="max-width: 60px").m-auto
      .col
        h3 Acciones recomendadas para la gestión integral del agua
    
    p.mb-5 Las siguientes acciones permiten optimizar el uso del recurso hídrico en <strong>granjas avícolas y plantas de beneficio</strong>, asegurando tanto la eficiencia en el consumo como el cumplimiento de la normatividad ambiental vigente.

    .row.align-items-center.mb-5
      .col-xl
        h4.mb-4.caja-titulos-cuarto-nivel(data-aos="fade-right") Potabilización del agua
        p.mb-0 Se deben implementar <strong>sistemas de potabilización</strong>, especialmente en plantas de beneficio, que incluyan operaciones como <strong>coagulación - floculación, sedimentación, filtración y desinfección</strong>. Además, es necesario contar con tanques de almacenamiento con la capacidad suficiente para garantizar la continuidad de los procesos. Dependiendo de la <strong>calidad del agua cruda</strong>, el sistema de tratamiento puede variar o requerir unidades adicionales.
      .col-xl-auto
        figure.d-none.d-xl-block(data-aos="fade-left")
          img(src="@/assets/curso/temas/img71.png", alt='' style="max-width: 500px").m-auto
    
    h4.mb-4.caja-titulos-cuarto-nivel(data-aos="fade-right") Sistemas ahorradores de agua

    p.mb-5 De acuerdo con la Federación Nacional de Avicultores de Colombia y el Fondo Nacional Avícola (2024), tanto en plantas de beneficio como en granjas de ponedoras y pollos de engorde, se recomienda:

    .row.justify-content-center.mb-5
      .col-lg-10
        .row.align-items-center.m-0.style___box_3(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img72.jpg", alt="" ).m-auto
          .col-xl
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Acondicionar mangueras con <strong>boquillas o pistolas de presión</strong>.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Utilizar mangueras tipo spray con una presión mínima de <strong>10 bares</strong> para el lavado de canales.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Implementar <strong>pistolas industriales</strong>, que permiten un ahorro significativo en el consumo de agua.</li>
            </ul>
    
    p.mb-5 Los resultados del uso de pistolas industriales en mangueras muestran el siguiente ahorro de agua:

    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      h5 Tabla 2.
      span Ahorro de agua con el uso de pistolas en mangueras
    .tabla-a(data-aos="zoom-in").mb-5
      table
        caption Nota.  Federación Nacional de Avicultores de Colombia y Fondo Nacional Avícola (2024).
        thead
          tr
            th.ajuste-border-tabla Diámetro de tubería (pulgadas)
            th.ajuste-border-tabla Tiempo de lavado sin pistola (min)
            th.ajuste-border-tabla Volumen de agua utilizado (L)
            th.ajuste-border-tabla Tiempo de lavado con pistola (min)
            th Volumen de agua utilizado (L)
        tbody
          tr
            td.ajuste-border-tabla ½
            td.ajuste-border-tabla 5
            td.ajuste-border-tabla 66
            td.ajuste-border-tabla 4
            td 53
          tr.ajuste-color-tabla
            td.ajuste-border-tabla ¾
            td.ajuste-border-tabla 5
            td.ajuste-border-tabla 84
            td.ajuste-border-tabla 4
            td 67
          tr
            td.ajuste-border-tabla 1
            td.ajuste-border-tabla 5
            td.ajuste-border-tabla 264
            td.ajuste-border-tabla 4
            td 211
          tr.ajuste-color-tabla
            td.ajuste-border-tabla 1 ½
            td.ajuste-border-tabla 5
            td.ajuste-border-tabla 1135
            td.ajuste-border-tabla 4
            td 1068

    .fondo___color_2
      .px-5
      
        h4.mb-4.caja-titulos-cuarto-nivel(data-aos="fade-right") Uso de hidrolavadoras

        p.mb-5 El uso de <strong>hidrolavadoras</strong> en granjas y plantas de beneficio permite mejorar la eficiencia en las labores de limpieza, optimizando el consumo de agua. En plantas de beneficio, se recomienda establecer <strong>horarios de uso</strong> y priorizar las siguientes áreas críticas:

        .row.justify-content-center.mb-5
          .col-xl-10
            .row.justify-content-center
              .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
                .estilo___tarjeta(data-aos="zoom-in")
                  .estilo___tarjeta_body_5
                    h5 Área de degüelle
              
              .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
                .estilo___tarjeta(data-aos="zoom-in")
                  .estilo___tarjeta_body_5
                    h5 Inspección de canales

              .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
                .estilo___tarjeta(data-aos="zoom-in")
                  .estilo___tarjeta_body_5
                    h5 Área de inspección de vísceras
        
        h4.mb-4.caja-titulos-cuarto-nivel(data-aos="fade-right") Medición del consumo de agua

        p.mb-5 La <strong>instalación de micromedidores</strong> permite conocer el consumo de agua en periodos específicos (diarios, semanales o mensuales). En caso de contar con redes sectorizadas, se recomienda instalar medidores por cada sector para <strong>detectar fugas o consumos inusuales</strong>.

        h4.mb-4.caja-titulos-cuarto-nivel(data-aos="fade-right") Tratamiento de aguas residuales

        p.mb-4 Cuando no se dispone de <strong>sistema de alcantarillado público</strong>, se deben implementar <strong>plantas de tratamiento de aguas residuales</strong> y gestionar el respectivo <strong>permiso de vertimiento</strong> ante la Autoridad Ambiental.

        p.mb-5 Si la planta o granja cuenta con conexión a alcantarillado, es obligatorio garantizar la <strong>remoción de contaminantes</strong> antes del vertimiento. Para cumplir con lo establecido en la <strong>Resolución 0631 de 2015</strong>, que fija los <strong>límites máximos permisibles</strong> para vertimientos según el tipo de actividad, se deben tener en cuenta las siguientes acciones:

        .row.justify-content-center.mb-5
          .col-lg-10
            .row.align-items-center.m-0.style___box_3(data-aos="zoom-in")
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src="@/assets/curso/temas/img73.jpg", alt="" ).m-auto
              .col-xl
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-3"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Realizar <strong>mantenimientos preventivos y correctivos</strong> en la planta de tratamiento.</li>
                  <li class="mb-3"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Monitorear el vertimiento <strong>al menos una vez al año</strong>, mediante un laboratorio acreditado por el IDEAM.</li>
                  <li class="mb-3"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Monitorear la <strong>calidad del agua de la fuente receptora</strong>, verificando que no se afecten sus condiciones fisicoquímicas e hidrobiológicas.</li>
                </ul>

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img10.svg" style="max-width: 60px").m-auto
      .col
        h3 Indicadores de seguimiento
    
    p.mb-5 Los siguientes indicadores permiten evaluar el consumo de agua, el uso de sistemas ahorradores y la eficiencia en el tratamiento de aguas residuales:

    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 3.
          span Indicadores de seguimiento
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla Indicador
                th.ajuste-border-tabla Fórmula
                th Unidad de medida
            tbody
              tr
                td.ajuste-border-tabla.texto-left <strong>Consumo de agua</strong>
                td.ajuste-border-tabla.texto-left m³ de agua consumidos / mes.
                td m³ / periodo.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left <strong>Sistemas ahorradores instalados</strong>
                td.ajuste-border-tabla.texto-left (# de pistolas de presión instaladas / # total de mangueras) x 100.
                td %
              tr
                td.ajuste-border-tabla.texto-left <strong>Hidrolavadoras adquiridas</strong> 
                td.ajuste-border-tabla.texto-left  # de hidrolavadoras adquiridas / año.
                td #
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left <strong>Eficiencia del sistema de tratamiento</strong> 
                td.ajuste-border-tabla.texto-left (# de parámetros fisicoquímicos que cumplen / # total de parámetros exigidos según Res. 0631 de 2015) x 100.
                td %

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img10.svg" style="max-width: 60px").m-auto
      .col
        h3 Variables y restricciones
    
    p.mb-5 A continuación, se describen las principales variables técnicas requeridas para el seguimiento de los indicadores, así como las restricciones que pueden afectar la gestión adecuada del recurso hídrico en procesos avícolas:

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Agua consumida
                p.mb-0 Cantidad de agua utilizada por periodo, usualmente medida en <strong>m³/mes</strong>.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img74.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Sistemas ahorradores
                p.mb-0 Equipos o herramientas adquiridas para <strong>reducir el consumo de agua</strong> durante lavado y mantenimiento.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img75.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Parámetros fisicoquímicos de vertimiento
                p.mb-0 Variables reguladas por la <strong>Resolución 0631 de 2015</strong>, que establecen las concentraciones permitidas en el vertimiento.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img76.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Restricciones
                <ul class="fa-ul estilo___ul_1 mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Ausencia de sistemas de micromedición. </li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>No implementar tecnologías ahorradoras. </li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Falta de monitoreo del vertimiento.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img77.png', alt='' style="max-width: 500px").m-auto

    p.mb-0 El administrador de la granja o planta de beneficio es el encargado de implementar las acciones descritas, realizar el seguimiento y garantizar su cumplimiento.

    <!-- BLOQUE 5 -->
    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.5 Limpieza y desinfección

    p.mb-5 Previo al ingreso de gallinas ponedoras, pollos o antes del inicio de las actividades en las plantas de beneficio, se deben llevar a cabo <strong>acciones de limpieza y desinfección</strong> en las instalaciones. Estas actividades son fundamentales para garantizar condiciones sanitarias.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img10.svg" style="max-width: 60px").m-auto
      .col
        h3 Ficha de manejo ambiental - Limpieza y desinfección
    
    p.mb-5 La siguiente ficha resume los objetivos, impactos, metas y acciones clave para asegurar una limpieza y desinfección efectivas en granjas y plantas avícolas:

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Objetivo
                p.mb-0 Asegurar la <strong>limpieza y desinfección</strong> de las instalaciones avícolas de forma efectiva y sostenible, minimizando riesgos de contaminación y protegiendo el entorno.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img78.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Impactos a controlar
                <ul class="fa-ul estilo___ul_1 mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Contaminación atmosférica.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Incremento de mortandad de aves.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Contaminación de galpones.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Contaminación de áreas en plantas de beneficio.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img79.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Meta
                p.mb-0 Implementar acciones de limpieza y desinfección aplicables en el <strong>100 %</strong> de los procesos productivos avícolas.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img80.png', alt='' style="max-width: 500px").m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img10.svg" style="max-width: 60px").m-auto
      .col
        h3 Acciones recomendadas
    
    p.mb-5 A continuación, se detallan los procedimientos específicos para la limpieza y desinfección en <strong>galpones y plantas de beneficio</strong>:

    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Limpieza y desinfección para galpones

    p.mb-5 Este procedimiento se realiza en dos fases principales: <strong>limpieza en seco y lavado</strong>, seguido de la <strong>desinfección final</strong>.

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Limpieza en seco
                <ul class="fa-ul estilo___ul_1 mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Retirar sobrantes de alimento, bebederos, comederos y otros elementos desmontables.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Eliminar completamente los residuos de la cama, incluyendo esquinas y bordes.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Disponer los residuos en un lugar adecuado para su posterior tratamiento.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img81.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Lavado
                <ul class="fa-ul estilo___ul_1 mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Usar un detergente no iónico de amplio espectro biocida.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Aplicar el producto con hidrolavadora o manguera con pistola de presión.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Dejar actuar el detergente durante 30 minutos.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Lavar con agua a presión paredes, esquinas, bebederos y comederos.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img82.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Desinfección
                <ul class="fa-ul estilo___ul_1 mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Dejar secar completamente las instalaciones antes de desinfectar.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Diluir el desinfectante según las indicaciones del fabricante.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Aplicar el producto en techos, paredes y pisos, asegurando la humectación total de las superficies.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Aplicar también la solución a bebederos, comederos y otros elementos previamente retirados.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img83.png', alt='' style="max-width: 500px").m-auto

    h4.mb-4.caja-titulos-cuarto-nivel(data-aos="fade-right") Limpieza y desinfección en plantas de beneficio

    p.mb-4 Según el INVIMA (s.f.), mediante su formato de evaluación del nivel sanitario, las áreas deben cumplir con los siguientes requisitos mínimos:

    .row.justify-content-center.mb-5
      .col-lg-10
        .row.align-items-center.m-0.style___box_3(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img84.jpg", alt="" ).m-auto
          .col-xl
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-3"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Lavamanos de accionamiento no manual, con agua potable, jabón, desinfectante y sistema de secado.</li>
              <li class="mb-3"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Instalaciones para el lavado, desinfección y almacenamiento de delantales, con colgaderos.</li>
              <li class="mb-3"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Sistemas para desinfección de cuchillos, chairas y sierras con agua a mínimo 82,5 °C o método equivalente.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Áreas de procesamiento dotadas con sistemas de higienización de agua fría y caliente con presión adecuada.</li>
            </ul>

    p.mb-5 Al finalizar cada jornada de beneficio, se deben aplicar los protocolos de limpieza y desinfección establecidos, según las características de la planta y las exigencias técnicas de las autoridades sanitarias.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img10.svg" style="max-width: 60px").m-auto
      .col
        h3 Indicadores de seguimiento
    
    p.mb-5 Los siguientes indicadores permiten evaluar la implementación efectiva de los planes de limpieza y desinfección en las instalaciones avícolas:

    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 4.
          span Indicadores de limpieza y desinfección
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla Indicador
                th.ajuste-border-tabla Fórmula
                th Unidad de medida
            tbody
              tr
                td.ajuste-border-tabla.texto-left Cumplimiento en galpones
                td.ajuste-border-tabla.texto-left (# de galpones que cumplen el cronograma de limpieza y desinfección / Total de galpones) x 100.
                td %
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Cumplimiento en plantas
                td.ajuste-border-tabla.texto-left (# de áreas que cumplen el plan de limpieza y desinfección / Total de áreas de la planta) x 100.
                td %

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img10.svg" style="max-width: 60px").m-auto
      .col
        h3 Variables y restricciones
    
    p.mb-5 A continuación, se describen las variables necesarias para el cálculo de los indicadores, así como las restricciones que pueden afectar la ejecución de las actividades:

    .fondo___color_2
      .px-5

        .row.justify-content-center.mb-5
          .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            .estilo___tarjeta(data-aos="zoom-in")
              .estilo___tarjeta_img
                figure
                  img(src="@/assets/curso/temas/img85.svg", alt='' style="max-width: 110px").m-auto
              .estilo___tarjeta_body_6
                h5.ajuste___espacio_h5 Limpieza de áreas en galpón
                p.mb-0 Número de áreas intervenidas con los protocolos establecidos.
          
          .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            .estilo___tarjeta(data-aos="zoom-in")
              .estilo___tarjeta_img
                figure
                  img(src="@/assets/curso/temas/img86.svg", alt='' style="max-width: 110px").m-auto
              .estilo___tarjeta_body_6
                h5.ajuste___espacio_h5_1 Limpieza de áreas en planta de beneficio
                p.mb-0 Número de zonas en planta higienizadas conforme a las directrices sanitarias.

          .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            .estilo___tarjeta(data-aos="zoom-in")
              .estilo___tarjeta_img
                figure
                  img(src="@/assets/curso/temas/img87.svg", alt='' style="max-width: 110px").m-auto
              .estilo___tarjeta_body_6
                h5.ajuste___espacio_h5 Restricciones
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Condiciones físicas inadecuadas de las áreas.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Falta de cumplimiento de los procedimientos establecidos.</li>
                </ul>

        p.mb-0 El responsable de implementar y supervisar las acciones de limpieza y desinfección es el <strong>administrador de la granja o planta de beneficio</strong>.

        <!-- BLOQUE 6 -->
        Separador
        #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.6 Educación ambiental

        .row.align-items-center.m-0.mb-5
          .col-xl.style___box_2(data-aos="fade-right")
            p.mb-0 La educación ambiental constituye una estrategia fundamental para que los productores avícolas, tanto de pequeñas como de medianas y grandes empresas, puedan capacitar a su personal con enfoque en las <strong>buenas prácticas ambientales</strong>. Esto fortalece la sostenibilidad en cada uno de los procesos productivos, aportando al desarrollo económico y ambiental del sector.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img88.png", alt="" ).m-auto 

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img10.svg" style="max-width: 60px").m-auto
          .col
            h3 Ficha de manejo ambiental - Educación ambiental
    
    p.mb-5 La siguiente ficha resume los elementos clave para estructurar estrategias de educación ambiental en unidades de producción avícola:

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Objetivo
                p.mb-0 Fortalecer las <strong>buenas prácticas ambientales</strong> en el sector avícola, capacitando a <strong>trabajadores, productores y comunidades</strong>.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img89.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Impactos a controlar
                <ul class="fa-ul estilo___ul_1 mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Contaminación atmosférica.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Incremento en la mortandad de aves.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Contaminación en galpones y plantas de beneficio.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Falta de concienciación ambiental.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img90.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Meta
                p.mb-0 Capacitar al <strong>100 % del personal</strong> que labora en sistemas productivos avícolas.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img91.png', alt='' style="max-width: 500px").m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img10.svg" style="max-width: 60px").m-auto
      .col
        h3 Acciones recomendadas
    
    p.mb-5 Las siguientes acciones permiten implementar un programa de educación ambiental efectivo:

    .row.align-items-center.m-0.mb-5(data-aos="zoom-in")
      .col-xl-6.style___box_11
        figure.d-none.d-xl-block.mb-4
          img(src='@/assets/curso/temas/img92.png', alt='' style="max-width: 500px")
        h4 Capacitaciones especializadas
        <ul class="fa-ul estilo___ul_2 mb-0">
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Uso eficiente y ahorro del agua.</li>
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Gestión integral de residuos peligrosos y no peligrosos.</li>
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Buenas prácticas avícolas en el manejo de residuos.</li>
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Bioseguridad en el manejo de medicamentos e insumos sanitarios.</li>
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Manejo adecuado de <strong>pollinaza o gallinaza</strong>.</li>
          <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Tratamiento y manejo de aguas residuales generadas en el proceso avícola.</li>
        </ul>
      .col-xl-6.style___box_12.espacio___movil_3
        figure.d-none.d-xl-block.mb-4
          img(src='@/assets/curso/temas/img93.png', alt='' style="max-width: 500px")
        h4 Campañas educativas
        p.mb-3  Diseñar y ejecutar campañas de educación ambiental mediante el uso de redes sociales y otros medios, enfocadas en <strong>informar, sensibilizar y motivar la acción ambiental</strong>. Se recomienda utilizar:
        <ul class="fa-ul estilo___ul mb-1">
          <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Videos explicativos.</li>
          <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Infografías visuales.</li>
          <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Historias de éxito y buenas prácticas.</li>
          <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Material pedagógico digital.</li>
        </ul>

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img10.svg" style="max-width: 60px").m-auto
      .col
        h3 Indicadores de seguimiento
    
    p.mb-5 Los siguientes indicadores permiten medir el alcance y la efectividad de las acciones educativas en el sector avícola:

    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 5.
          span Indicadores de educación ambiental
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla Indicador
                th.ajuste-border-tabla Fórmula
                th Unidad de medida
            tbody
              tr
                td.ajuste-border-tabla.texto-left Nivel de capacitación en granja
                td.ajuste-border-tabla.texto-left (# de trabajadores capacitados / Total de trabajadores en la granja) x 100.
                td %
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Nivel de capacitación en planta
                td.ajuste-border-tabla.texto-left (# de trabajadores capacitados / Total de trabajadores en planta de sacrificio) x 100.
                td %
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img10.svg" style="max-width: 60px").m-auto
      .col
        h3 Variables y restricciones
    
    p.mb-5 A continuación, se describen las variables requeridas para el cálculo de indicadores y las posibles restricciones que pueden limitar la ejecución de actividades educativas:

    .fondo___img_1
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4").mb-5(data-aos="zoom-in")
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img94.png' ).m-auto
            h4.mb-3.estilo-text Trabajadores capacitados
            p.mb-0 Número total de personas capacitadas por periodo establecido.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img95.png' ).m-auto
            h4.mb-3.estilo-text Asistencia a jornadas
            p.mb-0 Porcentaje de asistencia a las capacitaciones programadas.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img96.png' ).m-auto
            h4.mb-3.estilo-text Horas de capacitación
            p.mb-0 Promedio de horas por trabajador (horas/persona/año).
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img97.png' ).m-auto
            h4.mb-3.estilo-text Actividades educativas realizadas
            p.mb-0 Número de talleres, charlas o campañas efectuadas.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img98.png' ).m-auto
            h4.mb-3.estilo-text Restricciones
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Disponibilidad limitada de personal por turnos de producción.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Restricciones por normas de bioseguridad durante las capacitaciones.</li>
            </ul>
        
        p.mb-5 El responsable de organizar e implementar estas acciones es el <strong>administrador de la granja o planta de beneficio</strong>.

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img10.svg" style="max-width: 60px").m-auto
          .col
            h3 Trámites ante la autoridad ambiental
        
        p.mb-4  Para desarrollar legalmente las actividades del sector avícola, se requiere el aprovechamiento de recursos naturales. Por tanto, es obligatorio cumplir con la <strong>normativa ambiental vigente</strong> y tramitar los permisos correspondientes ante las autoridades competentes. A continuación, se describen los principales trámites ambientales aplicables al sector: 

    .fondo___slider
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Permiso de vertimientos
                p.mb-3 Este permiso debe ser tramitado por personas naturales o jurídicas cuyas actividades generen vertimientos a fuentes hídricas, al suelo o al mar, conforme al Decreto 1076 de 2015. 
                h4 Requisitos:
                <ul class="fa-ul estilo___ul_1 mb-0">
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Elaborar el Plan de Gestión del Riesgo para el Manejo de Vertimientos (PGRMV).</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Presentar la Evaluación Ambiental del Vertimiento.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Adjuntar la documentación legal exigida.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img99.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Permiso de concesión de aguas
                p.mb-3 Este permiso aplica para la captación de agua superficial o subterránea.
                h4 Requisitos:
                <ul class="fa-ul estilo___ul_1 mb-3">
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Elaborar el Programa de Uso Eficiente y Ahorro del Agua (PUEAA).</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Presentar planos del sistema de captación o prueba de bombeo (en caso de aguas subterráneas).</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Acreditar la legalidad del solicitante.</li>
                </ul>
                p.mb-0 <strong>Nota</strong>. Si la granja o planta de beneficio recibe el suministro de una empresa de servicios públicos o junta administradora de acueducto, únicamente deberá pagar el consumo mensual registrado.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img100.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Permiso de aprovechamiento forestal
                p.mb-0 Debe solicitarse ante la Autoridad Ambiental para realizar el aprovechamiento de recursos forestales, como árboles aislados, porciones de bosque o extracciones selectivas.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img101.png', alt='' style="max-width: 500px").m-auto

</template>

<script>
export default {
  name: 'Tema3',
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
