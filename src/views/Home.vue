<template>
  <div>
    <home-page-top-slider />
    <home-page-middle-slider />
    <home-page-bottom-slider />
  </div>
</template>
<script>
  
  import HomePageTopSlider from './../components/slider/HomePageTopSlider'
  import HomePageMiddleSlider from './../components/slider/HomePageMiddleSlider'
  import HomePageBottomSlider from './../components/slider/HomePageBottomSlider'
  export default {
    components: {
      HomePageTopSlider,
      HomePageMiddleSlider,
      HomePageBottomSlider
    }
  }
</script>