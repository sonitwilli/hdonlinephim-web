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
      { rel: 'stylesheet', type: 'text/css', href: '/bootstrap/css/bootstrap.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/font-awesome.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/common.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/animate.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/jQuery-ui/jquery-ui.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/style.css' },

    ]
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
