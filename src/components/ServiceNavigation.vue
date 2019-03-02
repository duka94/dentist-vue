<template>
    <div class="col-lg-4">
        <div class="services__menu">
            <ul class="services__menu-ul">
                <li class="services__menu-li">
                    <a v-scroll-to="{el: '#konzervativna',  duration: 5000 }">
                        Konzervativna i estetska stomatologija
                    </a>
                </li>
                <li class="services__menu-li">
                    <a v-scroll-to="{el: '#oralna',  duration: 5000 }">
                        Oralna hirurgija
                    </a>
                </li>
                <li class="services__menu-li">
                    <a v-scroll-to="{el: '#parodontologija',  duration: 5000 }">
                        Parodontologija
                    </a>
                </li>
                <li class="services__menu-li">
                    <a v-scroll-to="{el: '#protetika',  duration: 5000 }">
                        Protetika
                    </a>
                </li>
                <li class="services__menu-li">
                    <a v-scroll-to="{el: '#dečija',  duration: 5000 }">
                        Dečija i preventivna stomatologija
                    </a>
                </li>
                <li class="services__menu-li">
                    <a v-scroll-to="{el: '#ortopedija',  duration: 5000 }">
                        Ortopedija vilica
                    </a>
                </li>
                <li class="services__menu-li">
                    <a v-scroll-to="{el: '#endodoncija',  duration: 5000 }">
                        Endodoncija- lečenje kanala korena zuba
                    </a>
                </li>
                <li class="services__menu-li">
                    <a v-scroll-to="{el: '#prf',  duration: 5000 }">
                        PRF (Platelet-rich fibrin) trombocitima obogaćen fibrin
                    </a>
                </li>
                <li class="services__menu-li">
                    <a v-scroll-to="{el: '#diodni',  duration: 5000 }">
                        Diodni laser u stomatologiji
                    </a>
                </li>
                <li class="services__menu-li">
                    <a v-scroll-to="{el: '#kozmetsko',  duration: 5000 }">
                        Kozmetsko-estetski tretmani
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ServiceNavigation"
    }
</script>

<style scoped>

</style>