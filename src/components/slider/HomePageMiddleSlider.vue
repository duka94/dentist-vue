<template>
    <div class="middle-slider">
        <header>
            <h1 class="middle-slider__title">Upoznajte naš tim</h1>
        </header>
        <carousel
                  class="container VueCarousel__middle-slider"
                  per-page="4"
                  :autoplay="false"
                  :navigationEnabled="true"
                  :paginationEnabled="false"
                  :loop="true"
                  :scrollPerPage="false"
                  navigationNextLabel="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512'><path fill='#00aeb0' path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'/></svg>"
                  navigationPrevLabel="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512'><path fill='#00aeb0' path d='M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z'/></svg>"
        >
            <slide v-for="image in images" :key="image.p">
                <div class="slide__content-middle">
                    <img class="slide__content-middle-img" :src="image.image">
                    <p class="slide__content-middle-title"> {{ image.title }} </p>
                </div>
            </slide>
        </carousel>
    </div>
</template>
<script>
    import { Carousel, Slide } from 'vue-carousel'

    export default {
        data: function () {
            return {
                images: [
                    {
                        title: 'Dr Sanja Srećkov',
                        image: '../../images/osoblje/sanja.jpeg',
                    },
                    {
                        title:'Dr Danka Čepić',
                        image: '../../images/osoblje/danka.jpeg',
                    },
                    {
                        title: 'Dr Dragana Krulj',
                        image: '../../images/osoblje/dragana.jpeg',
                    },
                    {
                        title: 'Dr Marijan Milojević',
                        image: '../../images/osoblje/marijan.jpeg',
                    },
                    {
                        title: 'Prof. dr Zorica Gajinov ',
                        image: '../../images/osoblje/zorica.jpeg',
                    },
                    {
                        title: 'Milena Radman',
                        image: '../../images/osoblje/milena.jpeg',
                    },
                    {
                        title: 'Aleksandra Hever',
                        image: '../../images/osoblje/aleksandra.jpeg',
                    },
                    {
                        title: 'Milica Grozdanović',
                        image: '../../images/osoblje/milica.jpeg',
                    },
                    {
                        title: 'Drenka Srećkov',
                        image: '../../images/osoblje/drenka.jpeg',
                    },
                ]
            }
        },
        components: {
            Carousel,
            Slide
        }
    }
</script>