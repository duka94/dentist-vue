<template>
<section class="footer container-fluid">
  <div class="container">
    <div class="footer__menu">
      <div class="row">
        <div class="col-md-4">
          <router-link
                  @click.native.prevent="goToHome()"
                  class="logo"
                  to="/" >
            <img src="../../images/logo/logo.png">
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="menu">
            <ul class="menu__ul justify-content-between">
              <router-link
                      class="menu__li"
                      @click.native.prevent="goToHome()"
                      to="/"
                      tag="li"
                      active-class="active-footer"
                      exact
              >
                <a>Početna</a>
              </router-link>
              <router-link
                      class="menu__li"
                      to="scheduling"
                      tag="li"
                      active-class="active-footer"
              >
                <a>Zakazivanje</a>
              </router-link>
              <router-link
                      class="menu__li"
                      to="about"
                      tag="li"
                      active-class="active-footer"
              >
                <a>O nama</a>
              </router-link>
              <router-link
                      class="menu__li"
                      to="services"
                      tag="li"
                      active-class="active-footer"
              >
                <a>Usluge</a>
              </router-link>
              <router-link
                      class="menu__li"
                      to="gallery"
                      tag="li"
                      active-class="active-footer"
              >
                <a>Galerija</a>
              </router-link>
              <router-link
                      class="menu__li"
                      to="contact"
                      tag="li"
                      active-class="active-footer"
              >
                <a>Kontakt</a>
              </router-link>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__information">
      <div class="row justify-content-between">
        <div class="col-md-3">
          <div class="information__location">
            <div class="row">
              <div class="icon">
                <svg class="svg-inline--fa fa-w-14" aria-hidden="true" data-prefix="fab" data-icon="marker" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/></svg>
              </div>
              <div class="adr">
                <p>Bulevar Oslobodjenja 49, Novi Sad</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="information__phone">
            <div class="number">
              <a href="tel: 065/444-44-44">
                <svg class="svg-inline--fa fa-w-14 fa-rotate-90" aria-hidden="true" data-prefix="fab" data-icon="phone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/></svg>
                065/444-44-44
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="information__mail">
            <div class="mail">
              <a href="mailto: info@oridinacija.com">
                <svg class="svg-inline--fa fa-w-14" aria-hidden="true" data-prefix="fab" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"/></svg>
                info@oridinacija.com
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-2"></div>
        <div class="col-md-2">
          <div class="information__social">
            <div class="row justify-content-end">
              <div class="info-social">
                <a href=" https://www.facebook.com/stomatoloska.ordinacija.sreckov/ " target="_blank">
                  <svg class="svg-inline--fa fa-facebook-f fa-w-9" aria-hidden="true" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 512" data-fa-i2svg=""><path fill="currentColor" d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"/></svg>
                </a>
              </div>
              <div class="info-social">
                <a href=" https://www.instagram.com/ordinacija_sreckov/ " target="_blank">
                  <svg class="svg-inline--fa fa-instagram fa-w-14" aria-hidden="true" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                </a>
              </div>
              <div class="info-social">
                <a href=" https://www.linkedin.com/in/ordinacija-sreckov-364673165/?trk=onboarding-landing&amp;dl=no " target="_blank">
                  <svg class="svg-inline--fa fa-linkedin-in fa-w-14" aria-hidden="true" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M100.3 448H7.4V148.9h92.9V448zM53.8 108.1C24.1 108.1 0 83.5 0 53.8S24.1 0 53.8 0s53.8 24.1 53.8 53.8-24.1 54.3-53.8 54.3zM448 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448h-.1z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
  export default {
    methods: {
      goToHome() {
        if(this.$route.name === 'home') {
          window.scroll(0, 0) //scroll to the top of page
        }

        this.$router.push({ name: 'home' })
      }
    }
  }
</script>

<style scoped>

</style>
