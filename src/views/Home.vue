<template>
  <div>
    <home-page-top-slider />
    <section class="about-us-home-page container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="about-us-home-page__content">
            <h1 class="content-title">Stomatološka ordinacija Srećkov</h1>
            <p class="content-text">Stomatološka ordinacija „Srećkov“ počela je sa radom 1995. god u Zmajevu, a od 2003. god i u Novom Sadu.
              Osnivač i vlasnik stomatološke ordinacije je dr Sanja Srećkov. Sa rastom obima posla preselili smo se na novu lokaciju koja se nalazi u jednom od najlepših i
              najmodernijih delova Novog Sada.</p>
            <div class="button-container">
              <a href="#" class="main-button">
                Više o nama <svg class="svg-inline--fa fa-chevron-right fa-w-10" aria-hidden="true" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <img src="../images/home/o-nama-img.jpg">
        </div>
      </div>
    </section>
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