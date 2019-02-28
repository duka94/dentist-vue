<template>
  <section class="section">
    <header>
      <div class="container flex">
        <div class="col-md-4">
          <figure>
            <router-link
                    class="logo"
                    to="/"
                    tag="li"
            >
              <img src="../../images/logo/logo.png">
            </router-link>
          </figure>
        </div>
        <div class="col-md-8">
          <nav class="flex w-100">
            <ul class="w-100">
              <router-link
                      class="nav-item"
                      to="/"
                      tag="li"
                      active-class="active" exact
              >
                  <a class="link">početna</a>
              </router-link>
              <router-link
                      class="nav-item"
                      to="scheduling"
                      tag="li"
                      active-class="active"
              >
                  <a class="link">zakazivanje</a>
              </router-link>
              <router-link
                      class="nav-item"
                      to="about"
                      tag="li"
                      active-class="active"
              >

                  <a class="link">o nama</a>
              </router-link>
              <router-link
                      class="nav-item"
                      to="services"
                      tag="li"
                      active-class="active"
              >
                  <a class="link">usluge</a>
              </router-link>
              <router-link
                      class="nav-item"
                      to="gallery"
                      tag="li"
                      active-class="active"
              >
                  <a class="link">galerija</a>
              </router-link>
              <router-link
                      class="nav-item"
                      to="contact"
                      tag="li"
                      active-class="active"
              >
                  <a class="link">kontakt</a>
              </router-link>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  </section>
</template>

<script>
  export default {}
</script>

<style scoped>

</style>
