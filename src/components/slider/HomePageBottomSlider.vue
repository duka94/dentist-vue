<template>
  <div class="bottom-slider">
    <carousel
      class="container VueCarousel__bottom-slider"
      :per-page="3"
      :autoplay="false"
      :navigationEnabled="true"
      :paginationEnabled="false"
      :loop="true"
      :scrollPerPage="false"
      navigationNextLabel="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512'><path fill='#00aeb0' path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'/></svg>"
      navigationPrevLabel="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512'><path fill='#00aeb0' path d='M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z'/></svg>"
    >
      <slide v-for="content in contents" :key="content.text">
        <div class="slide__content-bottom">
          <p class="slide__content-bottom-title"> {{ content.title }} </p>
          <p class="slide__content-bottom-text"> {{ content.text }} </p>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
  import {
    Carousel,
    Slide,
  } from 'vue-carousel'

  export default {
    data: function () {
      return {
        contents: [
          {
            title: 'Bogdana Kobilarov',
            text: 'Dr Sanja najbolja, sve preporuke.',
          },
          {
            title: 'Dusan Tosić',
            text: 'Sve najbolje, odlicna ordinacija!',
          },
          {
            title: 'Dragana Popović',
            text: 'Dr Sanja Sreckov najdivnija, najljubaznija, najboja i najlepsa. Sve pohvale za njen rad , strucnost i posvecenost. Srdacna preporuka svima!',
          },
          {
            title: 'Miljan Popović',
            text: 'Sjajna ekipa. Sve pohvale!',
          },
          {
            title: 'Aleksandar Vulin',
            text: 'Sve pohvale dr Sanji Srećkov za rad, stručnost i posvećenost. Srdačna preporuka svima!',
          },
          {
            title: 'Maja Bogdanić',
            text: 'Sve pohvale stomatoloskoj ordinaciji \'\'Sreckov\'\' na prijatnoj atmosferi, ljubaznom osoblju i modernom ambijentu. Najveće pohvale upucujem pozrtvovanom dr Marijanu Milojevicu, koji se bezrezervno trudi da pomogne pacijentima u najvecoj mogucoj meri.',
          },
          {
            title: 'Aleksandra Kuljić',
            text: 'Veoma dobar zubar i dobra osoba. Sve najbolje!',
          },
        ],
      }
    },
    components: {
      Carousel,
      Slide,
    },
  }
</script>
