<template>
  <div>
    <header-component />
    <router-view />
    <footer-component />
  </div>
</template>

<script>
  import HeaderComponent from './../../components/layout/Header'
  import FooterComponent from './../../components/layout/Footer'

  export default {
    components: {
      HeaderComponent,
      FooterComponent
    }
  }
</script>

<style scoped>

</style>
