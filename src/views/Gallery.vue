<template>
  <section class="gallery-page container">
    <div class="gallery-page__header">
      <h2 class="gallery-page__title">Galerija ordinacije Srećkov</h2>
    </div>
    <div class="row">
      <div
        v-for="(src, index) in imgs"
        :key="index"
        class="col-md-3 pic"
        @click="() => showImg(index)"
      >
        <img class="gallery__img" :src="src">
      </div>
    </div>
    <vue-easy-lightbox
      :visible="visible"
      :imgs="imgs"
      @hide="handleHide"
    ></vue-easy-lightbox>
  </section>
</template>

<script>
  export default {
    data() {
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
        // Img Url , string or Array
        visible: false,
        index: 0   // default
      }
    },
    methods: {
      showImg (index) {
        this.index = index
        this.visible = true
      },
      handleHide () {
        this.visible = false
      }
    }
  }

</script>

<style scoped>

</style>