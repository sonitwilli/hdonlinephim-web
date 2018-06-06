<template>

<body class="cms-index-index cms-home-page">
  <div id="page">

    <!-- Header -->
    <header-menu></header-menu>
    <!-- End Header -->

    <!-- Home Page -->
    <home></home>
    <!-- End Home Page -->

    <!-- Footer -->
    <footer-component></footer-component>
    <!-- End Footer -->

  </div>

  <!-- mobile menu -->
  <menu-mobile></menu-mobile>
  <!-- end mobile menu -->

</body>

</template>

<script>
import HeaderMenu from '~/components/HeaderMenu.vue'
import FooterComponent from '~/components/FooterComponent.vue'
import MenuMobile from '~/components/MenuMobile.vue'
import Home from '~/components/Home.vue'

export default {
  components: {
    HeaderMenu,
    FooterComponent,
    MenuMobile,
    Home
  }
}
</script>

<style>

</style>
