<template>
    <carousel
            class="VueCarousel__top-slider"
            :per-page="1"
            :paginationActiveColor="'#00aeb0'"
            :autoplay="true"
            :autoplayTimeout="2500"
            :loop="true"
            :paginationSize="15"
    >
        <slide
                v-for="image in images"
                :key="image.subtitle"
                :style="{ 'background-image': 'url('+image.url+')'}"
        >
            <div class="slide__content">
                <div class="slide__content-header">
                    <h1> {{ image.title }} </h1>
                    <p class="slide__content-header-subtitle">{{ image.subtitle }}</p>
                </div>
            </div>
        </slide>
    </carousel>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel'

    export default {
        data: function () {
            return {
                images: [
                    {
                        title: 'Ordinacija',
                        subtitle: 'Prijemni deo',
                        url: '../../images/home/top-slider/prijemni_deo.jpeg',
                    },
                    {
                        title:'Ordinacija',
                        subtitle: 'Sala broj 1',
                        url: '../../images/home/top-slider/ordinacija_1.jpeg',
                    },
                    {
                        title: 'Ordinacija',
                        subtitle: 'Sala broj 2',
                        url: '../../images/home/top-slider/ordinacija_2.jpeg',
                    },
                    {
                        title: 'Ordinacija',
                        subtitle: 'Sala broj 3',
                        url: '../../images/home/top-slider/ordinacija_3.jpeg',
                    },
                    {
                        title: 'Toalet',
                        subtitle: 'Za pacijente',
                        url: '../../images/home/top-slider/toalet.jpeg',
                    },
                    {
                        title: 'Lekarska',
                        subtitle: 'Soba',
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