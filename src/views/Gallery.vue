<template>
  <section class="gallery-page container">
    <div class="gallery-page__header">
      <h2 class="gallery-page__title"> Galerija ordinacije Srećkov </h2>
    </div>
    <div class="row">
      <div
        v-for="(src, index) in imgs"
        :key="index"
        class="col-md-3 pic"
        @click="showImg(index)"
      >
        <img class="gallery__img" :src="src">
      </div>
    </div>
    <vue-easy-lightbox
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="hideViewer()"
    />
  </section>
</template>

<script>
  import VueEasyLightbox from 'vue-easy-lightbox'

  export default {
    components: {
      VueEasyLightbox,
    },
    data: function () {
      return {
        imgs: [
          '../../images/gallery/galerija2.jpeg',
          '../../images/home/top-slider/ordinacija_2.jpeg',
          '../../images/home/top-slider/ordinacija_1.jpeg',
          '../../images/gallery/galerija1.jpeg',
          '../../images/home/top-slider/ordinacija_3.jpeg',
          '../../images/gallery/galerija.jpeg',
          '../../images/gallery/galerija9.jpeg',
          '../../images/gallery/galerija3.jpeg',
          '../../images/gallery/galerija4.jpeg',
          '../../images/gallery/galerija5.jpeg',
          '../../images/gallery/galerija6.jpeg',
          '../../images/gallery/galerija7.jpeg',
        ],
        visible: false,
        index: 0,
      }
    },
    methods: {
      showImg (value) {
        this.setIndex(value)
        this.setVisible()
      },
      hideViewer () {
        this.visible = false
      },
      setIndex (value) {
        this.index = value
      },
      setVisible () {
        this.visible = true
      },
    },
  }

</script>
