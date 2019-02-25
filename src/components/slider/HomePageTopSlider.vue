<template>
    <div>
        <carousel
                :per-page="1"
                :paginationActiveColor="'#00aeb0'"
                :autoplay="true"
                :autoplayTimeout="2500"
                :loop="true"
        >
            <slide
                    v-for="image in images"
                    :key="image.text"
                    :style="{ 'background-image': 'url('+image.url+')'}"
            >
                <div class="slide__content">
                    <div class="slide__content-header">
                        <h1> {{ image.h1 }} </h1>
                        <p class="slide__content-header-p">{{ image.text }}</p>
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
                        h1: 'Ordinacija',
                        text: 'Prijemni deo',
                        url: '../../images/home/top-slider/prijemni_deo.jpeg',
                    },
                    {
                        h1:'Ordinacija',
                        text: 'Sala broj 1',
                        url: '../../images/home/top-slider/ordinacija_1.jpeg',
                    },
                    {
                        h1: 'Ordinacija',
                        text: 'Sala broj 2',
                        url: '../../images/home/top-slider/ordinacija_2.jpeg',
                    },
                    {
                        h1: 'Ordinacija',
                        text: 'Sala broj 3',
                        url: '../../images/home/top-slider/ordinacija_3.jpeg',
                    },
                    {
                        h1: 'Toalet',
                        text: 'Za pacijente',
                        url: '../../images/home/top-slider/toalet.jpeg',
                    },
                    {
                        h1: 'Lekarska',
                        text: 'Soba',
                        url: '../../images/home/top-slider/lekarska_soba.jpeg',
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