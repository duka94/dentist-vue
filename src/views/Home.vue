<template>
  <div>
    <home-page-top-slider />
    <about-us />
    <home-page-middle-slider />
  </div>
</template>
<script>
  
  import HomePageTopSlider from './../components/slider/HomePageTopSlider'
  import AboutUs from './../components/AboutUs'
  import HomePageMiddleSlider from './../components/slider/HomePageMiddleSlider'
  export default {
    components: {
      HomePageTopSlider,
      AboutUs,
      HomePageMiddleSlider
    }
  }
</script>