<template>
<body class="cms-index-index cms-home-page">
  <div id="page">

    <!-- Header -->
    <header-menu></header-menu>
    <!-- End Header -->

    <nuxt/>

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

export default {
  computed: {
    resizedIcon () {
      console.log('Home page');
      if (typeof this.blok.icon !== 'undefined') {
        return '//img2.storyblok.com/80x80' + this.blok.icon.replace('//a.storyblok.com', '')
      }
      return 123;
    }
  }
}
</script>

