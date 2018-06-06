module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'hdonlinephim-web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', type: 'text/css', href: '/css/bootstrap.min.css' },
      // { rel: 'stylesheet', type: 'text/css', href: '/css/font-awesome.css' },
      // { rel: 'stylesheet', type: 'text/css', href: '/css/simple-line-icons.css' },
      // { rel: 'stylesheet', type: 'text/css', href: '/css/owl.carousel.css' },
      // { rel: 'stylesheet', type: 'text/css', href: '/css/owl.theme.css' },
      // { rel: 'stylesheet', type: 'text/css', href: '/css/jquery.bxslider.css' },
      // { rel: 'stylesheet', type: 'text/css', href: '/css/jquery.mobile-menu.css' },
      // { rel: 'stylesheet', type: 'text/css', href: '/css/revslider.css' },
      // { rel: 'stylesheet', type: 'text/css', href: '/css/style.css' },
      // { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800' },
      // { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Raleway:400,300,600,500,700,800' }
    ],
    // script: [
    //   { src: 'js/jquery.min.js' },
    //   { src: 'js/bootstrap.min.js' },
    //   { src: 'js/revslider.js' },
    //   { src: 'js/common.js' },
    //   { src: 'js/owl.carousel.min.js' },
    //   { src: 'js/jquery.mobile-menu.min.js' },
    //   { src: 'js/countdown.js' }
    // ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
