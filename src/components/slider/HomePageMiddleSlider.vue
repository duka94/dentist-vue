<template>
    <div class="container">
        <carousel
                :per-page="4"
                :autoplay="false"
                :navigationEnabled="true"
                :paginationEnabled="false"
                :loop="true"
        >
            <slide
                    v-for="image in images"
                    :key="image.text"
            >
                <div class="slide__content">
                    <div class="slide__content-header">
                        <div>
                            <img v-bind:src="image.image">
                        </div>
                        <h1> {{ image.h1 }} </h1>
                    </div>
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
                        h1: 'Dr Sanja Srećkov',
                        image: '../../images/osoblje/sanja.jpeg',
                    },
                    {
                        h1:'Dr Danka Čepić',
                        image: '../../images/osoblje/danka.jpeg',
                    },
                    {
                        h1: 'Dr Dragana Krulj',
                        image: '../../images/osoblje/dragana.jpeg',
                    },
                    {
                        h1: 'Dr Marijan Milojević',
                        image: '../../images/osoblje/marijan.jpeg',
                    },
                    {
                        h1: 'Prof. dr Zorica Gajinov ',
                        image: '../../images/osoblje/zorica.jpeg',
                    },
                    {
                        h1: 'Milena Radman',
                        image: '../../images/osoblje/milena.jpeg',
                    },
                    {
                        h1: 'Aleksandra Hever',
                        image: '../../images/osoblje/aleksandra.jpeg',
                    },
                    {
                        h1: 'Milica Grozdanović',
                        image: '../../images/osoblje/milica.jpeg',
                    },
                    {
                        h1: 'Drenka Srećkov',
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