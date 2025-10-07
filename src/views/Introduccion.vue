<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .fondo___color_1
      .px-5
    
        p.mb-5 El sector avícola en Colombia ha experimentado un crecimiento significativo en las últimas décadas, lo que ha implicado un aumento en la demanda de estrategias que garanticen la sostenibilidad de sus procesos productivos. En este contexto, surge la necesidad de aplicar medidas de manejo ambiental que permitan prevenir, mitigar y compensar los impactos asociados a las actividades avícolas, asegurando así un equilibrio entre productividad y cuidado del entorno.

        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/intro/img2.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Este componente formativo, titulado <strong>medidas de manejo ambiental aplicadas al sector avícola</strong>, ofrece un panorama integral sobre las prácticas que deben implementarse en granjas y plantas de beneficio para garantizar un desarrollo responsable. A través de contenidos claros y aplicables, se abordan acciones enfocadas en la producción más limpia, la gestión eficiente de los recursos naturales, el manejo de residuos y la adopción de tecnologías limpias que aportan a la reducción de riesgos sanitarios y ambientales.
        
        .row.align-items-center.m-0
          .col-xl.style___box_1(data-aos="fade-right")
            p.mb-0 De esta manera, se busca que los participantes comprendan la importancia de adoptar buenas prácticas ambientales como parte fundamental de la bioseguridad y la sostenibilidad del sector. Con ello, no solo se asegura el cumplimiento de la normatividad vigente, sino también la construcción de una avicultura más competitiva, comprometida con la salud de las comunidades y con la preservación de los recursos naturales.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/intro/img3.svg", alt="" ).m-auto 

</template>

<script>
export default {
  name: 'Introduccion',
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
