<template>
    <div>
        <carousel :per-page="1" :paginationActiveColor="'#00aeb0'" :autoplay="true" :autoplayTimeout="1500" :loop="true">
            <slide class="slide_img slide_1">
                <div class="slide__content">
                    <div class="slide__content-header">
                        <h1>Ordinacija</h1>
                        <p class="slide__content-header-p">Prijemni deo</p>
                    </div>
                </div>
            </slide>
            <slide class="slide_img slide_2">
                <div class="slide__content">
                    <div class="slide__content-header">
                        <h1>Ordinacija</h1>
                        <p class="slide__content-header-p">Sala broj 1</p>
                    </div>
                </div>
            </slide>
            <slide class="slide_img slide_3">
                <div class="slide__content">
                    <div class="slide__content-header">
                        <h1>Ordinacija</h1>
                        <p class="slide__content-header-p">Sala broj 2</p>
                    </div>
                </div>
            </slide>
            <slide class="slide_img slide_4">
                <div class="slide__content">
                    <div class="slide__content-header">
                        <h1>Ordinacija</h1>
                        <p class="slide__content-header-p">Sala broj 3</p>
                    </div>
                </div>
            </slide>
            <slide class="slide_img slide_5">
                <div class="slide__content">
                    <div class="slide__content-header">
                        <h1>Toalet</h1>
                        <p class="slide__content-header-p">Za pacijente</p>
                    </div>
                </div>
            </slide>
            <slide class="slide_img slide_6">
                <div class="slide__content">
                    <div class="slide__content-header">
                        <h1>Lekarska</h1>
                        <p class="slide__content-header-p">Soba</p>
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
                        url: '../../images/home/top-slider/ordinacija_1.jpeg',
                    },
                    {
                        h1:'Ordinacija',
                        text: 'Sala broj 1',
                        url: 'http://www.sreckov.com/storage/uploads/homeslideshow/b4ea6af70cb7edf2225701136aab6608.jpeg',
                    },
                    {
                        h1: 'Ordinacija',
                        text: 'Sala broj 2',
                        url: 'http://www.sreckov.com/storage/uploads/homeslideshow/695576534bb8c9a23feb0175a7a23707.jpeg',
                    },
                    {
                        h1: 'Ordinacija',
                        text: 'Sala broj 3',
                        url: 'http://www.sreckov.com/storage/uploads/homeslideshow/d9c64388ec4de071b9ebf9b16d4f58ec.jpeg',
                    },
                    {
                        h1: 'Toalet',
                        text: 'Za pacijente',
                        url: 'http://www.sreckov.com/storage/uploads/homeslideshow/8554c9c392d029b3dc0c7c6013f35a85.jpeg',
                    },
                    {
                        h1: 'Lekarska',
                        text: 'Soba',
                        url: 'http://www.sreckov.com/storage/uploads/homeslideshow/42b22877ccba024982751f4b2012f366.jpeg',
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

<style scoped lang="scss">
    .slide_1 {
        background: url('../../images/home/top-slider/prijemni_deo.jpeg');
    }
    .slide_2 {
        background: url('../../images/home/top-slider/ordinacija_1.jpeg');
    }
    .slide_3 {
        background: url('../../images/home/top-slider/ordinacija_2.jpeg');
    }
    .slide_4 {
        background: url('../../images/home/top-slider/ordinacija_3.jpeg');
    }
    .slide_5 {
        background: url('../../images/home/top-slider/toalet.jpeg');
    }
    .slide_6 {
        background: url('../../images/home/top-slider/lekarska_soba.jpeg');
    }

</style>