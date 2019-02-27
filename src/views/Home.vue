<template>
  <div>
    <home-page-top-slider />
    <about-us />
    <home-page-middle-slider />
    <home-page-bottom-slider />
  </div>
</template>
<script>
  import HomePageTopSlider from './../components/slider/HomePageTopSlider'
  import AboutUs from './../components/AboutUs'
  import HomePageMiddleSlider from './../components/slider/HomePageMiddleSlider'
  import HomePageBottomSlider from './../components/slider/HomePageBottomSlider'
  
  export default {
    components: {
      HomePageTopSlider,
      AboutUs,
      HomePageMiddleSlider
      HomePageMiddleSlider,
      HomePageBottomSlider
    }
  }
</script>